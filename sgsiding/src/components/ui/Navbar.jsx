import { cn } from '@/lib/utils';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavBarItems from '../NavBarItems';
import '../styles/NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className='wood-navbar fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto flex items-center justify-between px-8 py-3'>
        {/* Logo */}
        <div className='text-lg font-bold text-primary business-title'>
          <img
            src='sglogo.png'
            width={100}
            height={100}
            alt='SG Siding Logo'
            className='logo'
          />
          {/* <h2
            className='hidden md:block'
            style={{
              textDecoration: 'underline',
              color: 'black',
              marginTop: 26,
            }}
          >
            S.G Custom Interiors
          </h2> */}
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:block'>
          <nav className='flex space-x-8'>
            <button
              onClick={() => scrollToSection('home')}
              className='nav-link'
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className='nav-link'
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className='nav-link'
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className='nav-link'
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='nav-link'
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-muted hover:text-primary wood-button'
          onClick={toggleMenu}
        >
          <div className='flex items-center justify-center'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className='wood-mobile-nav'>
            <div className='flex flex-col items-center space-y-4 p-4'>
              <button
                onClick={() => scrollToSection('home')}
                className='nav-link'
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className='nav-link'
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className='nav-link'
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className='nav-link'
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='nav-link'
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
