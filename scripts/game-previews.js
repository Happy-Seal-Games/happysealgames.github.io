(function registerGamePreviews(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};
  const touchQuery = global.matchMedia('(hover: none), (pointer: coarse)');

  function usesTouchPreview() {
    return touchQuery.matches;
  }

  function updateControls(copy = app.I18n?.getCopy()) {
    if (!copy) return;
    document.querySelectorAll('.game-card-media').forEach((media) => {
      const hint = media.querySelector('.preview-hint');
      media.setAttribute('role', 'button');
      media.tabIndex = 0;
      const label = media.classList.contains('is-previewing') ? copy.tapToCover : copy.tapToPreview;
      const title = media.closest('.game-card').querySelector('h3').textContent;
      media.setAttribute('aria-label', `${title}: ${label}`);
      media.setAttribute('aria-pressed', String(media.classList.contains('is-previewing')));
      if (hint) hint.textContent = usesTouchPreview() || media.classList.contains('is-previewing') ? label : copy.hoverToPreview;
    });
  }

  function togglePreview(media) {
    media.classList.toggle('is-previewing');
    updateControls();
  }

  function init() {
    document.querySelectorAll('.game-card-media').forEach((media) => {
      media.addEventListener('click', () => togglePreview(media));
      media.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        togglePreview(media);
      });
    });
    touchQuery.addEventListener?.('change', () => updateControls());
    document.addEventListener('hsg:languagechange', (event) => updateControls(event.detail.copy));
    updateControls();
  }

  app.GamePreviews = Object.freeze({ init, updateControls });
})(window);
