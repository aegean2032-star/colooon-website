'use strict';

(() => {
  const get = id => document.getElementById(id);
  const form = get('recovery-form');
  const send = form.querySelector('button[type="submit"]');
  const redeem = get('redeem-recovery');
  const result = get('recovered-license');
  const code = get('license-code');
  const feedback = get('recovery-feedback');
  const languageLinks = document.querySelector('.language-switch');
  const chinese = document.documentElement.lang.startsWith('zh');
  const messages = chinese ? {
    requested: '如果该邮箱关联有效订单，我们会发送找回链接。',
    requestFailed: '暂时无法发送找回链接，请重试。',
    invalidLink: '找回链接已失效，请重新申请。',
    redeemFailed: '暂时无法领取许可证，请重试。',
    recovered: '已找回许可证。请复制并在 colooon 扩展中激活。',
    copied: '许可证已复制。',
    selected: '许可证已选中，请使用系统快捷键复制。',
  } : {
    requested: 'If this email matches an active order, we’ll send a recovery link.',
    requestFailed: 'Could not send a recovery link. Please try again.',
    invalidLink: 'This recovery link is no longer valid. Request a new one.',
    redeemFailed: 'Could not recover your license. Please try again.',
    recovered: 'License recovered. Copy it and activate it in the colooon extension.',
    copied: 'License copied.',
    selected: 'The license is selected. Use your keyboard shortcut to copy it.',
  };

  function showStatus(message, error = false) {
    feedback.textContent = message;
    feedback.dataset.error = String(error);
  }

  async function request(endpoint, payload) {
    const response = await fetch('/api/recovery/' + endpoint, {
      method: 'POST',
      cache: 'no-store',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok || data.ok !== true) throw new Error(data.error || 'REQUEST_FAILED');
    return data;
  }

  async function whileBusy(button, operation) {
    if (button.disabled) return;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    try {
      await operation();
    } finally {
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  }

  async function enableRecovery() {
    try {
      const response = await fetch('/api/config', { cache: 'no-store', credentials: 'same-origin' });
      if (!response.ok) return;
      const config = await response.json();
      if (config?.mode !== 'paddle-live' || config.recoveryEnabled !== true) return;
    } catch {
      return;
    }

    let token = new URLSearchParams(location.hash.slice(1)).get('recovery');
    if (token !== null) {
      history.replaceState(history.state, '', location.pathname + location.search);
      if (!/^[A-Za-z0-9_-]{43}$/.test(token)) {
        token = null;
        showStatus(messages.invalidLink, true);
      }
    }
    form.hidden = Boolean(token);
    redeem.hidden = !token;
    languageLinks.hidden = Boolean(token);
    get('recovery-instructions').hidden = Boolean(token);
    get('recovery-unavailable').hidden = true;

    form.addEventListener('submit', event => {
      event.preventDefault();
      void whileBusy(send, async () => {
        try {
          await request('request', { email: get('order-email').value.trim(), locale: chinese ? 'zh-CN' : 'en' });
          showStatus(messages.requested);
        } catch {
          showStatus(messages.requestFailed, true);
        }
      });
    });

    redeem.addEventListener('click', () => whileBusy(redeem, async () => {
      try {
        const data = await request('redeem', { token });
        if (typeof data.code !== 'string' || !/^cln_[A-Za-z0-9_-]{43}$/.test(data.code)) {
          throw new Error('LICENSE_MISSING');
        }
        token = null;
        code.value = data.code;
        redeem.hidden = true;
        result.hidden = false;
        showStatus(messages.recovered);
        get('copy-license').focus();
      } catch (error) {
        if (error.message === 'RECOVERY_INVALID') {
          token = null;
          redeem.hidden = true;
          form.hidden = false;
          languageLinks.hidden = false;
          get('recovery-instructions').hidden = false;
          showStatus(messages.invalidLink, true);
          get('order-email').focus();
        } else {
          showStatus(messages.redeemFailed, true);
        }
      }
    }));

    get('copy-license').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.value);
        showStatus(messages.copied);
      } catch {
        code.focus();
        code.select();
        showStatus(messages.selected);
      }
    });
    send.disabled = false;
    get('recovery-actions').hidden = false;
  }

  void enableRecovery();
})();
