(() => {
  const preferenceKey = 'colooon-language';
  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem(preferenceKey); } catch (_) {}

  const path = window.location.pathname.replace(/index\.html$/, '');
  const isEnglishHome = path === '/' || path === '';
  const isEnglishJournal = path.startsWith('/journal/');
  const canAutoSelect = isEnglishHome || isEnglishJournal;

  if (canAutoSelect) {
    const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    const shouldUseChinese = savedLanguage === 'zh' || (!savedLanguage && browserLanguage.toLowerCase().startsWith('zh'));
    if (shouldUseChinese) {
      const chinesePath = '/zh' + (path === '/' || path === '' ? '/' : path);
      window.location.replace(chinesePath);
      return;
    }
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-language-choice]');
    if (!link) return;
    try { localStorage.setItem(preferenceKey, link.dataset.languageChoice); } catch (_) {}
  });
})();
