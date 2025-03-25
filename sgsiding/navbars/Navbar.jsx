import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Handle scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'about'];
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const navHeight = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className='navbar navbar-expand-xl fixed-top'>
      <div className='container'>
        <a
          className='navbar-brand'
          href='#'
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img src='/sglogo.png' alt='SG Siding Logo' className='navbar-logo' />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          aria-controls='navbarSupportedContent'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`}
          ></span>
        </button>

        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  activeSection === 'services' ? 'active' : ''
                }`}
                href='#services'
                onClick={(e) => handleNavClick(e, 'services')}
              >
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  activeSection === 'gallery' ? 'active' : ''
                }`}
                href='#gallery'
                onClick={(e) => handleNavClick(e, 'gallery')}
              >
                Gallery
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  activeSection === 'about' ? 'active' : ''
                }`}
                href='#about'
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About Us
              </a>
            </li>
          </ul>
          <div className='d-flex'>
            <a
              href='mailto:shaungersthofer@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-link'
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
