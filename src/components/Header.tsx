import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Statistics", href: "#about" },
  { name: "Recruiters", href: "#recruiters" },
  { name: "Students", href: "#students" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-primary shadow-elevated-md" 
        : "bg-primary/80 backdrop-blur-md"
    }`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-serif font-bold text-accent-foreground text-lg md:text-xl">U</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-semibold text-primary-foreground text-sm md:text-base leading-tight">University of Lucknow</p>
              <p className="text-xs text-primary-foreground/60 tracking-wide">Training & Placement Cell</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-foreground/70 hover:text-accent px-4 py-2 transition-colors text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="goldOutline" size="sm">
              Student Login
            </Button>
            <Button variant="gold" size="default">
              Recruiter Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-sm transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-navy-medium animate-fade-in">
          <div className="container-narrow py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5 transition-colors py-3 px-4 rounded-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="goldOutline" className="w-full">
                Student Login
              </Button>
              <Button variant="gold" className="w-full">
                Recruiter Portal
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
