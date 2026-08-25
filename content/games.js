(function registerGames(global) {
  'use strict';

  const data = global.HSG_DATA = global.HSG_DATA || {};
  data.games = Object.freeze([
    {
      slug: 'paws-inc', title: 'Paws Inc.', genreKey: 'pawsGenre', descriptionKey: 'pawsDescription',
      logo: 'assets/images/games/paws-inc/logo.png', logoAltKey: 'pawsAlt', logoWidth: 302, logoHeight: 240,
      preview: 'assets/images/games/paws-inc/gameplay.gif', previewAltKey: 'pawsGameplayAlt', previewWidth: 426, previewHeight: 240,
      itch: 'https://happysealgames.itch.io/paws-inc', video: 'https://www.youtube.com/watch?v=oKwr7Y1N960'
    },
    {
      slug: 'totomon', title: 'Totomon', genreKey: 'totomonGenre', descriptionKey: 'totomonDescription',
      logo: 'assets/images/games/totomon/logo.png', logoAltKey: 'totomonAlt', logoWidth: 1280, logoHeight: 740,
      preview: 'assets/images/games/totomon/gameplay.gif', previewAltKey: 'totomonGameplayAlt', previewWidth: 426, previewHeight: 240,
      itch: 'https://happysealgames.itch.io/totomon', video: 'https://www.youtube.com/watch?v=jKgexLBUiEM'
    },
    {
      slug: 'collectorogue', title: 'Collectorogue', genreKey: 'collectorogueGenre', descriptionKey: 'collectorogueDescription', dark: true,
      logo: 'assets/images/games/collectorogue/logo.jpg', logoAltKey: 'collectorogueAlt', logoWidth: 1280, logoHeight: 720,
      preview: 'assets/images/games/collectorogue/gameplay.gif', previewAltKey: 'collectorogueGameplayAlt', previewWidth: 800, previewHeight: 338,
      itch: 'https://happysealgames.itch.io/collectorogue', video: 'https://www.youtube.com/watch?v=CbU9O0N5g0k'
    },
    {
      slug: 'chickonaut', title: 'Chickonaut', genreKey: 'chickonautGenre', descriptionKey: 'chickonautDescription',
      logo: 'assets/images/games/chickonaut/logo.png', logoAltKey: 'chickonautAlt', logoWidth: 1483, logoHeight: 830,
      preview: 'assets/images/games/chickonaut/gameplay.gif', previewAltKey: 'chickonautGameplayAlt', previewWidth: 426, previewHeight: 240,
      itch: 'https://happysealgames.itch.io/chickonaut', video: 'https://www.youtube.com/watch?v=74dx-q2yf4s'
    },
    {
      slug: 'biscult', title: 'Biscult', genreKey: 'biscultGenre', descriptionKey: 'biscultDescription',
      logo: 'assets/images/games/biscult/logo.png', logoAltKey: 'biscultAlt', logoWidth: 315, logoHeight: 250,
      preview: 'assets/images/games/biscult/gameplay.gif', previewAltKey: 'biscultGameplayAlt', previewWidth: 426, previewHeight: 240,
      itch: 'https://happysealgames.itch.io/biscult', video: 'https://www.youtube.com/watch?v=UlYl_JKKIvo'
    },
    {
      slug: 'sylva', title: 'SYLVA', genreKey: 'sylvaGenre', descriptionKey: 'sylvaDescription', dark: true,
      logo: 'assets/images/games/sylva/logo.png', logoAltKey: 'sylvaAlt', logoWidth: 315, logoHeight: 250,
      preview: 'assets/images/games/sylva/gameplay.gif', previewAltKey: 'sylvaGameplayAlt', previewWidth: 426, previewHeight: 240,
      itch: 'https://happysealgames.itch.io/sylva', video: 'https://www.youtube.com/watch?v=-Ft-PAxYcWI'
    }
  ].map(Object.freeze));
})(window);
