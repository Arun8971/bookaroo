// Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

// Check user preference from localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeBtn.textContent = '🌙'; // Moon emoji for dark mode (Dark mode is ON)
} else {
  darkModeBtn.textContent = '☀️'; // Sun emoji for light mode (Dark mode is OFF)
}

// Toggle Dark Mode
darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    darkModeBtn.textContent = '🌙'; // Moon emoji (Dark mode is ON)
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    darkModeBtn.textContent = '☀️'; // Sun emoji (Dark mode is OFF)
  }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('header nav');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  nav.classList.toggle('active');
});
