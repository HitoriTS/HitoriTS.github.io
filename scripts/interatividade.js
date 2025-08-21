// scripts/interatividade.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnHistoria');
  const info = document.getElementById('info');

  if (btn && info) {
    const toggle = () => {
      const isVisible = info.getAttribute('visible');
      info.setAttribute('visible', !isVisible);
    };

    btn.addEventListener('click', toggle);
    btn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      toggle();
    }, { passive: false });
  }
});
