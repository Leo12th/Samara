/**
 * Excellus - Testimonials Carousel
 * Sempre exibe 4 cards visíveis, sem espaço vazio no final
 */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.testimonials__slider');
  const track = document.querySelector('.testimonials__track');
  const prevBtn = document.querySelector('.testimonials__prev');
  const nextBtn = document.querySelector('.testimonials__next');

  if (!slider || !track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const cardCount = cards.length;
  const gap = 32;

  let currentIndex = 0;

  function getStep() {
    const card = cards[0];
    if (!card) return 352;
    return card.offsetWidth + gap;
  }

  function getVisibleCount() {
    const sliderWidth = slider.offsetWidth;
    const step = getStep();
    return Math.min(4, Math.max(1, Math.floor(sliderWidth / step)));
  }

  function getMaxIndex() {
    const visibleCount = getVisibleCount();
    return Math.max(0, cardCount - visibleCount);
  }

  function updatePosition() {
    const step = getStep();
    const offset = -currentIndex * step;
    track.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updatePosition();
  });

  nextBtn.addEventListener('click', () => {
    const maxIndex = getMaxIndex();
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updatePosition();
  });

  window.addEventListener('resize', () => {
    currentIndex = Math.min(currentIndex, getMaxIndex());
    updatePosition();
  });

  updatePosition();
});
