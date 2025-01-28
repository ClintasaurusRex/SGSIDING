import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

export default function NavBarItems() {
  return (
    <div className="nav-items">
    <nav className="hidden md:flex space-x-6">
      <Link
        to="/"
        className={cn("text-xl font-medium text-muted hover:text-primary link-btns")}
      >
        Home
      </Link>
      <Link
        to="/services"
        className={cn("text-xl font-medium text-muted hover:text-primary link-btns")}
      >
        Services
      </Link>
      <Link
        to="/about"
        className={cn("text-xl font-medium text-muted hover:text-primary link-btns")}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className={cn("text-xl font-medium text-muted hover:text-primary link-btns")}
      >
        Contact
      </Link>
    </nav>
    </div>
  );
}