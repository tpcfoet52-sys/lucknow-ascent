import { motion } from "framer-motion";
import { Camera, ArrowRight, Calendar } from "lucide-react";
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
        description: "Students from our university participated in SIH 2025, working on innovative digital solutions for some of the most pressing problems of our nation."
    },
    {
        id: 2,
        type: "Events",
        src: samsungInnovation,
        title: "Samsung Innovation Campus Program",
        date: "Jan 26, 2025",
        description: "The Samsung Innovation Campus program provides specialized training in AI, IoT, Big Data, and Coding & Programming to enhance employability."
    },
];

const MediaPreview = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
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
                    <Link to="/media">
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
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                <motion.div
                                    variants={{
                                        initial: { height: 0, opacity: 0 },
                                        animate: { height: 0, opacity: 0 },
                                        hover: { height: "auto", opacity: 1 }
                                    }}
                                    className="overflow-hidden"
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <p className="text-sm text-muted-foreground mt-2 border-t border-border/50 pt-3">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaPreview;
