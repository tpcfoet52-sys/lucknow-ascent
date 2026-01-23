import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Calendar, ExternalLink, Camera, Video, Newspaper, Share2, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import heroImage from "@/assets/university-hero.jpg";
import uolLogo from "@/assets/uol-logo.png";

// Placeholder data for Gallery
const galleryItems = [
    { id: 1, type: "Workshops", src: heroImage, title: "AI & ML Workshop", date: "Jan 15, 2024" },
    { id: 2, type: "Drives", src: heroImage, title: "TCS Recruitment Drive", date: "Dec 10, 2023" },
    { id: 3, type: "Seminars", src: heroImage, title: "Industry Connect: Tech Mahindra", date: "Nov 22, 2023" },
    { id: 4, type: "Workshops", src: heroImage, title: "Soft Skills Training Session", date: "Oct 05, 2023" },
    { id: 5, type: "Drives", src: heroImage, title: "Infosys Campus Visit", date: "Sep 18, 2023" },
    { id: 6, type: "Achievements", src: heroImage, title: "Top Coders Award Ceremony", date: "Aug 30, 2023" },
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

    const filteredGallery = filter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.type === filter);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-12">
                <div className="container-narrow mb-8">
                    <Link to="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 bg-card hover:bg-accent hover:text-accent-foreground border border-border/50 shadow-elevated-sm transition-all duration-300 h-9 px-4 rounded-md"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Button>
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="bg-secondary/30 py-12 md:py-20 border-b border-border/50 mb-12">
                    <div className="container-narrow text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Media & Content</span>
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
                                {["All", "Drives", "Workshops", "Seminars", "Achievements"].map((cat) => (
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
                                        className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card"
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

                    {/* Video Gallery */}
                    <section>
                        <h2 className="font-serif text-3xl font-semibold mb-8 flex items-center gap-2">
                            <Video className="w-6 h-6 text-red-500" /> Featured Videos
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="overflow-hidden border-border/50 shadow-md">
                                <div className="aspect-video bg-black relative flex items-center justify-center group cursor-pointer">
                                    <img src={heroImage} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                                            <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-semibold mb-1">Recruiter Talk: Why We Hire from FoET</h3>
                                    <p className="text-sm text-muted-foreground">Hear from HR leaders about the quality of talent at University of Lucknow.</p>
                                </CardContent>
                            </Card>

                            <div className="space-y-4">
                                {[1, 2, 3].map((v) => (
                                    <div key={v} className="flex gap-4 items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
                                        <div className="w-32 h-20 bg-muted rounded-md flex-shrink-0 relative overflow-hidden">
                                            <img src={heroImage} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                                <Play className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm text-foreground line-clamp-2">Student Testimonial: Transforming Careers {v}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* News & Events Grid */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* News */}
                        <div className="lg:col-span-2">
                            <h2 className="font-serif text-3xl font-semibold mb-6 flex items-center gap-2">
                                <Newspaper className="w-6 h-6 text-accent" /> In the News
                            </h2>
                            <div className="space-y-4">
                                {newsItems.map((news) => (
                                    <Card key={news.id} className="hover:border-accent/50 transition-colors">
                                        <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                            <div>
                                                <Badge variant="outline" className="mb-2 text-xs">{news.source}</Badge>
                                                <h3 className="font-semibold text-lg hover:underline decoration-accent/50 underline-offset-4 cursor-pointer">{news.title}</h3>
                                                <p className="text-sm text-muted-foreground mt-1">{news.date}</p>
                                            </div>
                                            <Button variant="ghost" size="sm" className="shrink-0 gap-1 text-accent">
                                                Read More <ExternalLink className="w-3 h-3" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Event Highlights (Sidebar style) */}
                        <div>
                            <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-accent" /> Upcoming Events
                            </h2>
                            <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                                <div className="space-y-6">
                                    {eventHighlights.map((event) => (
                                        <div key={event.id} className="border-b border-border/50 last:border-0 pb-6 last:pb-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="bg-background border border-border rounded px-2 py-1 text-center min-w-[3rem]">
                                                    <span className="block text-xs font-bold text-accent uppercase">{event.date.split(" ")[0]}</span>
                                                    <span className="block text-lg font-bold leading-none">{event.date.split(" ")[1].replace(",", "")}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm">{event.title}</h4>
                                                    <p className="text-xs text-muted-foreground">{event.location}</p>
                                                </div>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{event.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-6 text-xs">View All Events</Button>
                            </div>

                            {/* Social Media Embed Placeholder */}
                            <div className="mt-8">
                                <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <Share2 className="w-4 h-4" /> Connect with Us
                                </h3>
                                <div className="flex gap-4">
                                    <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent/10 hover:text-accent transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent/10 hover:text-accent transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent/10 hover:text-accent transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent/10 hover:text-accent transition-colors">
                                        <Facebook className="w-5 h-5" />
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
            </main>

            <Footer />
        </div>
    );
};

export default Media;
