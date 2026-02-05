import { MapPin, Phone, Mail, ExternalLink, Facebook, Linkedin, Instagram } from "lucide-react";
import uolLogo from "@/assets/tpc-logo.jpeg";

// Custom X (formerly Twitter) Logo
const XLogo = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow py-8">
        <div className="grid md:grid-cols-2 lg:flex lg:justify-between gap-6 lg:gap-10 text-center md:text-left">
          {/* About & Socials */}
          <div className="flex flex-col items-center md:items-start lg:max-w-xs">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
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
              <p className="text-primary-foreground/80 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Connecting Engineering Education with Industry Excellence since 2017.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-1.5 flex flex-col items-center md:items-start">
              {[
                { name: "About TPC", href: "#about" },
                { name: "Placement Statistics", href: "#recruiters" },
                { name: "Student Resources", href: "#students" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif font-semibold text-sm mb-3 md:ml-7">Contact Us</h4>
            <ul className="space-y-1.5 flex flex-col items-center md:items-start w-full">
              <li className="flex items-start gap-3 justify-center md:justify-start w-full">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-xs text-left">
                  WWHQ+JC7, Training & Placement Cell,<br />
                  Faculty of Engineering & Technology University of Lucknow,<br />
                  New Campus Rd, Sultanpur Village, Jankipuram Extension,<br />
                  Lucknow, Uttar Pradesh 226031 <a href="https://www.google.com/maps/search/?api=1&query=WWHQ%2BJC7%2C+Training+%26+Placement+Cell" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1 text-[10px]">(Map View)</a>
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start w-full">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+917005287870" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs">
                  +91-79052 87870
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start w-full">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="flex flex-col text-left">
                  <a href="mailto:trainingfoet@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs">
                    trainingfoet@gmail.com
                  </a>
                  <a href="mailto:placement_foet@lkouniv.ac.in" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs">
                    placement_foet@lkouniv.ac.in
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Developed by - Right-most */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif font-semibold text-sm mb-3 md:ml-[1.375rem]">Developed by</h4>
            <ul className="space-y-1.5 flex flex-col items-center md:items-start">
              {[
                { name: "Akash Singh", linkedin: "https://www.linkedin.com/in/akashsinghmrj64/" },
                { name: "Srishti Mishra", linkedin: "https://www.linkedin.com/in/mishrasrishti108/" },
                { name: "Anurag", linkedin: "https://www.linkedin.com/in/anurag-210a86317/" },
                { name: "Akash Kumar Yadav", linkedin: "https://www.linkedin.com/in/akash-kumar-yadav-b1a33430b/" },
                { name: "Rashmi Kushwaha", linkedin: "https://www.linkedin.com/in/rashmikushwaha2005/" },
                { name: "Aryan Tripathi", linkedin: "https://www.linkedin.com/in/aryan-tripathi-45346a254/" }
              ].map((dev, index) => (
                <li key={index} className="flex items-center gap-2">
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                    aria-label={`${dev.name} LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
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
