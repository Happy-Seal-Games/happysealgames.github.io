(function registerI18n(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};
  const supportedLanguages = Object.freeze(['tr', 'en']);
  let currentLanguage = 'tr';

  function getTables() {
    return global.HSG_DATA?.translations || {};
  }

  function detectLanguage() {
    const requestedLanguage = new URLSearchParams(global.location.search).get('lang');
    if (supportedLanguages.includes(requestedLanguage)) return requestedLanguage;

    try {
      const savedLanguage = global.localStorage.getItem('happy-seal-language');
      if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
    } catch {}

    const languages = global.navigator.languages?.length
      ? global.navigator.languages
      : [global.navigator.language];
    const hasTurkishLocale = languages.some((language) => {
      try {
        const locale = new Intl.Locale(language);
        return locale.language === 'tr' || locale.region === 'TR';
      } catch {
        return language?.toLowerCase().startsWith('tr');
      }
    });
    const isTurkeyTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Istanbul';
    return hasTurkishLocale || isTurkeyTimeZone ? 'tr' : 'en';
  }

  function getCopy(language = currentLanguage) {
    return getTables()[language] || {};
  }

  function setContent(selector, dataAttribute, copy, setter) {
    document.querySelectorAll(selector).forEach((element) => {
      const key = element.dataset[dataAttribute];
      if (Object.hasOwn(copy, key)) setter(element, copy[key]);
    });
  }

  function applyCopy(copy) {
    const description = document.querySelector('meta[name="description"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (description && copy.metaDescription) description.content = copy.metaDescription;
    if (openGraphDescription && copy.ogDescription) openGraphDescription.content = copy.ogDescription;

    setContent('[data-i18n]', 'i18n', copy, (element, value) => { element.textContent = value; });
    setContent('[data-i18n-html]', 'i18nHtml', copy, (element, value) => { element.innerHTML = value; });
    setContent('[data-i18n-alt]', 'i18nAlt', copy, (element, value) => { element.alt = value; });
    setContent('[data-i18n-aria]', 'i18nAria', copy, (element, value) => { element.setAttribute('aria-label', value); });
  }

  function validate() {
    const tables = getTables();
    const reference = tables.tr || {};
    const referenceKeys = new Set(Object.keys(reference));
    const errors = [];

    supportedLanguages.forEach((language) => {
      const table = tables[language];
      if (!table) {
        errors.push(`Missing language table: ${language}`);
        return;
      }

      referenceKeys.forEach((key) => {
        if (!Object.hasOwn(table, key)) errors.push(`Missing ${language} key: ${key}`);
      });
      Object.keys(table).forEach((key) => {
        if (!referenceKeys.has(key)) errors.push(`Extra ${language} key: ${key}`);
      });
    });

    const bindings = [
      ['[data-i18n]', 'i18n'],
      ['[data-i18n-html]', 'i18nHtml'],
      ['[data-i18n-alt]', 'i18nAlt'],
      ['[data-i18n-aria]', 'i18nAria']
    ];
    bindings.forEach(([selector, dataAttribute]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const key = element.dataset[dataAttribute];
        supportedLanguages.forEach((language) => {
          if (!Object.hasOwn(tables[language] || {}, key)) errors.push(`Missing ${language} DOM key: ${key}`);
        });
      });
    });

    if (errors.length) console.error('[HSG i18n]', [...new Set(errors)].join('\n'));
    return errors;
  }

  function setLanguage(language, remember = false) {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;
    const copy = getCopy();
    document.documentElement.lang = language;
    applyCopy(copy);

    document.querySelectorAll('[data-language]').forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    if (remember) {
      try { global.localStorage.setItem('happy-seal-language', language); } catch {}
    }

    document.dispatchEvent(new CustomEvent('hsg:languagechange', {
      detail: { language, copy }
    }));
  }

  function init() {
    validate();
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.dataset.language, true));
    });
    setLanguage(detectLanguage());
  }

  app.I18n = Object.freeze({ init, setLanguage, getLanguage: () => currentLanguage, getCopy, validate });
})(window);
