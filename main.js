const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

function setMenuOpen(open) {
  header.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(!header.classList.contains('is-open'));
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header.classList.contains('is-open')) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

window.matchMedia('(min-width: 981px)').addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false);
});

function updateHeaderShadow() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

updateHeaderShadow();
window.addEventListener('scroll', updateHeaderShadow, { passive: true });

// Underline the nav link for whichever section is in the middle of the screen
const navLinks = menu.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const target = entry.target.dataset.nav || entry.target.id;

    navLinks.forEach((link) => {
      if (link.hash === `#${target}`) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main > section[id]').forEach((section) => {
  sectionObserver.observe(section);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal, .reveal-group').forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll('.slideshow').forEach((slideshow) => {
  const track = slideshow.querySelector('.slides');
  const dots = slideshow.querySelectorAll('.slide-dots button');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;

  function goTo(index) {
    const next = (index + dots.length) % dots.length;

    track.scrollTo({
      left: next * track.clientWidth,
      behavior: reduceMotion.matches ? 'auto' : 'smooth',
    });
  }

  function updateDots() {
    current = Math.round(track.scrollLeft / track.clientWidth);

    dots.forEach((dot, index) => {
      if (index === current) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  }

  slideshow.querySelector('.slide-prev').addEventListener('click', () => goTo(current - 1));
  slideshow.querySelector('.slide-next').addEventListener('click', () => goTo(current + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goTo(index));
  });

  slideshow.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goTo(current - 1);
    if (event.key === 'ArrowRight') goTo(current + 1);
  });

  track.addEventListener('scroll', updateDots, { passive: true });
});

document.documentElement.classList.add('js');

document.getElementById('year').textContent = new Date().getFullYear();
