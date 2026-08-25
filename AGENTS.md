# Happy Seal Games Website Guide

## Project

Static, bilingual Happy Seal Games studio website. No build step or framework.

- `index.html`: page structure, links, accessibility attributes.
- `styles.css`: studio theme, ZAR comic theme, responsive layout.
- `script.js`: Turkish/English copy, automatic language choice, menu, mobile previews, reveal behavior.
- `assets/images/`: studio, social, and game media.

## Product Rules

- Introduce Happy Seal Games before ZAR.
- Keep the opening hero and studio/about story inside one unified `studio-intro` structure with a shared comic-book visual language.
- Keep the general studio design clean. Concentrate comic-book styling inside the ZAR section.
- Keep Roadmap inside ZAR. Open the full roadmap image only after user action.
- Label the archive as “Our Other Games” / “Diğer Oyunlarımız”.
- Use each game's logo as its cover. Use gameplay GIFs as previews.
- ZAR may have richer presentation than the other games.
- Use local social icons. External links open safely with `noopener noreferrer`.

## Localization

- Every visible translatable string must exist in both `translations.tr` and `translations.en` in `script.js`.
- HTML contains Turkish fallback copy.
- Use `data-i18n` for text, `data-i18n-html` only when markup is required, and the matching `alt` / `aria` attributes for accessibility.
- The site selects Turkish for Turkish locale or Istanbul timezone, otherwise English. Manual choice is saved locally.

## Responsive and Accessibility Rules

- Support 320px-wide phones through desktop screens.
- Interactive targets must be at least 44px high on touch screens.
- Keep keyboard focus visible and preserve Escape-to-close for the mobile menu.
- Mobile game media must support tap and keyboard preview; desktop keeps hover preview.
- Do not rely on hover alone for an action.
- Avoid horizontal scrolling. Test long Turkish and English strings.
- Respect `prefers-reduced-motion`.

## Contact Form

- `#contact-form` posts multipart data to FormSubmit's AJAX endpoint for `happysealteam@gmail.com`.
- Players may send a name/nickname, subject, message, and optional images, PDF, or text files without providing their email address.
- Keep the total attachment limit at 10 MB and validate it before submission.
- Keep the honeypot and CAPTCHA fields enabled.
- Keep submission status messages translated and announced with `aria-live`.
- FormSubmit requires one-time recipient activation when the endpoint is first used. If the recipient or form backend changes, update the form action, privacy copy, validation, and this section together.

## UI References

The site adapts these MIT-licensed Uiverse interaction patterns to its own HTML, colors, content, responsiveness, and accessibility:

- Comic ZAR buttons: `https://uiverse.io/Gautammsharma/wicked-cobra-3`
- Brutalist contact inputs: `https://uiverse.io/0xnihilism/wise-lizard-57`
- Comic game cards: `https://uiverse.io/chandrasek_6406/white-starfish-90`
- Comic grouped navigation: `https://uiverse.io/chase2k25/tasty-newt-31`

Preserve semantic links, form labels, keyboard focus, touch targets, reduced-motion support, and the established Happy Seal Games palette when evolving these patterns.

## Asset Rules

- Game assets live in `assets/images/games/<game-slug>/`.
- Social icons live in `assets/images/social/`.
- Optimize new media before adding it. Preserve meaningful `alt` text.
- Do not replace logos with arbitrary gameplay screenshots.

## Change Checklist

1. Update both languages.
2. Check all local asset paths.
3. Check desktop and mobile layouts.
4. Test menu, language buttons, external links, GIF previews, and Roadmap.
5. Run `node --check script.js` and inspect browser console errors.
6. Update this file when a new system, section, dependency, or convention is introduced.
