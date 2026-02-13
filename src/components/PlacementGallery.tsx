import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jaroLogo from "@/assets/jaro-logo-new.png";
import learningRoutesLogo from "@/assets/learning-routes-logo.jpg";
import wiproLogo from "@/assets/wipro-logo.png";
import npclLogo from "@/assets/npcl-logo-new.png";
import sotiLogo from "@/assets/soti-logo.png";

// Using local logos for all companies
const companyLogos: Record<string, string> = {
  "NPCL": npclLogo,
  "SOTI": sotiLogo,
  "Wipro": wiproLogo,
  "Learning Routes": learningRoutesLogo,
  "Jaro Education": jaroLogo,
};

const galleryItems = [
  {
    id: 1,
    title: "NPCL Recruitment Drive",
    description: "Core engineering roles for Electrical and Power sector",
    company: "NPCL",
    students: 12,
  },
  {
    id: 5,
    title: "SOTI Recruitment Drive",
    description: "Position: Software Development Intern",
    company: "SOTI",
    students: 0,
  },
  {
    id: 2,
    title: "Wipro HR Services",
    description: "Campus drive for HR and Management Trainee profiles",
    company: "Wipro",
    students: 25,
  },
  {
    id: 3,
    title: "Learning Routes Hiring",
    description: "Sales and Business Development Associate roles",
    company: "Learning Routes",
    students: 18,
  },
  {
    id: 4,
    title: "Jaro Education Drive",
    description: "Placement for Career Development and Sales roles",
    company: "Jaro Education",
    students: 30,
  },
];

const PlacementGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[currentIndex];
  const logoUrl = companyLogos[currentItem.company];
  const hasError = imageError[currentIndex];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full inline-block">Placement Highlights</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-6 tracking-tight">
            Recent <span className="text-gold-gradient">Placement Drives</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            Connecting our talented students with leading organizations across various sectors.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-14 h-14 rounded-full bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-2xl border border-border/50 flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-14 h-14 rounded-full bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-2xl border border-border/50 flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Slide Content */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-10 md:p-14 shadow-2xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 w-64 h-36 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center p-8 border border-white/20 overflow-hidden group">
                      {hasError ? (
                        <span className="text-5xl font-bold text-primary">
                          {currentItem.company.charAt(0)}
                        </span>
                      ) : (
                        <img
                          src={logoUrl}
                          alt={`${currentItem.company} Logo`}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                          onError={() => setImageError(prev => ({ ...prev, [currentIndex]: true }))}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left flex-1">
                      <span className="inline-block bg-gold/20 text-gold font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                        {currentItem.company}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
                        {currentItem.title}
                      </h3>
                      <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                        {currentItem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-primary w-10"
                    : "bg-border w-2.5 hover:bg-primary/50 hover:w-6"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementGallery;
