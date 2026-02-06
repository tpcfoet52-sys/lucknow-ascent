import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

import tpcLogo from "@/assets/tpc-logo.jpeg";

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
      { name: "Our Alumni", href: "/our-alumni" },
      { name: "Our Team", href: "/team-structure" },
    ]
  },
  { name: "Events", href: "/events" },
  { name: "Students", href: "/students" },
  { name: "Media", href: "/media" },
  { name: "Placement Records", href: "/placement-records" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only handle scrollspy for home page sections
      if (location.pathname === "/") {
        const sections = navLinks.filter(l => l.href.startsWith("#")).map(link => link.href.substring(1));
        let currentSection = "home";

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the section is in the viewport (near top)
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
            }
          }
        }

        // Only update active section if we are scrolling through sections on home page
        // But if we are at the very top, force home
        if (window.scrollY < 100) {
          setActiveSection("home");
        } else {
          setActiveSection(currentSection);
        }
      }
    };

    // Set initial active state based on route
    if (location.pathname !== "/") {
      setActiveSection(location.pathname);
    } else {
      // If on home page, reset to home or handle scroll
      setActiveSection("home");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If element not found (e.g. we are on another page), navigate to home
      // For #home specifically or any hash link that's not on current page
      navigate("/");
      // Optional: if you want to scroll to specific section after nav, you'd need more complex logic
      // but for "Back to Home", just navigating to / is usually sufficient.
      // If we want to support #about from Events page:
      if (href !== "#home") {
        setTimeout(() => {
          const el = document.getElementById(href.substring(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
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
    } else {
      e.preventDefault();
      navigate(link.href);
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };


  const isHomePage = location.pathname === "/";

  // Header should be solid if scrolled OR if not on home page
  const showSolidHeader = isScrolled || !isHomePage;

  const headerBg = !showSolidHeader
    ? "bg-transparent"
    : "bg-transparent lg:bg-background/95 lg:backdrop-blur-md lg:shadow-elevated-sm lg:border-b lg:border-border";

  const textColor = !showSolidHeader ? "text-primary-foreground" : "text-foreground";
  const mutedColor = !showSolidHeader ? "text-primary-foreground/70" : "text-muted-foreground";
  const linkColor = !showSolidHeader ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-primary";

  return (
    <header
      className={`absolute lg:fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      style={{ boxShadow: '0 4px 16px -2px rgba(0, 0, 0, 0.15)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo - always visible */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img
                src={tpcLogo}
                alt="Training & Placement Cell"
                className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full"
              />
              <div className="hidden sm:block">
                <p className={`font-serif font-semibold text-sm md:text-lg leading-tight transition-colors ${textColor}`}>
                  Training & Placement Cell
                </p>
                <p className={`text-xs md:text-sm tracking-wide transition-colors ${mutedColor}`}>
                  FoET, University of Lucknow
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`px-4 py-2 transition-colors text-sm font-bold relative flex items-center gap-1 cursor-pointer ${linkColor} ${activeSection === link.href.substring(1) || activeSection === link.href ? "font-extrabold" : ""
                    }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="h-3 w-3" />}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 transition-transform origin-left ${activeSection === link.href.substring(1) || activeSection === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
                          className={`block px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted
                            ${location.pathname === sublink.href
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                            }`}
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

          {/* Right Section: Login + Mobile Menu (Grouped) */}
          <div className="flex items-center gap-3">



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${!showSolidHeader
                ? "text-primary-foreground hover:bg-primary-foreground/10"
                : "text-foreground bg-background/80 backdrop-blur-sm shadow-md hover:bg-secondary"
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container-narrow py-4 space-y-1">
              {navLinks.filter(link => link.name !== "Home").map((link) => (
                <div key={link.name}>
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(link, e)}
                    className={`w-full flex items-center justify-between hover:text-primary hover:bg-secondary transition-colors py-3 px-4 rounded-md cursor-pointer ${activeSection === link.href.substring(1) || activeSection === link.href ? "text-primary font-bold bg-secondary" : "text-foreground font-semibold"
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
        )
      }
    </header >
  );
};

export default Header;
