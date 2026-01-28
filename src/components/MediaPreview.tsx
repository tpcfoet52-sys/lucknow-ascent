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
    },
    {
        id: 2,
        type: "Events",
        src: samsungInnovation,
        title: "Samsung Innovation Campus Program",
        date: "Jan 26, 2025",
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary" className="text-xs">
                                        {item.type}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {item.date}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaPreview;
