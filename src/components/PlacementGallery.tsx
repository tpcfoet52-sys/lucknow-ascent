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
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Recent <span className="text-gold-gradient">Placement Drives</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-card shadow-elevated-md border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-card shadow-elevated-md border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Slide Content */}
          <div className="overflow-hidden rounded-xl bg-primary p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 w-60 h-32 rounded-xl bg-white shadow-lg flex items-center justify-center p-6 border border-border/20 overflow-hidden">
                    {hasError ? (
                      <span className="text-4xl font-bold text-primary">
                        {currentItem.company.charAt(0)}
                      </span>
                    ) : (
                      <img
                        src={logoUrl}
                        alt={`Placement Gallery Image ${currentIndex + 1}`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(prev => ({ ...prev, [currentIndex]: true }))}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left flex-1">
                    <span className="inline-block bg-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {currentItem.company}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-3">
                      {currentItem.title}
                    </h3>
                    <p className="text-primary-foreground/80 mb-4">
                      {currentItem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
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
