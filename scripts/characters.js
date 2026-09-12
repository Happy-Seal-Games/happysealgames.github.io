(function registerCharacters(global) {
  'use strict';
  const app = global.HSG = global.HSG || {};
  function init() {
    document.querySelectorAll('.character-carousel').forEach((carousel) => {
      const slides = Array.from(carousel.querySelectorAll('.character-slide'));
      const surface = carousel.querySelector('.character-slides');
      const reducedMotion = global.matchMedia('(prefers-reduced-motion: reduce)');
      let current = 0;
      let start = null;
      let finishTransition = () => {};
      function move(direction) {
        if (slides.length < 2) return;
        finishTransition();
        const outgoing = slides[current];
        current = (current + direction + slides.length) % slides.length;
        slides.forEach((slide, index) => { slide.hidden = index !== current; });
        carousel.querySelector('.character-position').textContent = (current + 1) + ' / ' + slides.length;
        const incoming = slides[current];
        if (reducedMotion.matches || typeof incoming.animate !== 'function') return;

        // Keep both slides in the same grid cell; only the new one is announced.
        outgoing.hidden = false;
        outgoing.setAttribute('aria-hidden', 'true');
        outgoing.style.pointerEvents = 'none';
        const offset = direction * 44;
        const timing = { duration: 360, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'both' };
        const exit = outgoing.animate([
          { opacity: 1, transform: 'translateX(0) scale(1)' },
          { opacity: 0, transform: `translateX(${-offset}px) scale(.96)` }
        ], timing);
        const enter = incoming.animate([
          { opacity: 0, transform: `translateX(${offset}px) scale(.96)` },
          { opacity: 1, transform: 'translateX(0) scale(1)' }
        ], timing);
        finishTransition = () => {
          outgoing.hidden = true;
          outgoing.removeAttribute('aria-hidden');
          outgoing.style.removeProperty('pointer-events');
          exit.cancel();
          enter.cancel();
          finishTransition = () => {};
        };
        enter.onfinish = () => finishTransition();
      }
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) finishTransition();
      });
      carousel.querySelector('[data-character-prev]').addEventListener('click', () => move(-1));
      carousel.querySelector('[data-character-next]').addEventListener('click', () => move(1));
      carousel.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      });
      surface.addEventListener('pointerdown', (event) => {
        if (!event.isPrimary || event.button !== 0) return;
        start = { x: event.clientX, y: event.clientY, id: event.pointerId };
        surface.setPointerCapture(event.pointerId);
      });
      surface.addEventListener('pointerup', (event) => {
        if (!start || start.id !== event.pointerId) return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        start = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
      });
      surface.addEventListener('pointercancel', () => { start = null; });
      surface.addEventListener('lostpointercapture', () => { start = null; });
    });
  }
  app.Characters = Object.freeze({ init });
})(window);
