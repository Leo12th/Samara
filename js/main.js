/**
 * Excellus - Main JavaScript
 * Navegação, scroll effects, menu mobile
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollReveal();
  initSmoothScroll();
  initMobileNav();
  initGalleryFilters();
});

function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.section-header, .expertise-card, .why-card, .testimonial-card, .gallery__item, .stats__text, .before-after__content'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('reveal') === false) {
            entry.target.classList.add('reveal');
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el, i) => {
    el.classList.add('reveal');
    const staggerClass = `stagger-${(i % 6) + 1}`;
    if (!el.classList.contains('stagger-1') && !el.classList.contains('stagger-2') && !el.classList.contains('stagger-3')) {
      el.classList.add(staggerClass);
    }
    observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const menu = document.querySelector('.header__menu');
    menu?.classList.toggle('open');
    toggle.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  // Fechar ao clicar em um link
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.header__menu')?.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });
}

function initGalleryFilters() {
  const filters = document.querySelectorAll('.stats__filter[data-filter]');
  const galleryItems = document.querySelectorAll('.gallery__item[data-category]');
  const gallerySection = document.getElementById('gallery');

  if (!filters.length || !galleryItems.length) return;

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Atualiza estado ativo dos botões
      filters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filtra itens da galeria
      galleryItems.forEach((item) => {
        const categories = (item.dataset.category || '').split(/\s+/);
        const match = categories.includes(filter);
        item.classList.toggle('gallery__item--hidden', !match);
      });

      // Scroll suave até a galeria se não estiver visível
      if (gallerySection && !isElementInViewport(gallerySection)) {
        gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
