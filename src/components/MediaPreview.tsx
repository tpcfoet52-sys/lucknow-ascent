import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowRight, Calendar, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import smartIndiaHackathon from "@/assets/smart-india-hackathon.jpg";
import samsungInnovation from "@/assets/samsung-innovation-campus.jpg";

const mediaItems = [
    {
        id: 1,
        type: "Events",
        src: smartIndiaHackathon,
        title: "Smart India Hackathon 2025",
        date: "Jan 26, 2025",
        description: "Students from our university participated in SIH 2025, working on innovative digital solutions for some of the most pressing problems of our nation.",
        summary: "Our students showcased exceptional talent at SIH 2025, solving real-world challenges with innovative digital solutions. The event fostered a spirit of entrepreneurship and technical excellence among participants, with several teams receiving commendations from industry experts. This national-level platform allowed our bright minds to interact with mentors and peers from across the country."
    },
    {
        id: 2,
        type: "Events",
        src: samsungInnovation,
        title: "Samsung Innovation Campus Program",
        date: "Jan 26, 2025",
        description: "The Samsung Innovation Campus program provides specialized training in AI, IoT, Big Data, and Coding & Programming to enhance employability.",
        summary: "The Samsung Innovation Campus program continues to bridge the gap between academia and industry. Through specialized training in AI, Data Science, and IoT, our students are gaining the future-ready skills required for the global tech landscape. This initiative is part of our commitment to providing world-class technical education and ensuring our graduates are prepared for high-impact careers."
    },
];

const MediaPreview = () => {
    const [selectedItem, setSelectedItem] = useState<typeof mediaItems[0] | null>(null);

    return (
        <section className="section-padding bg-background">
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-row items-center justify-between mb-10 gap-4"
                >
                    <div>
                        <span className="text-accent font-medium text-sm uppercase tracking-wider">Gallery</span>
                        <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
                            Campus <span className="text-gold-gradient">Highlights</span>
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-md">
                            Glimpses from recent events and achievements
                        </p>
                    </div>
                    <Link to="/media" className="flex-shrink-0">
                        <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                            View More
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>

                {/* Media Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, y: 30 },
                                animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                                hover: { y: -5, transition: { duration: 0.3 } }
                            }}
                            className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer hover:shadow-lg transition-all duration-300"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay gradient on hover */}
                                {/* Gradient overlay on hover - Removed */}
                            </div>

                            <div className="p-5 relative z-10 bg-card">
                                <div className="flex justify-between items-start mb-3">
                                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-accent/20 text-accent">
                                        {item.type}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {item.date}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                                    {item.title}
                                </h3>

                                {/* Animated Description Text - Reveal on Hover */}
                                <div className="mt-2 pt-2 border-t border-border/50">
                                    <p className="text-xs text-accent font-medium flex items-center gap-1">
                                        Click to view summary <ArrowRight className="w-3 h-3" />
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Event Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full bg-card rounded-2xl shadow-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Part */}
                            <div className="w-full md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Info Part */}
                            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center bg-card border-l border-border/50">
                                <div className="mb-6">
                                    <Badge variant="outline" className="text-xs uppercase tracking-widest border-accent/30 text-accent mb-4">
                                        {selectedItem.type}
                                    </Badge>
                                    <h3 className="text-2xl font-serif font-bold text-foreground leading-tight mb-3">
                                        {selectedItem.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <Calendar className="w-4 h-4" />
                                        {selectedItem.date}
                                    </div>
                                </div>

                                <div className="h-px w-full bg-border/50 mb-6" />

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">Event Summary</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {selectedItem.summary}
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 md:p-3 bg-white text-black hover:bg-accent hover:text-accent-foreground rounded-full shadow-lg border border-border/10 transition-all duration-300 z-50 group"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-90" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default MediaPreview;
