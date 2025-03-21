import { cn } from '@/lib/utils';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBarItems from '../NavBarItems';
import '../styles/NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='wood-navbar'>
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
          <h2
            className='hidden md:block'
            style={{
              textDecoration: 'underline',
              color: 'black',
              marginTop: 26,
            }}
          >
            S.G Custom Interiors
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:block'>
          <NavBarItems />
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
              <Link to='/' className='nav-link' onClick={toggleMenu}>
                Home
              </Link>
              <Link to='/services' className='nav-link' onClick={toggleMenu}>
                Services
              </Link>
              <Link to='/about' className='nav-link' onClick={toggleMenu}>
                About Us
              </Link>
              <Link to='/contact' className='nav-link' onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
