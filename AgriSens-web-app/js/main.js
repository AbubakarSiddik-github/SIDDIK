// Enhanced JavaScript for AgriSens Web App

// Mobile menu functionality
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.features .row, .about .box, .footer .box');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
});

// Button hover effects
document.querySelectorAll('.buttonn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.02)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Parallax effect for home section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const homeSection = document.querySelector('.home');
  if (homeSection) {
    const rate = scrolled * -0.5;
    homeSection.style.transform = `translateY(${rate}px)`;
  }
});

// Typing effect for main heading
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  const mainHeading = document.querySelector('.home h1');
  if (mainHeading) {
    const originalText = mainHeading.textContent;
    typeWriter(mainHeading, originalText, 80);
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Smooth reveal animation for features
const featureRows = document.querySelectorAll('.features .row');
featureRows.forEach((row, index) => {
  row.style.animationDelay = `${index * 0.2}s`;
});

// Add click ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('.buttonn, .home-btn, .all-btn').forEach(button => {
  button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple 600ms linear;
    pointer-events: none;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Scroll indicator functionality
window.addEventListener('scroll', () => {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
  }
});