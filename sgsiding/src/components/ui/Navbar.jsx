import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/sglogo.png" alt="SG Siding Logo" />
        </Link>

        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
        >
          <div className="navbar-toggle-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div
          id="navbar-menu"
          className={`navbar-menu ${isMenuOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="navbar-links">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("gallery")}>Gallery</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
