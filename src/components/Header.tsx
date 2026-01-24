import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import uolLogo from "@/assets/uol-logo.png";

interface NavLink {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  {
    name: "About", href: "#about", submenu: [
      { name: "About University", href: "/about-university" },
      { name: "About TPC", href: "/about-tpc" },
      { name: "Our Team", href: "/team-structure" },
    ]
  },
  { name: "Events", href: "#events" },
  { name: "Students", href: "#students" },
  { name: "Media", href: "#gallery" },
  { name: "Placement Records", href: "#recruiters" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.filter(l => l.href.startsWith("#")).map(link => link.href.substring(1));
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
    setOpenDropdown(null);
  };

  const handleNavClick = (link: NavLink, e: React.MouseEvent) => {
    if (link.submenu) {
      e.preventDefault();
      setOpenDropdown(openDropdown === link.name ? null : link.name);
    } else if (link.href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(link.href);
    }
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
                Training & Placement Cell
              </p>
              <p className={`text-xs tracking-wide transition-colors ${mutedColor}`}>
                University of Lucknow
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`px-4 py-2 transition-colors text-sm font-medium relative flex items-center gap-1 cursor-pointer ${linkColor} ${activeSection === link.href.substring(1) ? "font-semibold" : ""
                    }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="h-3 w-3" />}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 transition-transform origin-left ${activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } ${!isScrolled ? "bg-accent" : "bg-primary"}`} />
                </a>

                {/* Dropdown */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant={!isScrolled ? "gold" : "default"}
                size="default"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${!isScrolled
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
              <div key={link.name}>
                <button
                  onClick={(e) => handleNavClick(link, e as any)}
                  className={`w-full flex items-center justify-between hover:text-primary hover:bg-secondary transition-colors py-3 px-4 rounded-md cursor-pointer ${activeSection === link.href.substring(1) ? "text-primary font-semibold bg-secondary" : "text-foreground"
                    }`}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`} />
                  )}
                </button>

                {link.submenu && openDropdown === link.name && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">

            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;