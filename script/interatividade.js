document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('btnHistoria');
  const info = document.getElementById('info');

  const toggle = () => {
    const v = info.getAttribute('visible');
    info.setAttribute('visible', !v);
  };

  // desktop e mobile
  btn.addEventListener('click', toggle);
  btn.addEventListener('touchstart', (e) => { e.preventDefault(); toggle(); }, {passive:false});
});
