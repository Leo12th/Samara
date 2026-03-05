/**
 * Excellus - Lightbox Galeria
 * Tela cheia, zoom, navegação, swipe mobile, ESC e clique fora
 */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox__img');
  const lightboxCaption = lightbox?.querySelector('.lightbox__caption');
  const lightboxCounter = lightbox?.querySelector('.lightbox__counter');
  const btnClose = lightbox?.querySelector('.lightbox__close');
  const btnPrev = lightbox?.querySelector('.lightbox__prev');
  const btnNext = lightbox?.querySelector('.lightbox__next');
  const btnZoom = lightbox?.querySelector('.lightbox__zoom');

  const items = Array.from(document.querySelectorAll('.gallery-lightbox'));
  let currentIndex = 0;
  let scale = 1;
  let touchStartX = 0;
  let touchEndX = 0;

  if (!lightbox || !lightboxImg || !items.length) return;

  function open(index) {
    currentIndex = index;
    scale = 1;
    updateImage();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightbox.focus();
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    scale = 1;
  }

  function updateImage() {
    const item = items[currentIndex];
    const src = item.getAttribute('href');
    const caption = item.querySelector('.gallery__overlay')?.textContent || item.dataset.caption || item.querySelector('.gallery__footer strong')?.textContent || item.querySelector('img')?.alt || '';
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;
    lightboxImg.style.transform = `scale(${scale})`;
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    scale = 1;
    updateImage();
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % items.length;
    scale = 1;
    updateImage();
  }

  function getT() {
    const lang = localStorage.getItem('excellus-lang') || 'en';
    const t = (typeof window.excellusTranslations !== 'undefined' && window.excellusTranslations[lang]?.lightbox)
      ? window.excellusTranslations[lang].lightbox
      : { zoom: 'Zoom in', zoomOut: 'Zoom out' };
    return t;
  }
  function toggleZoom() {
    scale = scale === 1 ? 1.5 : 1;
    lightboxImg.style.transform = `scale(${scale})`;
    btnZoom.textContent = scale === 1 ? '+' : '−';
    const t = getT();
    btnZoom.setAttribute('aria-label', scale === 1 ? t.zoom : t.zoomOut);
  }

  // Clique nos itens da galeria
  items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      open(index);
    });
  });

  // Botões
  btnClose?.addEventListener('click', close);
  btnPrev?.addEventListener('click', (e) => { e.stopPropagation(); goPrev(); });
  btnNext?.addEventListener('click', (e) => { e.stopPropagation(); goNext(); });
  btnZoom?.addEventListener('click', (e) => { e.stopPropagation(); toggleZoom(); });

  // Clique fora (no backdrop)
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !lightbox.classList.contains('open')) return;
    close();
  });

  // Setas do teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  });

  // Swipe mobile
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  }, { passive: true });

  // Zoom com scroll (opcional)
  lightboxImg.addEventListener('wheel', (e) => {
    if (!lightbox.classList.contains('open')) return;
    e.preventDefault();
    scale += e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.max(0.5, Math.min(3, scale));
    lightboxImg.style.transform = `scale(${scale})`;
    btnZoom.textContent = scale > 1 ? '−' : '+';
    const t = getT();
    btnZoom.setAttribute('aria-label', scale > 1 ? t.zoomOut : t.zoom);
  }, { passive: false });
});
