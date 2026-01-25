import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Calendar, ExternalLink, Camera, Video, Newspaper, Share2, Instagram, Linkedin, Mail, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import heroImage from "@/assets/university-hero.jpg";
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
    { id: 101, type: "Events", src: smartIndiaHackathon, title: "Smart India Hackathon 2025", date: "Jan 26, 2025" },
    { id: 102, type: "Events", src: samsungInnovation, title: "Samsung Innovation Campus Program", date: "Jan 26, 2025" },


    { id: 8, type: "Events", src: tpcMeeting, title: "TPC Student Coordinator Meeting", date: "Jan 26, 2024" },
    { id: 9, type: "Drives", src: learningRoutesDrive, title: "Learning Routes Placement Drive", date: "Jan 26, 2025" },
    { id: 10, type: "Drives", src: jaroEducationDrive, title: "Jaro Education Placement Drive", date: "Jan 26, 2025" },
    { id: 11, type: "Drives", src: rupeekVirtualDrive, title: "Rupeek Virtual Drive", date: "Jan 26, 2025" },
    { id: 12, type: "Drives", src: planetsparkVirtualDrive, title: "Planetspark Virtual Placement Drive", date: "Jan 26, 2025" },
    { id: 13, type: "Seminars", src: higherEducationSeminar, title: "Higher Education Opportunities", date: "Jan 26, 2025" },
    { id: 14, type: "Achievements", src: sotiAchievement, title: "SOTI Selects Students (7.5 LPA)", date: "Jan 26, 2025" },
    { id: 15, type: "Achievements", src: starPerformerNovember, title: "Star Performer - November 2025", date: "Nov 2025" },
    { id: 16, type: "Achievements", src: planetsparkAchievement, title: "PlanetSpark Selects Students (6.50 LPA)", date: "Jan 26, 2025" },
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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const pressItems = [
        { id: 1, src: luInNews, title: "University of Lucknow sets new placement record", date: "Jan 20, 2024" },
        { id: 2, src: luInNews, title: "FoET students shine in National Hackathon", date: "Dec 15, 2023" },
        { id: 3, src: luInNews, title: "New partnership announced with Microsoft", date: "Nov 10, 2023" },
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
                                        onClick={() => setSelectedImage(item.src)}
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
                                <div key={item.id} className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer" onClick={() => setSelectedImage(item.src)}>
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
                        <div>
                            <h2 className="font-serif text-3xl font-semibold mb-6 flex items-center gap-2">
                                <Newspaper className="w-6 h-6 text-accent" /> In the News
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {newsItems.map((news) => (
                                    <Card key={news.id} className="hover:border-accent/50 transition-colors">
                                        <CardContent className="p-4">
                                            <Badge variant="outline" className="mb-2 text-xs">{news.source}</Badge>
                                            <h3 className="font-semibold text-lg hover:underline decoration-accent/50 underline-offset-4 cursor-pointer mb-2">{news.title}</h3>
                                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                                <span>{news.date}</span>
                                                <Button variant="ghost" size="sm" className="h-auto p-0 text-accent hover:text-accent/80">
                                                    Read More <ExternalLink className="w-3 h-3 ml-1" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Connect with Us (Horizontal) */}
                        <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                                        <Share2 className="w-5 h-5 text-accent" /> Connect with Us
                                    </h3>
                                    <p className="text-muted-foreground text-center md:text-left">
                                        Stay updated with the latest from the Training & Placement Cell.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/tpcfoet?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://x.com/PlacementEnggLU" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                        <X className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/tpcfoet?igsh=cm05d2NpbnRoNGNp" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="mailto:placement_foet@lkouniv.ac.in" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent/20 pattern-dots opacity-10"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-serif text-3xl font-semibold mb-4">Have moments to share?</h2>
                            <p className="text-primary-foreground/80 mb-8">
                                We love showcasing student achievements and campus life. If you have photos or videos from recent events, share them with our media team.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button variant="gold" size="lg">Submit Content</Button>
                                <Button variant="goldOutline" size="lg">Contact Media Team</Button>
                            </div>
                        </div>
                    </section>

                </div>
            </main >


            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-7xl w-full max-h-[95vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Full View"
                                className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
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
