(function registerTheme(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};
  const storageKey = 'happy-seal-theme';
  const systemTheme = global.matchMedia('(prefers-color-scheme: dark)');
  let currentTheme;

  function getSavedTheme() {
    try {
      const savedTheme = global.localStorage.getItem(storageKey);
      return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null;
    } catch {
      return null;
    }
  }

  function getPreferredTheme() {
    return getSavedTheme() || (systemTheme.matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.checked = theme === 'dark';

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#0e1117' : '#f9c80e';

    document.dispatchEvent(new CustomEvent('hsg:themechange', { detail: { theme } }));
  }

  function saveTheme(theme) {
    try { global.localStorage.setItem(storageKey, theme); } catch {}
  }

  function init() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.checked = currentTheme === 'dark';
    toggle.addEventListener('change', () => {
      const theme = toggle.checked ? 'dark' : 'light';
      saveTheme(theme);
      applyTheme(theme);
    });

    systemTheme.addEventListener?.('change', (event) => {
      if (!getSavedTheme()) applyTheme(event.matches ? 'dark' : 'light');
    });
  }

  applyTheme(getPreferredTheme());
  app.Theme = Object.freeze({ init, getTheme: () => currentTheme, setTheme: applyTheme });
})(window);
