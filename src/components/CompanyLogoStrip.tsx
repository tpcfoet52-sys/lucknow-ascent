import { motion } from "framer-motion";

const companies = [
  "MICROSOFT", "ADOBE", "DELOITTE", "WIPRO", "NPCL", "HCL TECH", 
  "GENPACT", "ADANI CEMENTS", "MOTHERSON INTERNATIONAL", "ALLEN", "PW",
  "BYJU’S", "SOTI", "JARO EDUCATION", "RELIANCE INDUSTRIES LTD.", "ACCENTURE"
];

const CompanyLogoStrip = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border overflow-hidden">
      <div className="container-narrow mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>
      
      {/* Infinite Scroll Animation */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-sm shadow-elevated-sm"
              >
                <span className="font-semibold text-foreground whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default CompanyLogoStrip;
