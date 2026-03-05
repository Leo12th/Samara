/**
 * Excellus - Expertise Carousel (Nossa Especialidade)
 * Carrossel automático com os mesmos cards
 */

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.expertise__carousel');
  const track = document.querySelector('.expertise__track');
  const dotsContainer = document.querySelector('.expertise__dots');

  if (!carousel || !track || !dotsContainer) return;

  const cards = track.querySelectorAll('.expertise-card');
  const totalCards = cards.length;
  const slidesCount = 3; // 3 slides (cada um mostra 3 cards)

  if (totalCards === 0) return;

  let currentIndex = 0;
  let autoInterval;

  function updatePosition() {
    const cardWidthPercent = 100 / totalCards;
    const offset = currentIndex * cardWidthPercent;
    track.style.transform = `translateX(-${offset}%)`;
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.expertise__dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
    });
  }

  function goTo(index) {
    currentIndex = ((index % slidesCount) + slidesCount) % slidesCount;
    updatePosition();
    updateDots();
  }

  function next() {
    goTo(currentIndex + 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoInterval = setInterval(next, 4000);
  }

  function stopAutoPlay() {
    if (autoInterval) {
      clearInterval(autoInterval);
      autoInterval = null;
    }
  }

  // Criar dots (3 slides)
  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'expertise__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => {
      goTo(i);
      startAutoPlay();
    });
    dotsContainer.appendChild(dot);
  }

  // Pausar auto-play ao passar o mouse
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  // Inicializar
  updatePosition();
  updateDots();
  startAutoPlay();

  window.addEventListener('resize', updatePosition);
});
