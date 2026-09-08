/**
 * Main Controller - Horizontal Background Parallax & Smooth Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.getElementById('heroBg');

  // 1. Subtle Mouse Parallax & Scroll Drift on the Horizontal Background
  if (heroBg) {
    let mouseX = 0;
    let mouseY = 0;
    let targetTranslateX = 0;
    let targetTranslateY = 0;
    let currentTranslateX = 0;
    let currentTranslateY = 0;

    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5);
      const normY = (e.clientY / window.innerHeight - 0.5);

      targetTranslateX = normX * -18;
      targetTranslateY = normY * -12;
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scale = 1.02 + Math.min(0.08, scrollY * 0.0001);
      heroBg.style.transform = `scale(${scale}) translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0)`;
    }, { passive: true });

    function renderParallax() {
      currentTranslateX += (targetTranslateX - currentTranslateX) * 0.05;
      currentTranslateY += (targetTranslateY - currentTranslateY) * 0.05;

      const scrollY = window.scrollY;
      const scale = 1.02 + Math.min(0.08, scrollY * 0.0001);
      heroBg.style.transform = `scale(${scale}) translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0)`;

      requestAnimationFrame(renderParallax);
    }
    renderParallax();
  }

  // 2. Smooth Anchor Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  console.log(
    '%c [CHETAN GAUD] %c Horizontal Interstellar Gargantua Active.',
    'background: #d4af37; color: #000000; font-weight: bold; padding: 2px 4px;',
    'color: #dcd3c1;'
  );
});
