import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink, Linkedin } from "lucide-react";
import uolLogo from "@/assets/tpc-logo.jpeg";

// Custom X (formerly Twitter) Logo


const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow py-8">
        <div className="grid md:grid-cols-2 lg:flex lg:justify-between gap-6 lg:gap-10 text-left">
          {/* About & Socials */}
          <div className="flex flex-col items-start lg:max-w-xs">
            <div>
              <div className="flex items-center justify-start gap-3 mb-3">
                <img
                  src={uolLogo}
                  alt="University of Lucknow"
                  className="w-14 h-14 object-contain rounded-full"
                />
                <div className="text-left">
                  <p className="font-serif font-semibold text-sm">Training & Placement Cell</p>
                  <p className="text-xs text-primary-foreground/70">FoET, University of Lucknow</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-xs leading-relaxed max-w-xs">
                Training and Placement Cell
                Faculty of Engineering and Technology (Est. 2017)
                University of Lucknow
                Bridging Engineering Education with Industry Opportunities.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-1 flex flex-col items-start">
              {[
                { name: "About University", href: "/about-university" },
                { name: "About TPC", href: "/about-tpc" },
                { name: "Skill Development", href: "/skill-development" },
                { name: "Events", href: "/events" },
                { name: "Our Alumni", href: "/our-alumni" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif font-semibold text-sm mb-3">Contact Us</h4>
            <ul className="space-y-1.5 flex flex-col items-start w-full">
              <li className="flex items-start gap-3 justify-start w-full">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-xs text-left">
                  T&P Cell, FoET, University of Lucknow,<br />
                  New Campus Road, Jankipuram Extension,<br />
                  Lucknow, Uttar Pradesh, 226031
                  <a href="https://www.google.com/maps/search/?api=1&query=WWHQ%2BJC7%2C+Training+%26+Placement+Cell%2C+Faculty+of+Engineering+%26+Technology+University+of+Lucknow%2C+New+Campus+Rd%2C+Sultanpur+Village%2C+Jankipuram+Extension%2C+Lucknow%2C+Uttar+Pradesh+226031" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1 text-[10px]">(Map View)</a>
                </span>
              </li>
              <li className="flex items-center gap-3 justify-start w-full">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+917005287870" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs">
                  +91 7905287870
                </a>
              </li>
              <li className="flex items-center gap-3 justify-start w-full">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:trainingfoet@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs">
                  trainingfoet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-start w-full">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:placement_foet@lkouniv.ac.in" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs">
                  placement_foet@lkouniv.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Developed by - Right-most */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif font-semibold text-sm mb-3">Developed by</h4>
            <ul className="space-y-1 flex flex-col items-start">
              {[
                { name: "Akash Singh", linkedin: "https://www.linkedin.com/in/akashsinghmrj64/" },
                { name: "Srishti Mishra", linkedin: "https://www.linkedin.com/in/mishrasrishti108/" },
                { name: "Anurag", linkedin: "https://www.linkedin.com/in/anurag-210a86317/" },
                { name: "Akash Kumar Yadav", linkedin: "https://www.linkedin.com/in/akash-kumar-yadav-b1a33430b/" },
                { name: "Rashmi Kushwaha", linkedin: "https://www.linkedin.com/in/rashmikushwaha2005/" }
              ].map((dev, index) => (
                <li key={index} className="flex items-center gap-2">
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-background/10 border border-primary-foreground/20 rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110"
                    aria-label={`${dev.name} LinkedIn`}
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                  <span className="text-primary-foreground/70 text-xs">{dev.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-[10px] md:text-xs">
              © {new Date().getFullYear()} University of Lucknow. All rights reserved.
            </p>

            {/* Center Links */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/admin-login" className="text-primary-foreground/40 hover:text-accent transition-colors text-[10px] md:text-xs">
                Admin Login
              </Link>
              <Link to="/coordinator-login" className="text-primary-foreground/40 hover:text-accent transition-colors text-[10px] md:text-xs">
                Coordinator Login
              </Link>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-[10px] md:text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-[10px] md:text-xs">
                Terms of Use
              </a>
              <a
                href="https://www.lkouniv.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-[10px] md:text-xs flex items-center gap-1"
              >
                UOL Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
