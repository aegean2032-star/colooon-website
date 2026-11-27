'use strict';

(() => {
  if (!['http:', 'https:'].includes(location.protocol)) return;

  const actions = document.querySelector('.purchase-actions');
  const availability = document.querySelector('.paid-plan .availability');
  const consent = document.getElementById('accept-purchase-terms');
  const button = document.getElementById('open-checkout');
  const feedback = document.getElementById('checkout-feedback');
  const sandbox = document.documentElement.dataset.paddleSandbox === 'true';
  const chinese = document.documentElement.lang.startsWith('zh');
  const messages = chinese ? {
    opening: '正在打开 Paddle 结账…',
    reserved: '剩余早鸟名额正在结账中，请稍后重试。',
    failure: '暂时无法打开结账，请重试。',
    completed: '已提交付款。确认后，许可证将发到你在结账时填写的邮箱。',
  } : {
    opening: 'Opening Paddle checkout…',
    reserved: 'The remaining early-price spots are held by open checkouts. Please try again shortly.',
    failure: 'Could not open checkout. Please try again.',
    completed: 'Payment submitted. Once confirmed, your license will be sent to your checkout email.',
  };
  const transaction = new URLSearchParams(location.search).get('_ptxn');
  const transactionId = /^txn_[a-z0-9]{26}$/.test(transaction || '') ? transaction : null;
  let paddle;
  let busy = false;
  let completed = false;

  function showStatus(status = '', error = false) {
    feedback.textContent = status;
    feedback.dataset.error = String(error);
  }

  function updateButton() {
    button.disabled = !consent.checked || busy || completed;
    if (busy) button.setAttribute('aria-busy', 'true');
    else button.removeAttribute('aria-busy');
  }

  function onCheckoutEvent(event) {
    switch (event.name) {
      case 'checkout.loaded':
        showStatus();
        break;
      case 'checkout.closed':
        busy = false;
        showStatus(completed ? messages.completed : '');
        break;
      case 'checkout.completed':
        busy = false;
        completed = true;
        showStatus(messages.completed);
        break;
      case 'checkout.error':
        busy = false;
        showStatus(messages.failure, true);
        break;
    }
    updateButton();
  }

  async function initializePaddle(token) {
    if (transaction !== null && !transactionId) {
      const url = new URL(location.href);
      url.searchParams.delete('_ptxn');
      history.replaceState(history.state, '', url);
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
    try {
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.append(script);
      });
      if (sandbox) window.Paddle.Environment.set('sandbox');
      window.Paddle.Initialize({
        token,
        checkout: { settings: { displayMode: 'overlay', locale: chinese ? 'zh-Hans' : 'en', showAddDiscounts: false } },
        eventCallback: onCheckoutEvent,
      });
      return window.Paddle;
    } catch (error) {
      script.remove();
      throw error;
    }
  }

  async function enableCheckout() {
    try {
      const configUrl = new URL('/api/config', location.origin);
      if (transactionId && !sandbox) configUrl.searchParams.set('transaction_id', transactionId);
      const response = await fetch(configUrl, { cache: 'no-store', credentials: 'same-origin' });
      if (!response.ok) return;
      const config = await response.json();
      const expectedMode = sandbox ? 'paddle-sandbox' : 'paddle-live';
      const tokenPattern = sandbox ? /^test_[a-zA-Z0-9]{27}$/ : /^live_[a-zA-Z0-9]{27}$/;
      const controlledCheckout = !sandbox && transactionId && config?.controlledCheckout === true;
      if (config?.mode !== expectedMode || (config.checkoutEnabled !== true && !controlledCheckout) ||
          !tokenPattern.test(config.clientToken || '')) return;

      consent.checked = false;
      consent.disabled = false;
      for (const label of button.querySelectorAll('[data-ready-label]')) {
        label.textContent = label.dataset.readyLabel;
      }
      consent.addEventListener('change', updateButton);
      button.addEventListener('click', async () => {
        if (button.disabled || !consent.checked) return;
        busy = true;
        updateButton();
        showStatus(messages.opening);
        try {
          if (!paddle) {
            paddle = await initializePaddle(config.clientToken);
            // On a payment link Paddle.js opens the transaction during initialization.
            if (transactionId) return;
          }
          if (transactionId) {
            paddle.Checkout.open({ transactionId });
            return;
          }
          const checkout = await fetch('/api/checkout', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ locale: chinese ? 'zh-CN' : 'en' }),
          });
          if (checkout.status === 409) {
            busy = false;
            updateButton();
            showStatus(messages.reserved, true);
            return;
          }
          if (!checkout.ok) throw Error('Checkout unavailable');
          const result = await checkout.json();
          if (!/^txn_[a-z0-9]{26}$/.test(result.transactionId || '')) throw Error('Invalid transaction');
          paddle.Checkout.open({ transactionId: result.transactionId });
        } catch {
          busy = false;
          updateButton();
          showStatus(messages.failure, true);
        }
      });
      updateButton();
      availability.hidden = true;
      actions.hidden = false;
    } catch {
      // The public page remains useful when checkout configuration is unavailable.
    }
  }

  void enableCheckout();
})();
