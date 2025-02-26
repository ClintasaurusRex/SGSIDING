import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  // Email is split to make it harder for scrapers
  const emailParts = ["shaungersthof", "er@gm", "ail.com"];
  const blurredEmail = "shaun•••••••••@gmail.com";

  const revealEmail = (e) => {
    e.preventDefault();
    setEmailRevealed(true);
  };

  return (
    <footer className="mt-auto border-t bg-[#444445]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">SG Custom Exteriors</h3>
            <p className="text-sm text-gray-300">
              Professional siding and exterior services in the Cowichan Valley and surrounding
              areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition">
                Home
              </Link>
              <Link to="/services" className="text-sm text-gray-300 hover:text-white transition">
                Services
              </Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-white transition">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              {emailRevealed ? (
                <a
                  href={`mailto:${emailParts.join("")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-300 hover:text-white transition"
                >
                  Email: {emailParts.join("")}
                </a>
              ) : (
                <button
                  onClick={revealEmail}
                  className="block text-sm text-gray-300 hover:text-white transition cursor-pointer focus:outline-none"
                >
                  Email:{" "}
                  <span className="filter blur-[2px] hover:blur-0 transition-all duration-300">
                    {blurredEmail}
                  </span>
                  <span className="ml-2 text-xs text-gray-400">(click to reveal)</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar ! */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} SG Custom Exteriors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
