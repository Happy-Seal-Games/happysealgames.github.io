const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

const translations = {
  tr: {
    metaDescription: "Happy Seal Games ve geliştirme aşamasındaki strateji oyunu ZAR hakkında bilgi edinin. ZAR Alpha sürümünü itch.io üzerinden deneyin.",
    ogDescription: "Bağımsız oyunlar, güçlü fikirler ve bolca eğlence. ZAR Alpha şimdi itch.io'da.",
    skip: 'İçeriğe geç', brandHome: 'Happy Seal Games ana sayfa', navLabel: 'Ana menü', languageLabel: 'Dil seçimi',
    navAbout: 'Hakkımızda', navGames: 'Diğer Oyunlarımız', navContact: 'İletişim', navAlpha: "ZAR Alpha'yı Oyna ↗",
    menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat', heroEyebrow: 'Happy Seal Games sunar',
    heroTitle: 'Oyunlar<br><span>yapıyoruz.</span>', heroCopy: "Bağımsız ruhla, güçlü fikirleri eğlenceli ve unutulmaz oyun dünyalarına dönüştürüyoruz. Şu anda fizik tabanlı, zar odaklı 3D roguelike oyunumuz ZAR'ı geliştiriyoruz.",
    heroTry: 'ZAR\'ı Keşfet <span aria-hidden="true">↓</span>', heroDiscover: 'Bizi Tanı <span aria-hidden="true">→</span>',
    heroAlt: 'Happy Seal Games logosu', heroSticker: 'BAĞIMSIZ<br>STÜDYO', aboutEyebrow: 'Biz kimiz?',
    aboutTitle: 'Küçük ekip.<br>Büyük oyunlar.', aboutLogoAlt: 'Mutlu fok maskotlu Happy Seal Games logosu',
    aboutLead: 'Happy Seal Games, eğlenceli fikirleri kendine özgü dünyalara dönüştüren bağımsız bir oyun geliştirme ekibi.',
    aboutBody: 'Amacımız; kolay öğrenilen, ustalaşması keyifli ve oyuncuların tekrar dönmek isteyeceği deneyimler üretmek. İlk büyük maceramız ZAR için oyuncu geri bildirimleriyle birlikte çalışmaya devam ediyoruz.',
    aboutContact: 'Bize ulaş <span aria-hidden="true">→</span>', studioPoint1Title: 'Bağımsız', studioPoint1Body: 'Kendi sesimiz, kendi dünyalarımız.',
    studioPoint2Title: 'Oyuncu odaklı', studioPoint2Body: 'Geri bildirimle birlikte gelişen oyunlar.', studioPoint3Title: 'Daima gelişen', studioPoint3Body: 'Her sürümde daha iyi deneyimler.',
    zarEyebrow: 'Öne çıkan oyunumuz', zarTitle: 'Her atış.<br>Yeni bir karar.',
    zarBody: 'ZAR, her atışın koşunun yönünü değiştirebildiği fizik tabanlı bir 3D zar roguelike deckbuilder. Zarları, kalıntıları ve güçlendirmeleri birleştir; güçlü sinerjiler kur ve her mücadeleye uyum sağla.',
    zarTagsLabel: 'ZAR türleri', featuresLabel: 'ZAR özellikleri', feature1: '<span>01</span> Farklı zarlar, kalıntılar ve güçlendirmeler', feature2: '<span>02</span> Fizik tabanlı atışlar ve değişen koşular',
    feature3: '<span>03</span> Topluluk geri bildirimiyle gelişen Alpha', playItch: 'ZAR Alpha\'yı Oyna <span aria-hidden="true">↗</span>',
    zarCharacterAlt: "ZAR'ın takım elbiseli ana karakteri", zarSpeech: 'Zarlarını at. Kombinasyonunu kur. Koşuyu değiştir.',
    zarGameplayEyebrow: 'Koşunu nasıl kuracaksın?', zarGameplayTitle: 'Zarlar. Kalıntılar. Sonsuz kombinasyon.',
    zarGameplayAlt: 'ZAR oynanış ekranı', zarGameplayCaption: 'Zarlarını fizik tabanlı arenaya at ve sonucu stratejine dönüştür.',
    zarLoadoutAlt: 'ZAR puan ve çarpan hesabı', zarLoadoutCaption: 'Daha sert vurmak için puan × çarpan değerini büyüt.',
    zarBuildsAlt: 'ZAR zar kombinasyonları', zarBuildsCaption: 'Her koşuda farklı bir yapı kur.',
    zarRelicsAlt: 'ZAR kalıntı sistemi', zarRelicsCaption: 'Kalıntıları birleştir, etkileri katla.',
    zarPhysicsAlt: 'ZAR fizik tabanlı zar atışları', zarPhysicsCaption: 'Her fiziksel atış yeni bir olasılık yaratır.',
    steamAlt: "ZAR yakında Steam'de bannerı", steamTitle: "Steam'e hazırlanıyoruz!", steamBody: "Erken Alpha'yı dene; geri bildiriminle ZAR'ın geleceğini şekillendir.",
    roadmapEyebrow: 'Sırada ne var?', roadmapTitle: 'ZAR yol haritası', roadmapBody: "Alpha'dan Steam demosuna uzanan geliştirme planımızı ayrı pencerede incele.",
    roadmapOpen: 'ZAR yol haritasını aç', roadmapButton: 'Yol Haritasını Aç <span aria-hidden="true">↗</span>',
    gamesEyebrow: 'Happy Seal Games arşivi', gamesTitle: 'Diğer oyunlarımıza göz at', gamesIntro: 'Game jam deneylerinden strateji oyunlarına uzanan ücretsiz projelerimizi keşfet.',
    playOnItch: 'itch.io\'da Oyna <span aria-hidden="true">↗</span>', watchGameplay: 'Oynanışı İzle', hoverToPreview: 'Oynanışı görmek için üzerine gel', tapToPreview: 'Oynanışı görmek için dokun', tapToCover: 'Kapağa dönmek için dokun',
    pawsGenre: 'Bullet Hell · Aksiyon', pawsDescription: 'Simülasyon çökmeden önce geçmiş hareketlerini tekrarlayan klonlarına karşı savaş. Desenlerini öğren, saldırılardan sıyrıl ve en iyi sürümün ol.', pawsAlt: 'Paws Inc. logosu', pawsGameplayAlt: 'Paws Inc. oynanış görüntüsü',
    totomonGenre: 'Roguelike · Auto Battler', totomonDescription: 'Totomon takımını seç, otomatik savaşlara gir ve güçlü mutasyon yollarını yönet. Sinerjiler kurarak en büyük eğitmen ol.', totomonAlt: 'Totomon logosu', totomonGameplayAlt: 'Totomon oynanış görüntüsü',
    collectorogueGenre: '3D · Roguelike', collectorogueDescription: 'Büyülü masaya ganimet istifle, maceracıyı güçlendir ve ortalığı dağıtan kediye karşı düzenini koru.', collectorogueAlt: 'Collectorogue logosu', collectorogueGameplayAlt: 'Collectorogue oynanış görüntüsü',
    chickonautGenre: 'Aksiyon · Uzay', chickonautDescription: 'Oksijenini dikkatli kullan, lazerli civciv dronunla Yolkium çıkar ve geliştirmeler için gemine zamanında dön.', chickonautAlt: 'Chickonaut logosu', chickonautGameplayAlt: 'Chickonaut oynanış görüntüsü',
    biscultGenre: 'Clicker · Idle', biscultDescription: 'Açgözlü kutsal bisküvini besle; kaynak üretimini büyüt, takipçiler topla ve sınır tanımayan tuhaf bir kült yönet.', biscultAlt: 'Biscult logosu', biscultGameplayAlt: 'Biscult oynanış görüntüsü',
    sylvaGenre: 'Tower Defense · Roguelike', sylvaDescription: 'Kutsal ağacı bitmeyen böcek dalgalarına karşı savun; tohumları ek, bitkilerini geliştir ve saldırılara hazırlan.', sylvaAlt: 'Sylva logosu', sylvaGameplayAlt: 'Sylva oynanış görüntüsü',
    contactEyebrow: 'Bağlantıda kal', contactTitle: 'Yeni bir şey<br>yaklaşıyor!',
    contactBody: 'ZAR güncellemeleri, geliştirme notları ve stüdyodan haberler için bizi takip et.', emailButton: 'E-posta Gönder <span aria-hidden="true">↗</span>',
    formEyebrow: 'Bize yaz', formTitle: 'Mesajını doğrudan gönder', formIntro: 'E-posta uygulaması açmadan bize ulaş. E-posta adresi vermek zorunda değilsin.',
    formName: 'Adın veya oyuncu nick\'in', formSubject: 'Konu başlığı', formMessage: 'Mesajın', formAttachment: 'Görsel veya dosya ekle (isteğe bağlı)',
    formAttachmentHelp: 'PNG, JPG, WEBP, GIF, PDF veya TXT · Toplam en fazla 10 MB', formSubmit: 'Mesajı Gönder', formSending: 'Gönderiliyor…',
    formSuccess: 'Mesajın ulaştı. Teşekkürler!', formError: 'Mesaj gönderilemedi. Lütfen tekrar dene veya e-posta bağlantısını kullan.', formTooLarge: 'Eklerin toplam boyutu 10 MB sınırını aşıyor.',
    formPrivacy: 'Gönderilen bilgiler yalnızca mesajını bize ulaştırmak için FormSubmit üzerinden işlenir.',
    socialLabel: 'Sosyal medya bağlantıları', emailLabel: 'E-posta', footerTagline: 'Bağımsız oyunlar. Güçlü fikirler. Mutlu foklar.',
    backToTop: 'Yukarı dön ↑', copyright: '© <span id="year"></span> Happy Seal Games. Tüm hakları saklıdır.'
  },
  en: {
    metaDescription: 'Discover Happy Seal Games and ZAR, our strategy game currently in development. Play the ZAR Alpha on itch.io.',
    ogDescription: 'Independent games, bold ideas, and plenty of fun. ZAR Alpha is now available on itch.io.',
    skip: 'Skip to content', brandHome: 'Happy Seal Games home page', navLabel: 'Main navigation', languageLabel: 'Language selection',
    navAbout: 'About Us', navGames: 'Our Other Games', navContact: 'Contact', navAlpha: 'Play the ZAR Alpha ↗',
    menuOpen: 'Open menu', menuClose: 'Close menu', heroEyebrow: 'Happy Seal Games presents',
    heroTitle: 'We make<br><span>games.</span>', heroCopy: 'We turn bold ideas into playful, memorable game worlds with an independent spirit. We are currently developing ZAR, our physics-based, dice-driven 3D roguelike.',
    heroTry: 'Discover ZAR <span aria-hidden="true">↓</span>', heroDiscover: 'Meet the Studio <span aria-hidden="true">→</span>',
    heroAlt: 'Happy Seal Games logo', heroSticker: 'INDIE<br>STUDIO', aboutEyebrow: 'Who are we?',
    aboutTitle: 'Small team.<br>Big games.', aboutLogoAlt: 'Happy Seal Games logo featuring a cheerful seal mascot',
    aboutLead: 'Happy Seal Games is an independent game development team turning playful ideas into distinctive worlds.',
    aboutBody: 'We create experiences that are easy to learn, rewarding to master, and worth returning to. We continue building our first major adventure, ZAR, together with player feedback.',
    aboutContact: 'Contact us <span aria-hidden="true">→</span>', studioPoint1Title: 'Independent', studioPoint1Body: 'Our voice. Our worlds.',
    studioPoint2Title: 'Player focused', studioPoint2Body: 'Games shaped together with feedback.', studioPoint3Title: 'Always evolving', studioPoint3Body: 'A better experience with every release.',
    zarEyebrow: 'Our featured game', zarTitle: 'Every roll.<br>A new decision.',
    zarBody: 'ZAR is a physics-based 3D dice roguelike deckbuilder where every roll can change the course of your run. Combine dice, relics, and augments, build powerful synergies, and adapt to every challenge.',
    zarTagsLabel: 'ZAR genres', featuresLabel: 'ZAR features', feature1: '<span>01</span> Different dice, relics, and augments', feature2: '<span>02</span> Physics-based rolls and changing runs',
    feature3: '<span>03</span> An Alpha shaped by community feedback', playItch: 'Play the ZAR Alpha <span aria-hidden="true">↗</span>',
    zarCharacterAlt: "ZAR's suited main character", zarSpeech: 'Roll your dice. Build your combo. Change the run.',
    zarGameplayEyebrow: 'How will you build your run?', zarGameplayTitle: 'Dice. Relics. Endless combinations.',
    zarGameplayAlt: 'ZAR gameplay screen', zarGameplayCaption: 'Throw your dice into the physics-based arena and turn the result into strategy.',
    zarLoadoutAlt: 'ZAR points and multiplier calculation', zarLoadoutCaption: 'Make points × multiplier greater to hit harder.',
    zarBuildsAlt: 'ZAR dice combinations', zarBuildsCaption: 'Build a different setup every run.',
    zarRelicsAlt: 'ZAR relic system', zarRelicsCaption: 'Combine relics and multiply their effects.',
    zarPhysicsAlt: 'Physics-based dice rolls in ZAR', zarPhysicsCaption: 'Every physical roll creates a new possibility.',
    steamAlt: 'ZAR coming soon to Steam banner', steamTitle: 'Getting ready for Steam!', steamBody: "Try the early Alpha and help shape ZAR's future with your feedback.",
    roadmapEyebrow: "What's next?", roadmapTitle: 'ZAR Roadmap', roadmapBody: 'Open our development plan from Alpha to the Steam demo in a separate window.',
    roadmapOpen: 'Open the ZAR roadmap', roadmapButton: 'View the Roadmap <span aria-hidden="true">↗</span>',
    gamesEyebrow: 'The Happy Seal Games archive', gamesTitle: 'Check our other games', gamesIntro: 'Explore our free projects, from game jam experiments to strategy games.',
    playOnItch: 'Play on itch.io <span aria-hidden="true">↗</span>', watchGameplay: 'Watch Gameplay', hoverToPreview: 'Hover to preview gameplay', tapToPreview: 'Tap to preview gameplay', tapToCover: 'Tap to return to cover',
    pawsGenre: 'Bullet Hell · Action', pawsDescription: 'Fight clones that repeat your past movements before the simulation collapses. Learn their patterns, dash through attacks, and become your best self.', pawsAlt: 'Paws Inc. logo', pawsGameplayAlt: 'Paws Inc. gameplay preview',
    totomonGenre: 'Roguelike · Auto Battler', totomonDescription: 'Choose your Totomon team, enter automatic battles, and guide powerful mutation paths. Build synergies and become the greatest trainer.', totomonAlt: 'Totomon logo', totomonGameplayAlt: 'Totomon gameplay preview',
    collectorogueGenre: '3D · Roguelike', collectorogueDescription: 'Stack loot on an enchanted table to power an adventurer, then keep your setup intact when a chaotic cat scatters everything.', collectorogueAlt: 'Collectorogue logo', collectorogueGameplayAlt: 'Collectorogue gameplay preview',
    chickonautGenre: 'Action · Space', chickonautDescription: 'Manage your oxygen, mine Yolkium with a laser-equipped chick drone, and return to your ship in time to buy upgrades.', chickonautAlt: 'Chickonaut logo', chickonautGameplayAlt: 'Chickonaut gameplay preview',
    biscultGenre: 'Clicker · Idle', biscultDescription: 'Feed an endlessly hungry holy biscuit, expand resource production, gather followers, and run a wonderfully strange cult.', biscultAlt: 'Biscult logo', biscultGameplayAlt: 'Biscult gameplay preview',
    sylvaGenre: 'Tower Defense · Roguelike', sylvaDescription: 'Defend the sacred tree from endless insect waves by planting seeds, growing defensive plants, and preparing between attacks.', sylvaAlt: 'Sylva logo', sylvaGameplayAlt: 'Sylva gameplay preview',
    contactEyebrow: 'Stay connected', contactTitle: 'Something new<br>is coming!',
    contactBody: 'Follow us for ZAR updates, development notes, and news from the studio.', emailButton: 'Send an Email <span aria-hidden="true">↗</span>',
    formEyebrow: 'Write to us', formTitle: 'Send your message directly', formIntro: 'Reach us without opening an email app. You do not need to provide an email address.',
    formName: 'Your name or player nickname', formSubject: 'Subject', formMessage: 'Your message', formAttachment: 'Add an image or file (optional)',
    formAttachmentHelp: 'PNG, JPG, WEBP, GIF, PDF, or TXT · 10 MB total maximum', formSubmit: 'Send Message', formSending: 'Sending…',
    formSuccess: 'Your message has arrived. Thank you!', formError: 'The message could not be sent. Please try again or use the email link.', formTooLarge: 'Your attachments exceed the 10 MB total limit.',
    formPrivacy: 'Submitted information is processed through FormSubmit only to deliver your message to us.',
    socialLabel: 'Social media links', emailLabel: 'Email', footerTagline: 'Independent games. Bold ideas. Happy seals.',
    backToTop: 'Back to top ↑', copyright: '© <span id="year"></span> Happy Seal Games. All rights reserved.'
  }
};

