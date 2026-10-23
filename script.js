const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
