import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Camera, Newspaper, X } from "lucide-react";

import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
// Assets (Only Hero and Logo assets if needed, but hero is still used)
import heroImage from "@/assets/university-hero-new.jpg";

interface MediaItem {
    id: string;
    type: string;
    src: string;
    title: string;
    date: string;
    summary: string;
}

const Media = () => {
    const [filter, setFilter] = useState("All");
    const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
    const [dynamicItems, setDynamicItems] = useState<MediaItem[]>([]);

    // --- Fetch Approved Content from Supabase ---
    useEffect(() => {
        const fetchApprovedMedia = async () => {
            if (!supabase) return;

            const { data } = await supabase
                .from('unified_approvals')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false });

            if (data) {
                const formattedItems = data.map(item => ({
                    id: item.id,
                    // Map DB types to UI categories
                    type: item.type === 'drive' ? 'Drives' :
                        item.type === 'seminar' ? 'Seminars' :
                            item.type === 'top_performer' ? 'Star Performers' :
                                item.type === 'press_release' ? 'Press' :
                                    // Legacy Fallbacks
                                    (item.title && item.title.includes("Placement Drive")) ? 'Drives' :
                                        (item.title && item.title.includes("Higher Education Opportunities")) ? 'Seminars' :
                                            item.type === 'achievement' ? 'Star Performers' : 'Events',
                    src: item.image_url,
                    title: item.title,
                    date: new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    summary: item.description
                })).filter(item =>
                    !item.title.toLowerCase().includes("top performer of the month") &&
                    !item.title.toLowerCase().includes("republic day celebration")
                ).sort((a, b) => {
                    // List of titles to move to the bottom
                    const moveDown = [
                        "Learning Routes Placement Drive",
                        "Higher Education Opportunities",
                        "Smart India Hackathon 2025",
                        "TPC Student Coordinator Meeting"
                    ];

                    const aIsDown = moveDown.some(t => a.title.includes(t));
                    const bIsDown = moveDown.some(t => b.title.includes(t));

                    if (aIsDown && !bIsDown) return 1; // a goes after b
                    if (!aIsDown && bIsDown) return -1; // b goes after a
                    return 0; // keep relative order
                });
                setDynamicItems(formattedItems);
            }
        };

        fetchApprovedMedia();
    }, []);

    // --- Merge Data ---
    // 1. Photo Gallery (Events, Achievements, Drives, etc.)
    const allGalleryItems = dynamicItems.filter(i => i.type !== 'Press');

    // 2. Press Releases (Specifically for the bottom section)
    const allPressItems = dynamicItems.filter(i => i.type === 'Press');

    // --- Filter Logic ---
    const filteredGallery = filter === "All"
        ? allGalleryItems
        : allGalleryItems.filter(item => item.type === filter);

    return (
        <div className="min-h-screen bg-background flex flex-col">

            <main className="flex-1 pb-12">
                {/* Hero Section */}
                <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden mb-0">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt="University of Lucknow"
                            className="w-full h-full object-cover object-[center_20%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
                    </div>
                    <div className="container-narrow text-center relative z-10 pt-8 md:pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Media & Content</span>
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 tracking-tight">
                                Campus <span className="text-gold-gradient">Chronicles</span>
                            </h1>
                            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                                Capturing moments of excellence, innovation, and success. Explore our journey through photos, videos, and press coverage.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="container-narrow space-y-12 mt-8">

                    {/* Photo Gallery with Filters */}
                    <section>
                        <div className="flex flex-col items-center text-center mb-12 gap-6">
                            <div>
                                <span className="text-xs font-medium text-accent uppercase tracking-wider">Visual Tour</span>
                                <h2 className="font-serif text-3xl font-semibold flex items-center justify-center gap-2 mt-2">
                                    <Camera className="w-6 h-6 text-accent" /> Photo Gallery
                                </h2>
                                <p className="text-muted-foreground mt-2">Highlights from recent campus activities.</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {["All", "Drives", "Events", "Seminars", "Star Performers"].map((cat) => (
                                    <Button
                                        key={cat}
                                        variant={filter === cat ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setFilter(cat)}
                                        className="rounded-full"
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredGallery.length === 0 ? (
                                <div className="col-span-full text-center py-12 text-muted-foreground">
                                    No items found.
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {filteredGallery.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer"
                                            onClick={() => setSelectedItem(item)}
                                        >
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${["Higher Education Opportunities", "Jaro Education Placement Drive"].some(t => item.title.includes(t))
                                                        ? 'object-[50%_65%]'
                                                        : ["Learning Routes Placement Drive", "Smart India Hackathon 2025", "TPC Student Coordinator Meeting", "Samsung Innovation Campus Program"].some(t => item.title.includes(t))
                                                            ? 'object-[50%_35%]'
                                                            : ''
                                                        }`}
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" /> {item.date}
                                                    </span>
                                                </div>
                                                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>
                    </section>

                    {/* Press Release Section */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">In The News</span>
                            <h2 className="font-serif text-3xl font-semibold flex items-center justify-center gap-2 mt-2">
                                <Newspaper className="w-6 h-6 text-accent" /> Press Releases
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {allPressItems.length === 0 ? (
                                <div className="col-span-full text-center py-12 text-muted-foreground">
                                    No press releases found.
                                </div>
                            ) : (
                                allPressItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer"
                                        onClick={() => setSelectedItem({ ...item, type: "Press" })}
                                    >
                                        <div className="aspect-video overflow-hidden">
                                            <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" /> {item.date}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>


                </div>
            </main>

            {/* Modal for Details */}
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
                            className="relative max-w-6xl w-full bg-card rounded-2xl shadow-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Part */}
                            <div className="w-full md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        // Fallback for broken images
                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                                    }}
                                />
                            </div>

                            {/* Info Part */}
                            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center bg-card border-l border-border/50">
                                <div className="mb-6">
                                    <Badge variant="outline" className="text-xs uppercase tracking-widest border-accent/30 text-accent mb-4">
                                        {selectedItem.type}
                                    </Badge>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight mb-3">
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
                                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                        {selectedItem.summary || "No description available."}
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

            <Footer />
        </div>
    );
};

export default Media;