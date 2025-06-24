let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? 'block' : 'none';
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Initialize slideshow
showSlide(currentSlide);



// Scroll effect: add "visible" class when in viewport
const scrollElements = document.querySelectorAll(".scroll-effect");

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
  );
}

function handleScroll() {
  scrollElements.forEach(el => {
    if (elementInView(el)) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll); // trigger on page load

function setLanguage(lang, btn) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.innerHTML = text;
  });

  // Active button style
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// On load default
window.onload = function () {
  setLanguage('bn', document.querySelector('.lang-toggle button'));

  // Scroll animation observer
  const cards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
};

const toggleButton = document.getElementById('themeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});