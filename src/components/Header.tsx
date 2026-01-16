import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import uolLogo from "@/assets/uol-logo.png";

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
        ? "bg-background/95 backdrop-blur-md shadow-elevated-sm border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={uolLogo} 
              alt="University of Lucknow" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <p className={`font-serif font-semibold text-sm md:text-base leading-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>University of Lucknow</p>
              <p className={`text-xs tracking-wide transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}>Training & Placement Cell</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 transition-colors text-sm font-medium relative group ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                  isScrolled ? "bg-primary" : "bg-accent"
                }`} />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant={isScrolled ? "outline" : "goldOutline"} 
              size="sm"
            >
              Student Login
            </Button>
            <Button 
              variant={isScrolled ? "default" : "gold"} 
              size="default"
            >
              Recruiter Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? "text-foreground hover:bg-secondary" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-narrow py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground hover:text-primary hover:bg-secondary transition-colors py-3 px-4 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Student Login
              </Button>
              <Button variant="default" className="w-full">
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
