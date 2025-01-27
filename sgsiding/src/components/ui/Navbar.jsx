import { cn } from "@/lib/utils"; // Utility from ShadCN for conditional classnames
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavBarItems from "../NavBarItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-444445 border-b shadow-sm transition-all duration-300 hover:shadow-lg">
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
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md border-t md:hidden">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link
                href="#home"
                className={cn(
                  "text-sm font-medium text-muted hover:text-primary"
                )}
              >
                Home
              </Link>
              <Link
                href="#services"
                className={cn(
                  "text-sm font-medium text-muted hover:text-primary"
                )}
              >
                Services
              </Link>
              <Link
                href="#about"
                className={cn(
                  "text-sm font-medium text-muted hover:text-primary"
                )}
              >
                About Us
              </Link>
              <Link
                href="#contact"
                className={cn(
                  "text-sm font-medium text-muted hover:text-primary"
                )}
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
