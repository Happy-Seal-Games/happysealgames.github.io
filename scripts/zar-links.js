(function registerZarLinks(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};

  function init() {
    const videos = global.HSG_DATA?.zarVideos;
    if (!videos) return;

    document.querySelectorAll('[data-zar-video]').forEach((link) => {
      const url = videos[link.dataset.zarVideo];
      if (typeof url === 'string' && url) link.href = url;
    });
    document.querySelectorAll('[data-zar-embed]').forEach((frame) => {
      const url = videos[frame.dataset.zarEmbed];
      if (typeof url !== 'string') return;
      const videoId = new URL(url).searchParams.get('v');
      if (/^[\w-]{11}$/.test(videoId || '')) {
        frame.src = 'https://www.youtube-nocookie.com/embed/' + videoId;
      }
    });
  }

  app.ZarLinks = Object.freeze({ init });
})(window);
