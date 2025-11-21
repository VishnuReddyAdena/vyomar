
import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const body = document.body;
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    if (mobileMenuBtn && mobileMenu && openIcon && closeIcon) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        body.classList.toggle('overflow-hidden');
      });
    }

    const navContainer = document.getElementById('nav-container');
    const navIndicator = document.getElementById('nav-indicator');
    const navLinks = navContainer.querySelectorAll('a:not(.bg-accent)');

    const activeLink = Array.from(navLinks).find(link => {
      try {
        return new URL(link.href).pathname === window.location.pathname;
      } catch (e) {
        return false;
      }
    });

    function moveIndicator(element) {
      if (element && navIndicator) {
        navIndicator.style.width = `${element.offsetWidth}px`;
        navIndicator.style.left = `${element.offsetLeft}px`;
      }
    }

    if (activeLink) {
      setTimeout(() => {
        moveIndicator(activeLink);
        activeLink.classList.add('text-accent', 'font-medium');
        activeLink.classList.remove('text-text-secondary');
      }, 100);
    }

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => moveIndicator(link));
    });

    if (navContainer) {
      navContainer.addEventListener('mouseleave', () => {
        if (activeLink) {
          moveIndicator(activeLink);
        } else if (navIndicator) {
          navIndicator.style.width = '0px';
        }
      });
    }
  }, []);

  return (
    <>
      <div id="navbar" className="backdrop-blur-cosmic border-b border-cosmic">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="../assets/images/logo.png" alt="Vyomarr Logo" width="40" height="40" />
              <img src="../assets/images/vymoartext.png" alt="Vyomarr text" width="140" height="30" />
            </div>
            <div id="nav-container" className="hidden md:flex items-center space-x-8 overflow-x-auto whitespace-nowrap nav-scrollable pb-2 relative">
              <a href="home_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic py-1">Home</a>
              <a href="space_mysteries_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic py-1">Space & Mysteries</a>
              <a href="puzzle.html" className="text-text-secondary hover:text-text-primary transition-cosmic py-1">Puzzles & Games</a>
              <a href="what_if_scenarios_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic py-1">What if..?</a>
              <a href="about.html" className="text-text-secondary hover:text-text-primary transition-cosmic py-1">About</a>
              <a href="contact_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic py-1">Contact</a>
              <a href="login_register_page.html" className="login-btn text-white px-4 py-2 rounded-cosmic transition-cosmic" style={{ backgroundColor: '#FF6F3D' }}>Login</a>
              <span id="nav-indicator" className="absolute bottom-0 h-0.5 bg-accent transition-all duration-300 ease-in-out" style={{ marginLeft: 0 }}></span>
            </div>
            <button className="md:hidden text-text-primary relative z-[70]" id="mobile-menu-btn">
              <svg id="menu-open-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="menu-close-icon" className="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div id="mobile-menu" className="hidden md:hidden fixed top-0 left-0 w-full h-full backdrop-blur-lg z-[60] pt-20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-6 text-center">
            <a href="home_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic text-lg">Home</a>
            <a href="space_mysteries_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic text-lg">Space & Mysteries</a>
            <a href="puzzle_games.html" className="text-text-secondary hover:text-text-primary transition-cosmic text-lg">Puzzles & Games</a>
            <a href="what_if_scenarios_page.html" className="text-accent font-medium transition-cosmic text-lg">What if..?</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-cosmic text-lg">About & Community</a>
            <a href="contact_page.html" className="text-text-secondary hover:text-text-primary transition-cosmic text-lg">Contact</a>
            <a href="login_register_page.html" className="login-btn text-white px-6 py-3 rounded-cosmic transition-cosmic text-lg inline-block mx-auto" style={{ backgroundColor: '#FF6F3D' }}>Login</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
