import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Calendar, ExternalLink, Camera, Video, Newspaper, Share2, Instagram, Linkedin, Mail, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConnectWithUs from "@/components/ConnectWithUs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import heroImage from "@/assets/university-hero-new.jpg";
import uolLogo from "@/assets/uol-logo.png";
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

// Placeholder data for Gallery
const galleryItems = [
    {
        id: 101,
        type: "Events",
        src: smartIndiaHackathon,
        title: "Smart India Hackathon 2025",
        date: "Jan 26, 2025",
        summary: "Our students showcased exceptional talent at SIH 2025, solving real-world challenges with innovative digital solutions. The event fostered a spirit of entrepreneurship and technical excellence among participants, with several teams receiving commendations from industry экспертs."
    },
    {
        id: 102,
        type: "Events",
        src: samsungInnovation,
        title: "Samsung Innovation Campus Program",
        date: "Jan 26, 2025",
        summary: "The Samsung Innovation Campus program continues to bridge the gap between academia and industry. Through specialized training in AI, Data Science, and IoT, our students are gaining the future-ready skills required for the global tech landscape."
    },
    {
        id: 8,
        type: "Events",
        src: tpcMeeting,
        title: "TPC Student Coordinator Meeting",
        date: "Jan 26, 2024",
        summary: "A strategic session held with our dedicated student coordinators to plan the upcoming recruitment season. The meeting focused on enhancing student outreach, improving drive coordination, and refining the placement process at FoET."
    },
    {
        id: 9,
        type: "Drives",
        src: learningRoutesDrive,
        title: "Learning Routes Placement Drive",
        date: "Jan 26, 2025",
        summary: "Learning Routes visited our campus for an extensive hiring drive for Sales and Business Development roles. The session included a pre-placement talk, group discussions, and multiple rounds of interviews, resulting in several successful placements."
    },
    {
        id: 10,
        type: "Drives",
        src: jaroEducationDrive,
        title: "Jaro Education Placement Drive",
        date: "Jan 26, 2025",
        summary: "Jaro Education conducted a successful recruitment drive, offering competitive packages for Career Development roles. Their team expressed high satisfaction with the quality of candidates and the overall infrastructure provided by the university."
    },
    {
        id: 11,
        type: "Drives",
        src: rupeekVirtualDrive,
        title: "Rupeek Virtual Drive",
        date: "Jan 26, 2025",
        summary: "A virtual recruitment drive conducted by Rupeek, enabling students to participate from their convenience. The digital process was seamlessly managed through our online placement portal, ensuring a smooth experience for both recruiters and candidates."
    },
    {
        id: 12,
        type: "Drives",
        src: planetsparkVirtualDrive,
        title: "Planetspark Virtual Placement Drive",
        date: "Jan 26, 2025",
        summary: "PlanetSpark hosted a virtual drive focusing on roles in business development and creative content. The interactive session allowed students to demonstrate their communication skills and creative thinking through various online assessments."
    },
    {
        id: 13,
        type: "Seminars",
        src: higherEducationSeminar,
        title: "Higher Education Opportunities",
        date: "Jan 26, 2025",
        summary: "An insightful seminar conducted by industry experts and academic consultants about global higher education pathways. Students learned about test preparation, scholarships, and the application process for top-tier universities worldwide."
    },
    {
        id: 14,
        type: "Achievements",
        src: sotiAchievement,
        title: "SOTI Selects Students (7.5 LPA)",
        date: "Jan 26, 2025",
        summary: "Proud moment for FoET as SOTI recruited several of our talented students with an impressive package of 7.5 LPA. This achievement highlights the technical competence and industry-readiness of our students."
    },
    {
        id: 15,
        type: "Achievements",
        src: starPerformerNovember,
        title: "Star Performer - November 2025",
        date: "Nov 2025",
        summary: "Recognizing outstanding contributions and performance within our student community. These awards inspire others to excel in their academic and professional pursuits throughout the year."
    },
    {
        id: 16,
        type: "Achievements",
        src: planetsparkAchievement,
        title: "PlanetSpark Selects Students (6.50 LPA)",
        date: "Jan 26, 2025",
        summary: "Success continues with multiple students being selected by PlanetSpark for high-growth roles. This reflects our consistent efforts in maintaining strong corporate relations and providing quality career opportunities."
    },
];

const newsItems = [
    { id: 1, source: "Times of India", title: "University of Lucknow sets new placement record", date: "Jan 20, 2024", link: "#" },
    { id: 2, source: "Hindustan Times", title: "FoET students shine in National Hackathon", date: "Dec 15, 2023", link: "#" },
    { id: 3, source: "Education Weekly", title: "New partnership announced with Microsoft", date: "Nov 10, 2023", link: "#" },
];

const eventHighlights = [
    { id: 1, title: "Annual Job Fair 2024", date: "Feb 15, 2024", location: "Main Auditorium", desc: "Over 50 companies participating." },
    { id: 2, title: "Alumni Meet", date: "Mar 10, 2024", location: "Conference Hall", desc: "Networking session with distinguished alumni." },
];

const Media = () => {
    const [filter, setFilter] = useState("All");
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    const pressItems = [
        { id: 1, src: luInNews, title: "University of Lucknow sets new placement record", date: "Jan 20, 2024", summary: "Coverage of FoET's record-breaking placement season in leading national dailies." },
        { id: 2, src: luInNews, title: "FoET students shine in National Hackathon", date: "Dec 15, 2023", summary: "Highlighting the achievements of our students at the prestigious National Hackathon." },
        { id: 3, src: luInNews, title: "New partnership announced with Microsoft", date: "Nov 10, 2023", summary: "Announcement of a landmark collaboration between our university and Microsoft for skill development." },
    ];

    const filteredGallery = filter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.type === filter);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-12">

                {/* Hero Section */}
                <section className="relative py-12 md:py-20 mb-12">
                    <div className="container-narrow text-center relative">


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
                            {pressItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer"
                                    onClick={() => setSelectedItem({ ...item, type: "Press" } as any)}
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

                    {/* News & Connect Grid */}
                    <div className="space-y-12">
                        {/* News */}

                        {/* Connect with Us (Horizontal) */}
                        <ConnectWithUs />


                    </div>

                </div>
            </main >
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
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-foreground/70 hover:text-foreground rounded-full transition-all duration-200 z-50 group"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div >
    );
};

export default Media;
