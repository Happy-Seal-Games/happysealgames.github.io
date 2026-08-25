(function registerNavigation(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};
  let menuButton;
  let mainNav;

  function updateLabel(copy = app.I18n?.getCopy()) {
    const label = menuButton?.querySelector('.sr-only');
    if (!label || !copy) return;
    label.textContent = mainNav?.classList.contains('is-open') ? copy.menuClose : copy.menuOpen;
  }

  function closeMenu({ focusButton = false } = {}) {
    mainNav?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    updateLabel();
    if (focusButton) menuButton?.focus();
  }

  function init() {
    menuButton = document.querySelector('.menu-button');
    mainNav = document.querySelector('.main-nav');
    if (!menuButton || !mainNav) return;

    menuButton.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      updateLabel();
    });

    mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) closeMenu({ focusButton: true });
    });
    document.addEventListener('hsg:languagechange', (event) => updateLabel(event.detail.copy));
    updateLabel();
  }

  app.Navigation = Object.freeze({ init, closeMenu });
})(window);
