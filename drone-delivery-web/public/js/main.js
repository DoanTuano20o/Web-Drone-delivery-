const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const exploreBtn = document.getElementById('exploreBtn');
const revealItems = document.querySelectorAll('.reveal');

// Toggle mobile nav
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close mobile nav after clicking a link
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('show'));
});

// Change navbar style while scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll to features section when clicking hero CTA
exploreBtn?.addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

// Reveal elements when they enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18
  }
);

revealItems.forEach((item) => observer.observe(item));

// Add ripple effect for CTA button clicks
const rippleButtons = document.querySelectorAll('.btn-ripple');

rippleButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - diameter / 2}px`;
    ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - diameter / 2}px`;

    const oldRipple = button.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    button.appendChild(ripple);
  });
});
