import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="font-serif font-bold text-accent-foreground text-xl">U</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-lg">University of Lucknow</p>
                <p className="text-sm text-primary-foreground/70">Training & Placement Cell</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              Established in 1867, the University of Lucknow stands as a beacon of academic excellence. 
              Our Training & Placement Cell bridges the gap between academia and industry, 
              preparing students for successful careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
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
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Training & Placement Cell<br />
                  University of Lucknow<br />
                  Lucknow, UP 226007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+915222740086" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +91-522-274-0086
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:tpc@lkouniv.ac.in" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  tpc@lkouniv.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-medium">
        <div className="container-narrow py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} University of Lucknow. All rights reserved.
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
