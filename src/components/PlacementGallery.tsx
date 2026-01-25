import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "NPCL Recruitment Drive",
    description: "Core engineering roles for Electrical and Power sector",
    company: "NPCL",
    students: 12,
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

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
          <div className="overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-primary p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Icon/Visual */}
                  <div className="flex-shrink-0 w-32 h-32 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left flex-1">
                    <span className="inline-block bg-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {galleryItems[currentIndex].company}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-3">
                      {galleryItems[currentIndex].title}
                    </h3>
                    <p className="text-primary-foreground/80 mb-4">
                      {galleryItems[currentIndex].description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-accent">
                      <span className="text-3xl font-serif font-bold">{galleryItems[currentIndex].students}</span>
                      <span className="text-sm">Students Placed</span>
                    </div>
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
