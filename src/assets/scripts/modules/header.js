export function initHeader() {
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.header__menu-btn');
  const mobileNav = document.querySelector('.header__mobile-nav');
  const mobileLink = document.querySelectorAll('.header__mobile-link');
  const logo = document.querySelector('.header__logo');
  const links = document.querySelectorAll('.header__nav-link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
  
  const isHome = ['/', '/index.html', '/index'].includes(window.location.pathname);

  const getScrollRatio = () => Math.min(window.scrollY / 1000, 1);

  const updateHeaderOpacity = () => {
    const isMenuOpen = mobileNav.classList.contains('header__mobile-nav--open')
    if (isMenuOpen) return
    
    const scrollRatio = getScrollRatio()
    header.style.setProperty('--header-opacity', scrollRatio)

    const isMobile = window.innerWidth < 768;
    if (isHome && !isMobile) {
      header.style.setProperty('--border-opacity', scrollRatio);
    } else if (!isHome && !isMobile) {
      header.style.setProperty('--border-opacity', 1);
    } else {
      header.style.setProperty('--border-opacity', scrollRatio);
    }
    //header.style.setProperty('--border-opacity', isHome ? scrollRatio : 1)
  }

  updateHeaderOpacity();

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeaderOpacity();
        ticking = false;
      })
      ticking = true;
    }
  })

  /* Hamburguesa: abrir/cerrar menú mobile */
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('header__mobile-nav--open')
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
  })

  /* Cerrar menú mobile al hacer click en un link */
  mobileLink.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('header__mobile-nav--open')
      mobileNav.setAttribute('aria-hidden', true);
      menuBtn.setAttribute('aria-expanded', false);
      menuBtn.querySelector('i').className = 'fas fa-bars';
      updateHeaderOpacity();
    })
  })

  // Cerrar menú mobile al hacer click en el logo
  logo.addEventListener('click', () => {
    mobileNav.classList.remove('header__mobile-nav--open')
    mobileNav.setAttribute('aria-hidden', true);
    menuBtn.setAttribute('aria-expanded', false);
    menuBtn.querySelector('i').className = 'fas fa-bars';
    updateHeaderOpacity();
  })
}