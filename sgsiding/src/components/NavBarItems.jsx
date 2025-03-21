import { Link } from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBarItems() {
  return (
    <div className='nav-items'>
      <nav className='hidden md:flex space-x-6'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/services' className='nav-link'>
          Services
        </Link>
        <Link to='/about' className='nav-link'>
          About Us
        </Link>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </nav>
    </div>
  );
}
