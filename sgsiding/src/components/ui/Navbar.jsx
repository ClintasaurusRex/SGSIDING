import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
      const navHeight = 96; // Match navbar height from CSS
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);
      setIsOpen(false);
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

        <div
          className={`navbar-collapse ${isOpen ? 'show' : ''}`}
          id='navbarSupportedContent'
        >
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
              className={` nav-link ${
                activeSection === 'contact' ? 'active' : ''
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
