import { useState, useEffect } from 'react';
import './styles/NavBar.css';

export default function NavBarItems() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className='main-nav'>
      <div className='nav-container'>
        <div className='nav-brand'>
          <img src='/sglogo.png' alt='SG Siding Logo' className='nav-logo' />
        </div>

        {/* Mobile Menu Button */}
        <button
          className='menu-toggle'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label='Toggle navigation menu'
        >
          <div className='menu-icon'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {[
            { id: 'home', text: 'Home' },
            { id: 'services', text: 'Services' },
            { id: 'gallery', text: 'Gallery' },
            { id: 'about', text: 'About Us' },
            { id: 'contact', text: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${
                activeSection === item.id ? 'active' : ''
              }`}
              aria-label={`Go to ${item.text.toLowerCase()} section`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
