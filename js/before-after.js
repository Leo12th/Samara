/**
 * Excellus - Before/After Slider
 */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.ba-slider');
  if (!slider) return;

  const handle = slider.querySelector('.ba-slider__handle');
  const after = slider.querySelector('.ba-slider__after');
  if (!handle || !after) return;

  let isDragging = false;

  function updatePosition(x) {
    const rect = slider.getBoundingClientRect();
    let percent = ((x - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handle.style.left = `${percent}%`;
  }

  handle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  slider.addEventListener('click', (e) => {
    if (e.target === handle || handle.contains(e.target)) return;
    updatePosition(e.clientX);
  });

  // Touch support
  handle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isDragging = true;
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches.length) return;
    updatePosition(e.touches[0].clientX);
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Posição inicial
  updatePosition(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width / 2);
});
