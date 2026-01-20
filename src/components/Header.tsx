import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import uolLogo from "@/assets/uol-logo.png";

// Updated navigation links as requested
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Students", href: "#students" },
  { name: "Media", href: "#gallery" }, // Changed from "Gallery"
  { name: "Placement Records", href: "#recruiters" }, // Changed from "Recruiters"
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const headerBg = !isScrolled 
    ? "bg-transparent" 
    : "bg-background/95 backdrop-blur-md shadow-elevated-sm border-b border-border";

  const textColor = !isScrolled ? "text-primary-foreground" : "text-foreground";
  const mutedColor = !isScrolled ? "text-primary-foreground/70" : "text-muted-foreground";
  const linkColor = !isScrolled ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-primary";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img 
              src={uolLogo} 
              alt="University of Lucknow" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <p className={`font-serif font-semibold text-sm md:text-base leading-tight transition-colors ${textColor}`}>
                University of Lucknow
              </p>
              <p className={`text-xs tracking-wide transition-colors ${mutedColor}`}>
                Training & Placement Cell
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`px-4 py-2 transition-colors text-sm font-medium relative group cursor-pointer ${linkColor} ${
                  activeSection === link.href.substring(1) ? "font-semibold" : ""
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 transition-transform origin-left ${
                  activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                } ${!isScrolled ? "bg-accent" : "bg-primary"}`} />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant={!isScrolled ? "goldOutline" : "outline"} 
              size="sm"
            >
              Team Login
            </Button>
            <Button 
              variant={!isScrolled ? "gold" : "default"} 
              size="default"
            >
              Admin Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              !isScrolled 
                ? "text-primary-foreground hover:bg-primary-foreground/10" 
                : "text-foreground hover:bg-secondary"
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
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`block hover:text-primary hover:bg-secondary transition-colors py-3 px-4 rounded-md cursor-pointer ${
                  activeSection === link.href.substring(1) ? "text-primary font-semibold bg-secondary" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Team Login
              </Button>
              <Button variant="default" className="w-full">
                Admin Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
