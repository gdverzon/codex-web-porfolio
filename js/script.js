'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');
function closeMenu() {
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  menu.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
menu.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
  closeMenu();
  if (wasOpen) {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
    }
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function setupReveals() {
  if (revealObserver) revealObserver.disconnect();
  document.querySelectorAll('.reveal').forEach(section => section.classList.remove('is-pending'));
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(section => {
    if (section.getBoundingClientRect().top > window.innerHeight) {
      section.classList.add('is-pending');
      revealObserver.observe(section);
    }
  });
}
setupReveals();
reducedMotion.addEventListener('change', setupReveals);
const notice = document.querySelector('#placeholder-notice');
document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    notice.textContent = `${link.dataset.placeholder} has not been added yet. This is a portfolio placeholder.`;
    notice.classList.add('is-active');
    notice.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' });
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
