import { cn } from "@/lib/utils"; 

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavBarItems from "../NavBarItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-444445 border-b shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-lg font-bold text-primary">Siding Business</div>

        {/* Desktop Navigation */}
        <NavBarItems />
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted hover:text-primary"
          onClick={toggleMenu}
        >
          <div className="flex items-center justify-center">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md border-t md:hidden">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link
                to="/"
                className={cn("text-sm font-medium text-muted hover:text-primary ")}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={cn("text-sm font-medium text-muted hover:text-primary")}
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={cn("text-sm font-medium text-muted hover:text-primary")}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={cn("text-sm font-medium text-muted hover:text-primary")}
                onClick={toggleMenu}
              >
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
