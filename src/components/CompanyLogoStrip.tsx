import { motion } from "framer-motion";

// Import logos
import sotiLogo from "../assets/soti-logo.png";
import adobeLogo from "../assets/adobe-logo.png";
import deloitteLogo from "../assets/deloitte-logo.png";
import wiproLogo from "../assets/wipro-logo.png";
import npclLogo from "../assets/npcl-logo-new.png";
import hclLogo from "../assets/hcltech-logo.png";
import genpactLogo from "../assets/genpact-logo.png";
import adaniLogo from "../assets/adani-cements-logo.png";
import mothersonLogo from "../assets/motherson-logo.png";
import allenLogo from "../assets/allen-logo.png";
import pwLogo from "../assets/pw-logo.png";
import byjusLogo from "../assets/byjus-logo.png";
import techMahindraLogo from "../assets/tech-mahindra-logo.png";
import jaroLogo from "../assets/jaro-logo-new.png";
import relianceLogo from "../assets/reliance-logo.png";
import accentureLogo from "../assets/accenture-logo.png";

const companies = [
  { name: "SOTI", logo: sotiLogo },
  { name: "Adobe", logo: adobeLogo },
  { name: "Deloitte", logo: deloitteLogo },
  { name: "Wipro", logo: wiproLogo },
  { name: "NPCL", logo: npclLogo },
  { name: "HCL Tech", logo: hclLogo },
  { name: "Genpact", logo: genpactLogo },
  { name: "Adani Cements", logo: adaniLogo },
  { name: "Motherson International", logo: mothersonLogo },
  { name: "Allen", logo: allenLogo },
  { name: "PW", logo: pwLogo },
  { name: "BYJU’S", logo: byjusLogo },
  { name: "Tech Mahindra", logo: techMahindraLogo },
  { name: "Jaro Education", logo: jaroLogo },
  { name: "Reliance Industries Ltd.", logo: relianceLogo },
  { name: "Accenture", logo: accentureLogo }
];

const CompanyLogoStrip = () => {
  return (
    <section className="py-8 bg-secondary border-y border-border overflow-hidden">
      <div className="container-narrow mb-6">
        <p className="text-center text-lg font-semibold text-muted-foreground uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Infinite Scroll Animation */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, -5000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 flex-shrink-0 mx-6"
                style={{ minWidth: '240px' }}
              >
                <div className="h-24 w-48 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-md border border-border/40 hover:shadow-lg transition-all duration-300">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-bold text-sm text-foreground/70 whitespace-nowrap text-center">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default CompanyLogoStrip;
