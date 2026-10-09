// Toggle Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // Close menu when a link is clicked
  navbar.querySelectorAll('a').forEach(link => {
    link.onclick = () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };
  });
}

// Active Nav Link On Scroll & Sticky Header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
  const top = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      const currentActive = document.querySelector(`header nav a[href*="${id}"]`);
      if (currentActive) {
        currentActive.classList.add('active');
      }
    }
  });

  if (header) {
    header.classList.toggle('sticky', window.scrollY > 80);
  }
};

// ScrollReveal Animations
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    delay: 150,
    reset: false
  });

  sr.reveal('.home-content, .heading, .section-subtext', { origin: 'top' });
  sr.reveal('.home-img, .skills-card, .project-card, .timeline-item, .edu-card, .cert-card, .contact-wrapper', { origin: 'bottom', interval: 100 });
  sr.reveal('.about-text-card', { origin: 'left' });
  sr.reveal('.about-stats-container', { origin: 'right' });
}

// Typed.js Dynamic Subheading
if (typeof Typed !== 'undefined') {
  new Typed('.multiple-text', {
    strings: [
      'Full-Stack Developer',
      'Software Engineer',
      'AI Automation Builder',
      'MERN Stack Developer'
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });
}
