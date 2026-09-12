// ============================================================
//  JED FRANCE — MAIN.JS
//  Gestion : langue FR/EN, navbar mobile, animations scroll,
//  compteurs animés, vidéo player, menu actif
// ============================================================

// ----------------------------------------------------------
// LANGUE
// ----------------------------------------------------------
let langue = localStorage.getItem('jed_langue') || 'fr';

function setLangue(lang) {
  langue = lang;
  localStorage.setItem('jed_langue', lang);
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.textContent = lang === 'fr' ? el.dataset.fr : el.dataset.en;
  });
  document.querySelectorAll('[data-fr-html]').forEach(el => {
    el.innerHTML = lang === 'fr' ? el.dataset.frHtml : el.dataset.enHtml;
  });
  document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
    el.placeholder = lang === 'fr' ? el.dataset.frPlaceholder : el.dataset.enPlaceholder;
  });
  // Mettre à jour les boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ----------------------------------------------------------
// NAVBAR — MOBILE HAMBURGER
// ----------------------------------------------------------
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Fermer au clic sur un lien
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Fermer au clic extérieur
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });

  // Navbar sticky avec ombre au scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

  // Marquer le lien actif
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ----------------------------------------------------------
// ANIMATIONS AU SCROLL (Intersection Observer)
// ----------------------------------------------------------
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right').forEach(el => {
    observer.observe(el);
  });
}

// ----------------------------------------------------------
// COMPTEURS ANIMÉS
// ----------------------------------------------------------
function animateCounter(el, target, duration = 1800, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target.toLocaleString('fr-FR') + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start).toLocaleString('fr-FR') + suffix;
    }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, 1800, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ----------------------------------------------------------
// VIDÉO PLAYER (lecteur intégré)
// ----------------------------------------------------------
function initVideoPlayer() {
  const container = document.getElementById('video-container');
  if (!container) return;

  const url = container.dataset.videoUrl;
  if (!url) return;

  // Si c'est une URL YouTube, construire l'embed
  const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
  const isVimeo = url.includes('vimeo.com');

  const overlay = container.querySelector('.video-overlay');
  if (!overlay) return;

  overlay.addEventListener('click', () => {
    let embedUrl = url;
    if (isYoutube) {
      // Extraire l'ID YouTube
      const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^&?/]+)/);
      if (match) embedUrl = `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
    } else if (isVimeo) {
      const match = url.match(/vimeo\.com\/(\d+)/);
      if (match) embedUrl = `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
    }

    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.allow = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;border-radius:inherit;';
    container.innerHTML = '';
    container.appendChild(iframe);
  });
}

// ----------------------------------------------------------
// ONGLETS PROJETS
// ----------------------------------------------------------
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) {
        target.classList.add('active');
        target.querySelectorAll('.fade-in, .slide-up').forEach(el => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }
    });
  });
}

// ----------------------------------------------------------
// GALERIE LIGHTBOX
// ----------------------------------------------------------
function initLightbox() {
  const groups = document.querySelectorAll('[data-lightbox-group]');
  if (!groups.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Fermer">✕</button>
    <button class="lightbox-prev" aria-label="Précédent">‹</button>
    <img src="" alt="" />
    <button class="lightbox-next" aria-label="Suivant">›</button>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  let currentImages = [];
  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + currentImages.length) % currentImages.length;
    imgEl.src = currentImages[currentIndex].src;
    imgEl.alt = currentImages[currentIndex].alt || '';
  }

  function open(images, index) {
    currentImages = images;
    show(index);
    overlay.classList.add('active');
  }

  function close() {
    overlay.classList.remove('active');
    imgEl.src = '';
  }

  groups.forEach(group => {
    const images = Array.from(group.querySelectorAll('img[data-lightbox]'));
    images.forEach((img, i) => {
      img.addEventListener('click', () => open(images, i));
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => show(currentIndex - 1));
  nextBtn.addEventListener('click', () => show(currentIndex + 1));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
}

// ----------------------------------------------------------
// CARROUSEL PHOTO
// ----------------------------------------------------------
function initPhotoCarousels() {
  document.querySelectorAll('.photo-carousel').forEach(carousel => {
    const track = carousel.querySelector('.photo-carousel-track');
    const prev = carousel.querySelector('.photo-carousel-prev');
    const next = carousel.querySelector('.photo-carousel-next');
    if (!track) return;
    const scrollAmount = () => (track.querySelector('img')?.offsetWidth || 280) + 16;
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  });
}

// ----------------------------------------------------------
// INIT GLOBAL
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initCounters();
  initVideoPlayer();
  initTabs();
  initLightbox();
  initPhotoCarousels();
  setLangue(langue);

  // Boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLangue(btn.dataset.lang));
  });
});
