import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


export default function NavBarItems() {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link
        to="/"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        Home
      </Link>
      <Link
        to="/services"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        Services
      </Link>
      <Link
        to="/about"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        Contact
      </Link>
    </nav>
  );
}