(function registerGameRenderer(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function renderGame(game) {
    const darkClass = game.dark ? ' game-card-dark' : '';
    return `
      <article class="game-card" data-game="${escapeHtml(game.slug)}">
        <div class="game-card-media${darkClass}">
          <img class="game-card-logo" src="${escapeHtml(game.logo)}" alt="" data-i18n-alt="${escapeHtml(game.logoAltKey)}" width="${game.logoWidth}" height="${game.logoHeight}">
          <img class="game-card-preview" src="${escapeHtml(game.preview)}" alt="" data-i18n-alt="${escapeHtml(game.previewAltKey)}" loading="lazy" width="${game.previewWidth}" height="${game.previewHeight}">
          <span class="preview-hint" data-i18n="hoverToPreview"></span>
        </div>
        <div class="game-card-copy">
          <span class="game-genre" data-i18n="${escapeHtml(game.genreKey)}"></span>
          <h3>${escapeHtml(game.title)}</h3>
          <p data-i18n="${escapeHtml(game.descriptionKey)}"></p>
          <div class="game-card-actions">
            <a href="${escapeHtml(game.itch)}" target="_blank" rel="noopener noreferrer" data-i18n-html="playOnItch"></a>
            <a class="game-video-link" href="${escapeHtml(game.video)}" target="_blank" rel="noopener noreferrer" data-i18n="watchGameplay"></a>
          </div>
        </div>
      </article>`;
  }

  function init() {
    const grid = document.getElementById('games-grid');
    const games = global.HSG_DATA?.games;
    if (!grid || !Array.isArray(games)) return;
    grid.innerHTML = games.map(renderGame).join('');
  }

  app.RenderGames = Object.freeze({ init });
})(window);