let currentLanguage = 'tr';

function detectLanguage() {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  if (requestedLanguage === 'tr' || requestedLanguage === 'en') return requestedLanguage;

  try {
    const savedLanguage = localStorage.getItem('happy-seal-language');
    if (savedLanguage === 'tr' || savedLanguage === 'en') return savedLanguage;
  } catch {}

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const hasTurkishLocale = languages.some((language) => {
    try {
      return new Intl.Locale(language).language === 'tr' || new Intl.Locale(language).region === 'TR';
    } catch {
      return language?.toLowerCase().startsWith('tr');
    }
  });
  const isTurkeyTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Istanbul';
  return hasTurkishLocale || isTurkeyTimeZone ? 'tr' : 'en';
}

function setLanguage(language, remember = false) {
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  document.querySelector('meta[property="og:description"]').content = copy.ogDescription;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = copy[element.dataset.i18nHtml]; });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.alt = copy[element.dataset.i18nAlt]; });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', copy[element.dataset.i18nAria]); });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  updatePreviewControls(copy);
  menuButton.querySelector('.sr-only').textContent = mainNav.classList.contains('is-open') ? copy.menuClose : copy.menuOpen;
  document.getElementById('year').textContent = new Date().getFullYear();

  if (remember) {
    try { localStorage.setItem('happy-seal-language', language); } catch {}
  }
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language, true));
});

