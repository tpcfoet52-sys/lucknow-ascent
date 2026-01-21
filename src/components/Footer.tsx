import { MapPin, Phone, Mail, ExternalLink, Linkedin, Instagram, Twitter } from "lucide-react";
import uolLogo from "@/assets/uol-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About & Socials */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={uolLogo} 
                alt="University of Lucknow" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-serif font-semibold text-lg">University of Lucknow</p>
                <p className="text-sm text-primary-foreground/70">Training & Placement Cell</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md mb-6">
              Established in 1920, the University of Lucknow stands as a beacon of academic excellence. 
              Our Training & Placement Cell bridges the gap between academia and industry.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/training-and-placement-cell-foet-university-of-lucknow/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/tpcfoet/?hl=en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              // 1. Remove the old Twitter icon import
              // import { Twitter } from "lucide-react"; 
              
              // 2. Create a custom X (Twitter) component or use an SVG
              const XLogo = () => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              );
              
              // 3. Update the JSX
              <a href="https://x.com/PlacementEnggLU" 
                aria-label="X (formerly Twitter)
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group">
                <XLogo />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About TPC", href: "#about" },
                { name: "Placement Statistics", href: "#recruiters" },
                { name: "Student Resources", href: "#students" },
                { name: "Recruiter Portal", href: "#recruiters" },
                { name: "FAQs", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Training & Placement Cell<br />
                  University of Lucknow<br />
                  Lucknow, UP 226007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+915222740086" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +91-522-274-0086
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:placement_foet@lkouniv.ac.in" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    placement_foet@lkouniv.ac.in
                  </a>
                  <a href="mailto:trainingfoet@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    trainingfoet@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} University of Lucknow. All rights reserved. 007442
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Use
              </a>
              <a 
                href="https://www.lkouniv.ac.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-1"
              >
                Main Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
