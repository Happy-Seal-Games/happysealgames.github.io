(function registerReveal(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};

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
    const requestedSection = new URLSearchParams(global.location.search).get('section');
    if (requestedSection) {
      const scroll = () => document.getElementById(requestedSection)?.scrollIntoView();
      scroll();
      global.addEventListener('load', scroll, { once: true });
      return;
    }

    if (!global.location.hash) return;
    try { document.querySelector(global.location.hash)?.scrollIntoView(); } catch {}
  }

  function init() {
    revealSections();
    scrollToRequestedSection();
  }

  app.Reveal = Object.freeze({ init });
})(window);
