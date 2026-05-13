/* =============================================
   main.js — Servicio Los Molina
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAV: efecto al hacer scroll =====
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ===== SCROLL ANIMATIONS con IntersectionObserver =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ===== SMOOTH SCROLL para links internos =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});


// Inyectar imágenes al cargar
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-img]').forEach(img => {
    const key = img.getAttribute('data-img');
    if (IMGS[key]) img.src = IMGS[key];
  });
  // hero: la foto se inyecta via data-img en el <img> interno
});


// Hamburguesa
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  // Cerrar al tocar un link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });