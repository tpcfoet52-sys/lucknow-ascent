import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import heroImage from "@/assets/university-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="University of Lucknow Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex flex-col items-center"
          >
            <span className="text-primary-foreground/70 text-sm tracking-[0.25em] uppercase font-light">Est. 1867</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1]">
              Training & Placement Cell
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gold-gradient mt-3 font-medium">
              University of Lucknow
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl mx-auto text-base md:text-lg text-primary-foreground/80 font-light leading-relaxed"
          >
            Bridging academic excellence with industry opportunities since 1867.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 py-6"
          >
            {[
              { value: "NAAC A++", label: "Accreditation" },
              { value: "Category 1", label: "University" },
              { value: "500+", label: "Companies" },
              { value: "3400+", label: "Placed in 2023-24" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-serif font-semibold text-accent">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60 mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link to="/statistics">
              <Button variant="gold" size="lg" className="group min-w-[180px]">
                Placement 2026
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/recruiters">
              <Button variant="heroDark" size="lg" className="min-w-[180px]">
                For Recruiters
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <Link to="/about" className="flex flex-col items-center gap-1 text-primary-foreground/50 hover:text-accent transition-colors">
            <span className="text-xs uppercase tracking-wider">Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
