(function registerZarUpdates(global) {
  'use strict';
  const app = global.HSG = global.HSG || {};

  function init() {
    const carousel = document.querySelector('.zar-updates');
    if (!carousel) return;
    const surface = carousel.querySelector('.updates-slides');
    const panels = [...carousel.querySelectorAll('[data-update-panel]')];
    const choices = [...carousel.querySelectorAll('[data-update-select]')];
    const motion = global.matchMedia('(prefers-reduced-motion: reduce)');
    let current = 0;
    let start = null;
    let animation;

    function show(index, direction = index - current) {
      animation?.cancel();
      current = (index + panels.length) % panels.length;
      panels.forEach((panel, i) => { panel.hidden = i !== current; });
      choices.forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
      if (direction && !motion.matches && panels[current].animate) {
        animation = panels[current].animate([
          { opacity: 0, transform: `translateX(${Math.sign(direction) * 40}px)` },
          { opacity: 1, transform: 'translateX(0)' }
        ], { duration: 320, easing: 'cubic-bezier(.22, 1, .36, 1)' });
      }
    }

    choices.forEach((button, i) => button.addEventListener('click', () => show(i)));
    carousel.querySelector('[data-update-prev]').addEventListener('click', () => show(current - 1, -1));
    carousel.querySelector('[data-update-next]').addEventListener('click', () => show(current + 1, 1));
    carousel.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      // Do not leave keyboard focus inside a panel that is about to be hidden.
      if (surface.contains(document.activeElement)) choices[current].focus();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      show(current + direction, direction);
    });
    surface.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary || event.button !== 0 || event.target.closest('a, button')) return;
      start = { x: event.clientX, y: event.clientY, id: event.pointerId };
      surface.setPointerCapture(event.pointerId);
    });
    surface.addEventListener('pointerup', (event) => {
      if (!start || start.id !== event.pointerId) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      start = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    });
    surface.addEventListener('pointercancel', () => { start = null; });
    surface.addEventListener('lostpointercapture', () => { start = null; });
    surface.addEventListener('dragstart', (event) => event.preventDefault());
    motion.addEventListener('change', () => { if (motion.matches) animation?.cancel(); });

    function openRequestedPanel() {
      const requested = global.location.hash.slice(1) || new URLSearchParams(global.location.search).get('section');
      if (requested === 'roadmap' || requested === 'yol-haritasi') show(1, 0);
    }
    global.addEventListener('hashchange', openRequestedPanel);
    openRequestedPanel();
  }
  app.ZarUpdates = Object.freeze({ init });
})(window);