setLanguage(detectLanguage());

menuButton?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen;
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !mainNav?.classList.contains('is-open')) return;
  mainNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.focus();
});

function usesTouchPreview() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

function updatePreviewControls(copy) {
  document.querySelectorAll('.game-card-media').forEach((media) => {
    if (!usesTouchPreview()) return;
    const isPreviewing = media.classList.contains('is-previewing');
    const label = isPreviewing ? copy.tapToCover : copy.tapToPreview;
    media.setAttribute('aria-label', label);
    const hint = media.querySelector('.preview-hint');
    if (hint && usesTouchPreview()) hint.textContent = label;
  });
}

document.querySelectorAll('.game-card-media').forEach((media) => {
  if (!usesTouchPreview()) return;
  media.setAttribute('role', 'button');
  media.tabIndex = 0;
  const togglePreview = () => {
    if (!usesTouchPreview()) return;
    media.classList.toggle('is-previewing');
    updatePreviewControls(translations[currentLanguage]);
  };
  media.addEventListener('click', togglePreview);
  media.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    togglePreview();
  });
});

const contactForm = document.getElementById('contact-form');
const contactSubmit = document.getElementById('contact-submit');
const contactStatus = document.getElementById('contact-status');
const contactAttachment = document.getElementById('contact-attachment');
const maxAttachmentBytes = 10 * 1024 * 1024;

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const copy = translations[currentLanguage];
  const attachmentBytes = [...(contactAttachment?.files || [])].reduce((total, file) => total + file.size, 0);

  contactStatus.className = 'form-status';
  if (attachmentBytes > maxAttachmentBytes) {
    contactStatus.textContent = copy.formTooLarge;
    contactStatus.classList.add('is-error');
    contactAttachment?.focus();
    return;
  }

  contactSubmit.disabled = true;
  contactSubmit.textContent = copy.formSending;
  contactStatus.textContent = copy.formSending;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false || result.success === 'false') throw new Error('Submission failed');

    contactForm.reset();
    contactStatus.textContent = copy.formSuccess;
    contactStatus.classList.add('is-success');
  } catch {
    contactStatus.textContent = copy.formError;
    contactStatus.classList.add('is-error');
  } finally {
    contactSubmit.disabled = false;
    contactSubmit.textContent = copy.formSubmit;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const requestedSection = new URLSearchParams(window.location.search).get('section');
if (requestedSection) {
  const scrollToRequestedSection = () => document.getElementById(requestedSection)?.scrollIntoView();
  scrollToRequestedSection();
  window.addEventListener('load', scrollToRequestedSection, { once: true });
}
else if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
