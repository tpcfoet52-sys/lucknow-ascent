import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import uolLogo from "@/assets/uol-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Statistics", href: "/statistics" },
  { name: "Recruiters", href: "/recruiters" },
  { name: "Students", href: "/students" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isHomePage && !isScrolled 
    ? "bg-transparent" 
    : "bg-background/95 backdrop-blur-md shadow-elevated-sm border-b border-border";

  const textColor = isHomePage && !isScrolled ? "text-primary-foreground" : "text-foreground";
  const mutedColor = isHomePage && !isScrolled ? "text-primary-foreground/70" : "text-muted-foreground";
  const linkColor = isHomePage && !isScrolled ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-primary";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 transition-colors text-sm font-medium relative group ${linkColor} ${
                  location.pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 transition-transform origin-left ${
                  location.pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                } ${isHomePage && !isScrolled ? "bg-accent" : "bg-primary"}`} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant={isHomePage && !isScrolled ? "goldOutline" : "outline"} 
              size="sm"
            >
              Student Login
            </Button>
            <Button 
              variant={isHomePage && !isScrolled ? "gold" : "default"} 
              size="default"
            >
              Recruiter Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isHomePage && !isScrolled 
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
              <Link
                key={link.name}
                to={link.href}
                className={`block hover:text-primary hover:bg-secondary transition-colors py-3 px-4 rounded-md ${
                  location.pathname === link.href ? "text-primary font-semibold bg-secondary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
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
