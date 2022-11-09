const btn = document.getElementById('btn');
const body = document.getElementById('body');
const nav = document.getElementById('menu');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefalt();
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  body.classList.toggle('menu_active')
}

btn.addEventListener("click", toggleMenu);
btn.addEventListener("touchstart", toggleMenu);
