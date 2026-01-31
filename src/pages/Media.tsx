import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Camera, Newspaper, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConnectWithUs from "@/components/ConnectWithUs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

// --- Assets ---
import heroImage from "@/assets/university-hero-new.jpg";
import luInNews from "@/assets/lu-in-news.jpg";
import tpcMeeting from "@/assets/tpc-meeting.jpg";
import learningRoutesDrive from "@/assets/learning-routes-drive.jpg";
import jaroEducationDrive from "@/assets/jaro-education-drive-v2.jpg";
import higherEducationSeminar from "@/assets/higher-education-seminar.jpg";
import sotiAchievement from "@/assets/soti-achievement.jpg";
import samsungInnovation from "@/assets/samsung-innovation-campus.jpg";
import smartIndiaHackathon from "@/assets/smart-india-hackathon.jpg";
import starPerformerNovember from "@/assets/star-performer-november.jpg";
import planetsparkAchievement from "@/assets/planetspark-achievement.jpg";
import rupeekVirtualDrive from "@/assets/rupeek-virtual-drive.jpg";
import planetsparkVirtualDrive from "@/assets/planetspark-virtual-drive.jpg";

// --- Static Data (Placeholders) ---
const staticGalleryItems = [
    {
        id: "static-101",
        type: "Events",
        src: smartIndiaHackathon,
        title: "Smart India Hackathon 2025",
        date: "Jan 26, 2025",
        summary: "Our students showcased exceptional talent at SIH 2025, solving real-world challenges with innovative digital solutions."
    },
    {
        id: "static-102",
        type: "Events",
        src: samsungInnovation,
        title: "Samsung Innovation Campus Program",
        date: "Jan 26, 2025",
        summary: "The Samsung Innovation Campus program continues to bridge the gap between academia and industry."
    },
    {
        id: "static-8",
        type: "Events",
        src: tpcMeeting,
        title: "TPC Student Coordinator Meeting",
        date: "Jan 26, 2024",
        summary: "A strategic session held with our dedicated student coordinators to plan the upcoming recruitment season."
    },
    {
        id: "static-9",
        type: "Drives",
        src: learningRoutesDrive,
        title: "Learning Routes Placement Drive",
        date: "Jan 26, 2025",
        summary: "Learning Routes visited our campus for an extensive hiring drive for Sales and Business Development roles."
    },
    {
        id: "static-10",
        type: "Drives",
        src: jaroEducationDrive,
        title: "Jaro Education Placement Drive",
        date: "Jan 26, 2025",
        summary: "Jaro Education conducted a successful recruitment drive, offering competitive packages for Career Development roles."
    },
    {
        id: "static-11",
        type: "Drives",
        src: rupeekVirtualDrive,
        title: "Rupeek Virtual Drive",
        date: "Jan 26, 2025",
        summary: "A virtual recruitment drive conducted by Rupeek, enabling students to participate from their convenience."
    },
    {
        id: "static-12",
        type: "Drives",
        src: planetsparkVirtualDrive,
        title: "Planetspark Virtual Placement Drive",
        date: "Jan 26, 2025",
        summary: "PlanetSpark hosted a virtual drive focusing on roles in business development and creative content."
    },
    {
        id: "static-13",
        type: "Seminars",
        src: higherEducationSeminar,
        title: "Higher Education Opportunities",
        date: "Jan 26, 2025",
        summary: "An insightful seminar conducted by industry experts and academic consultants about global higher education pathways."
    },
    {
        id: "static-14",
        type: "Achievements",
        src: sotiAchievement,
        title: "SOTI Selects Students (7.5 LPA)",
        date: "Jan 26, 2025",
        summary: "Proud moment for FoET as SOTI recruited several of our talented students with an impressive package of 7.5 LPA."
    },
    {
        id: "static-15",
        type: "Achievements",
        src: starPerformerNovember,
        title: "Star Performer - November 2025",
        date: "Nov 2025",
        summary: "Recognizing outstanding contributions and performance within our student community."
    },
    {
        id: "static-16",
        type: "Achievements",
        src: planetsparkAchievement,
        title: "PlanetSpark Selects Students (6.50 LPA)",
        date: "Jan 26, 2025",
        summary: "Success continues with multiple students being selected by PlanetSpark for high-growth roles."
    },
];

const staticPressItems = [
    { id: "press-1", src: luInNews, title: "University of Lucknow sets new placement record", date: "Jan 20, 2024", summary: "Coverage of FoET's record-breaking placement season in leading national dailies." },
    { id: "press-2", src: luInNews, title: "FoET students shine in National Hackathon", date: "Dec 15, 2023", summary: "Highlighting the achievements of our students at the prestigious National Hackathon." },
    { id: "press-3", src: luInNews, title: "New partnership announced with Microsoft", date: "Nov 10, 2023", summary: "Announcement of a landmark collaboration between our university and Microsoft for skill development." },
];

const Media = () => {
    const [filter, setFilter] = useState("All");
    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    const [dynamicItems, setDynamicItems] = useState<any[]>([]);

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
                    type: item.type === 'press_release' ? 'Press' :
                        item.type === 'achievement' ? 'Achievements' :
                            item.type === 'event' ? 'Events' : 'Gallery',
                    src: item.image_url,
                    title: item.title,
                    date: new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    summary: item.description
                }));
                setDynamicItems(formattedItems);
            }
        };

        fetchApprovedMedia();
    }, []);

    // --- Merge Data ---
    // 1. Photo Gallery (Events, Achievements, Drives, etc.)
    const allGalleryItems = [...dynamicItems.filter(i => i.type !== 'Press'), ...staticGalleryItems];

    // 2. Press Releases (Specifically for the bottom section)
    const allPressItems = [...dynamicItems.filter(i => i.type === 'Press'), ...staticPressItems];

    // --- Filter Logic ---
    const filteredGallery = filter === "All"
        ? allGalleryItems
        : allGalleryItems.filter(item => item.type === filter || (filter === "Events" && item.type === "Gallery"));

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 pb-12">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden mb-12">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt="University of Lucknow"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
                    </div>
                    <div className="container-narrow text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Media & Content</span>
                            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                                Campus <span className="text-gold-gradient">Chronicles</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Capturing moments of excellence, innovation, and success. Explore our journey through photos, videos, and press coverage.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="container-narrow space-y-20">

                    {/* Photo Gallery with Filters */}
                    <section>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                            <div>
                                <h2 className="font-serif text-3xl font-semibold flex items-center gap-2">
                                    <Camera className="w-6 h-6 text-accent" /> Photo Gallery
                                </h2>
                                <p className="text-muted-foreground mt-2">Highlights from recent campus activities.</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {["All", "Drives", "Events", "Seminars", "Achievements"].map((cat) => (
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
                                            <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        </div>
                    </section>

                    {/* Press Release Section */}
                    <section>
                        <h2 className="font-serif text-3xl font-semibold mb-8 flex items-center gap-2">
                            <Newspaper className="w-6 h-6 text-accent" /> Press Releases
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {allPressItems.map((item) => (
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
                            ))}
                        </div>
                    </section>

                    {/* Connect with Us (Horizontal) */}
                    <ConnectWithUs />
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

            <Footer />
        </div>
    );
};

export default Media;