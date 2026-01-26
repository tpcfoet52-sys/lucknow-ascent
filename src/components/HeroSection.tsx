import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/university-hero-v3.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

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
        {/* Strong dark overlay for maximum text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="inline-block text-white/50 text-sm tracking-[0.3em] uppercase font-light border-b border-white/30 pb-2">
              Est. 1920
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Training & Placement Cell
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-accent font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] whitespace-nowrap">
              University of Lucknow
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed"
          >
            Bridging academic excellence with industry opportunities
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-10 md:gap-16 pt-8 pb-4"
          >
            {[
              { value: "NAAC A++", label: "Accreditation" },
              { value: "NIRF Ranked", label: "University" },
              { value: "500+", label: "Companies" },
              { value: "₹26.0 LPA", label: "Highest Package (2023 Batch)" },
            ].map((stat, index) => (
              <div key={index} className="text-center min-w-[100px]">
                <p className="text-2xl md:text-3xl font-serif font-bold text-accent drop-shadow-md">{stat.value}</p>
                <p className="text-xs text-white/70 mt-2 tracking-widest uppercase font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
          >

            <Link to="/events">
              <Button
                variant="gold"
                size="lg"
                className="group min-w-[200px] text-base font-medium"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Events
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              variant="heroDark"
              size="lg"
              className="min-w-[200px] text-base font-medium"
              onClick={() => scrollToSection("recruiters")}
            >
              For Recruiters
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-accent transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
