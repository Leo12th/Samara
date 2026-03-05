/**
 * Excellus - Alternância de tema claro/escuro
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('excellus-theme', theme);
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    toggle.classList.toggle('theme-toggle--light', theme === 'light');
  }

  toggle.addEventListener('click', () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  toggle.setAttribute('aria-label', getTheme() === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  toggle.classList.toggle('theme-toggle--light', getTheme() === 'light');
});
