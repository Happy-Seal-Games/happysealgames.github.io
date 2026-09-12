(function bootstrap(global) {
  'use strict';

  function init() {
    const app = global.HSG;
    app.Theme.init();
    app.RenderGames.init();
    app.ZarLinks.init();
    app.I18n.init();
    app.Characters.init();
    app.ZarUpdates.init();
    app.Navigation.init();
    app.GamePreviews.init();
    app.ContactForm.init();
    app.Reveal.init();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})(window);
