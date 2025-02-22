import { Link } from "react-router-dom";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              SG Custom Exteriors
            </h3>
            <p className="text-sm text-gray-300">
              Professional siding and exterior services in the Cowichan Valley
              and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <div className="space-y-2">
              <Link
                to="/contact"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 ">
          <p className="text-center text-sm text-gray-300 pt-8">
            © {new Date().getFullYear()} SG Custom Exteriors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
