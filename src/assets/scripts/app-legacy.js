// Header
history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

var header = document.querySelector('.header');
var menuBtn = document.querySelector('.header__menu-btn');
var mobileNav = document.querySelector('.header__mobile-nav');
var mobileLink = document.querySelectorAll('.header__mobile-link');
var logo = document.querySelector('.header__logo');
var links = document.querySelectorAll('.header__nav-link');
var currentPath = window.location.pathname;

links.forEach(function(link) {
  var linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.setAttribute('aria-current', 'page');
  }
});

var isHome = ['/', '/index.html', '/index'].includes(window.location.pathname);

function getScrollRatio() {
  return Math.min(window.scrollY / 1000, 1);
}

function updateHeaderOpacity() {
  var isMenuOpen = mobileNav.classList.contains('header__mobile-nav--open');
  if (isMenuOpen) return;

  var scrollRatio = getScrollRatio();
  header.style.setProperty('--header-opacity', scrollRatio);

  var isMobile = window.innerWidth < 768;
  if (isHome && !isMobile) {
    header.style.setProperty('--border-opacity', scrollRatio);
  } else if (!isHome && !isMobile) {
    header.style.setProperty('--border-opacity', 1);
  } else {
    header.style.setProperty('--border-opacity', scrollRatio);
  }
}

updateHeaderOpacity();

var ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(function() {
      updateHeaderOpacity();
      ticking = false;
    });
    ticking = true;
  }
});

menuBtn.addEventListener('click', function() {
  var isOpen = mobileNav.classList.toggle('header__mobile-nav--open');
  mobileNav.setAttribute('aria-hidden', !isOpen);
  menuBtn.setAttribute('aria-expanded', isOpen);
  menuBtn.querySelector('i').className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';

  if (isOpen) {
    header.style.setProperty('--header-opacity', 1);
    header.style.setProperty('--header-fg', 1);
    header.style.setProperty('--border-opacity', 1);
  } else {
    updateHeaderOpacity();
  }
});

mobileLink.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('header__mobile-nav--open');
    mobileNav.setAttribute('aria-hidden', true);
    menuBtn.setAttribute('aria-expanded', false);
    menuBtn.querySelector('i').className = 'fas fa-bars';
    updateHeaderOpacity();
  });
});

logo.addEventListener('click', function() {
  mobileNav.classList.remove('header__mobile-nav--open');
  mobileNav.setAttribute('aria-hidden', true);
  menuBtn.setAttribute('aria-expanded', false);
  menuBtn.querySelector('i').className = 'fas fa-bars';
  updateHeaderOpacity();
});

// AOS — AOS ya está en global window.AOS desde el CDN
setTimeout(function() {
  AOS.init({
    duration: 550,
    easing: 'ease-out',
    once: false,
    offset: 60,
  });
}, 500);

window.addEventListener('load', function() { AOS.refresh(); });
window.addEventListener('resize', function() { AOS.refresh(); });