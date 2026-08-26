(function registerReveal(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};
  const sectionAliases = Object.freeze({
    hakkimizda: 'about-us',
    oyunlar: 'other-games',
    iletisim: 'contact',
    'yol-haritasi': 'roadmap'
  });

  function normalizeSection(section) {
    return sectionAliases[section] || section;
  }

  function revealSections() {
    if (!('IntersectionObserver' in global)) {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }

  function scrollToRequestedSection() {
    const requestedSection = normalizeSection(new URLSearchParams(global.location.search).get('section'));
    if (requestedSection) {
      const scroll = () => document.getElementById(requestedSection)?.scrollIntoView();
      scroll();
      global.addEventListener('load', scroll, { once: true });
      return;
    }

    if (!global.location.hash) return;
    const hashSection = decodeURIComponent(global.location.hash.slice(1));
    const normalizedSection = normalizeSection(hashSection);
    if (hashSection !== normalizedSection) global.history.replaceState(null, '', `#${normalizedSection}`);
    document.getElementById(normalizedSection)?.scrollIntoView();
  }

  function init() {
    revealSections();
    scrollToRequestedSection();
  }

  app.Reveal = Object.freeze({ init });
})(window);
