// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Hero parallax (opcional)
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero-parallax');
  if (!hero) return;
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;
  hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});
