import { cn } from "@/lib/utils";

export default function NavBarItems() {
  return (
    <nav className="hidden md:flex space-x-6">
      <a
        href="#home"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        Home
      </a>
      <a
        href="#services"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        Services
      </a>
      <a
        href="#about"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        About Us
      </a>
      <a
        href="#contact"
        className={cn("text-sm font-medium text-muted hover:text-primary")}
      >
        Contact
      </a>
    </nav>
  );
}
