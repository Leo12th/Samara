/**
 * Excellus - Efeitos interativos (Spotlight, Magnetic Button)
 */

document.addEventListener('DOMContentLoaded', () => {
  initSpotlight();
});

/* ========== SPOTLIGHT - Cursor segue o mouse ========== */
function initSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
}

