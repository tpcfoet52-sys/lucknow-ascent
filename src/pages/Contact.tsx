import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Building2, ChevronDown, Phone, MapPin, Train, Car, Users } from "lucide-react";
import ConnectWithUs from "@/components/ConnectWithUs";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import heroImage from "@/assets/university-hero-new.jpg";

// Social Media Screenshots
import socialLinkedin from "@/assets/social-linkedin.jpg";
import socialTwitter from "@/assets/social-twitter.png";
import socialInstagram from "@/assets/social-instagram.jpg";


const Contact = () => {
    const [openTPO, setOpenTPO] = useState<string[]>([]);

    const toggleTPO = (id: string) => {
        setOpenTPO(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };

    const [openRoute, setOpenRoute] = useState<string | null>(null);

    const toggleRoute = (id: string) => {
        setOpenRoute(openRoute === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <PageBackground />

            <main className="flex-grow relative z-10">
                {/* Hero Section */}
                <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
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
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Get In Touch</span>
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 tracking-tight">
                                Contact <span className="text-gold-gradient">Us</span>
                            </h1>
                            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Have questions about placements, training programs, or recruitment? We're here to help.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Coordinators & Connect Section */}
                <section className="section-padding bg-background">
                    <div className="container-narrow">


                        {/* Social Networks - Horizontal Layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="text-center mb-8">
                                <span className="text-accent font-medium text-sm uppercase tracking-wider">Follow Us</span>
                                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2 flex items-center justify-center gap-2">
                                    Social <span className="text-gold-gradient">Networks</span>
                                </h3>
                                <p className="text-muted-foreground mt-3">Stay connected with our latest updates and announcements.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {/* LinkedIn */}
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://www.linkedin.com/in/tpcfoet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all hover:shadow-md group shadow-sm"
                                >
                                    <div className="p-4 border-b border-border flex flex-col items-center justify-center text-center gap-1">
                                        <p className="font-semibold text-sm text-foreground flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            LinkedIn
                                        </p>
                                        <span className="text-xs text-muted-foreground">12,578 followers</span>
                                    </div>
                                    <div className="h-28 overflow-hidden bg-primary/5">
                                        <img
                                            src={socialLinkedin}
                                            alt="TPC LinkedIn Profile"
                                            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                                        />
                                    </div>
                                </motion.a>

                                {/* Twitter/X */}
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://x.com/PlacementEnggLU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all hover:shadow-md group shadow-sm"
                                >
                                    <div className="p-4 border-b border-border flex flex-col items-center justify-center text-center gap-1">
                                        <p className="font-semibold text-sm text-foreground flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                            </svg>
                                            Twitter / X
                                        </p>
                                        <span className="text-xs text-muted-foreground">2,967 followers</span>
                                    </div>
                                    <div className="h-28 overflow-hidden bg-primary/5">
                                        <img
                                            src={socialTwitter}
                                            alt="TPC Twitter/X Profile"
                                            className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                                        />
                                    </div>
                                </motion.a>

                                {/* Instagram */}
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://www.instagram.com/tpcfoet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all hover:shadow-md group shadow-sm"
                                >
                                    <div className="p-4 border-b border-border flex flex-col items-center justify-center text-center gap-1">
                                        <p className="font-semibold text-sm text-foreground flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                            Instagram
                                        </p>
                                        <span className="text-xs text-muted-foreground">698 followers</span>
                                    </div>
                                    <div className="h-28 overflow-hidden bg-primary/5">
                                        <img
                                            src={socialInstagram}
                                            alt="TPC Instagram Profile"
                                            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                                        />
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* TPO Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12"
                        >
                            <div className="text-center mb-8">
                                <span className="text-accent font-medium text-sm uppercase tracking-wider">Team</span>
                                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2 flex items-center justify-center gap-2">
                                    Connect With <span className="text-gold-gradient">Us</span>
                                </h3>
                                <p className="text-muted-foreground mt-3">Reach out to our placement team for assistance.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 items-start">
                                {/* Training & Placement Cell Incharge */}
                                <div className="border border-border rounded-xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => toggleTPO('tpo')}
                                        className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-sm font-semibold text-accent">HP</span>
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-sm text-foreground">Dr. Himanshu Pandey</p>
                                                <p className="text-xs text-accent">Training & Placement Cell Incharge</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openTPO.includes('tpo') ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openTPO.includes('tpo') && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-2 bg-muted/30 border-t border-border">
                                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                        <a href="tel:+917905287870" className="hover:text-accent transition-colors flex items-center gap-1">
                                                            <Phone className="w-3 h-3" /> +91-79052 87870
                                                        </a>
                                                        <div className="flex items-center gap-4">
                                                            <a href="https://www.linkedin.com/in/himanshu-pandey-272a55ab/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors flex items-center gap-1">
                                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                                </svg>
                                                            </a>
                                                            <a href="https://x.com/hpandey010" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
                                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Student Coordinators */}
                                <div className="border border-border rounded-xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => toggleTPO('student')}
                                        className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-sm font-semibold text-accent">SC</span>
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-sm text-foreground">Student Coordinators</p>
                                                <p className="text-xs text-accent">3 Members</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openTPO.includes('student') ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openTPO.includes('student') && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-2 bg-muted/30 border-t border-border">
                                                    <div className="space-y-3">
                                                        {/* Riddhi Singh */}
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-foreground">Riddhi Singh</span>
                                                            <div className="flex items-center gap-3">
                                                                <a href="tel:+917310324848" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 tabular-nums">
                                                                    <Phone className="w-3 h-3" /> <span>+91 73103 24848</span>
                                                                </a>
                                                                <a href="https://www.linkedin.com/in/riddhi-singh-rathore-997b962aa/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        {/* Aryan Tripathi */}
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-foreground">Aryan Tripathi</span>
                                                            <div className="flex items-center gap-3">
                                                                <a href="tel:+916392469229" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 tabular-nums">
                                                                    <Phone className="w-3 h-3" /> <span>+91 63924 69229</span>
                                                                </a>
                                                                <a href="https://www.linkedin.com/in/aryan-tripathi-45346a254/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        {/* Abhinav Singh */}
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-foreground">Abhinav Singh</span>
                                                            <div className="flex items-center gap-3">
                                                                <a href="tel:+918112910276" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 tabular-nums">
                                                                    <Phone className="w-3 h-3" /> <span>+91 81129 10276</span>
                                                                </a>
                                                                <a href="https://www.linkedin.com/in/abhinavatwork/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Location & Directions Section - Map + Best Route */}
                <section className="section-padding bg-muted/20">
                    <div className="container-narrow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Location & Directions</span>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                                How To <span className="text-gold-gradient">Reach Us?</span>
                            </h2>
                            <p className="text-muted-foreground mt-3 text-sm md:text-base flex items-center justify-center gap-2 max-w-4xl mx-auto">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0" /> WWHQ+JC7, Training & Placement Cell, Faculty of Engineering & Technology University of Lucknow, New Campus Rd, Sultanpur Village, Jankipuram Extension, Lucknow, Uttar Pradesh 226031
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Map Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[400px] lg:min-h-[500px] transition-all duration-300 hover:shadow-md hover:border-accent/30"
                            >
                                <iframe
                                    src="https://maps.google.com/maps?q=WWHQ%2BJC7%2C+Training+%26+Placement+Cell%2C+Faculty+of+Engineering+%26+Technology+University+of+Lucknow%2C+New+Campus+Rd%2C+Sultanpur+Village%2C+Jankipuram+Extension%2C+Lucknow%2C+Uttar+Pradesh+226031&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Training & Placement Cell Location"
                                ></iframe>
                            </motion.div>

                            {/* Best Route - Stacked Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-4"
                            >
                                <h3 className="font-semibold text-lg text-gold-gradient text-center">Best Route</h3>

                                {/* By Metro */}
                                <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                    <button
                                        onClick={() => toggleRoute('metro')}
                                        className="w-full flex items-center justify-between p-4 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Train className="w-4 h-4 text-primary" />
                                            </div>
                                            <h4 className="font-semibold text-sm text-foreground">By Metro</h4>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${openRoute === 'metro' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openRoute === 'metro' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-4 pb-4 pt-0">
                                                    <p className="text-muted-foreground text-xs leading-relaxed pl-[44px]">
                                                        Take the Lucknow Metro (Red Line) → <span className="font-medium text-foreground">IT College</span> or <span className="font-medium text-foreground">Vishwavidyalaya</span> station → e-rickshaw/auto to New Campus (10–15 min).
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* By Train (from Charbagh) */}
                                <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                    <button
                                        onClick={() => toggleRoute('train')}
                                        className="w-full flex items-center justify-between p-4 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Train className="w-4 h-4 text-primary" />
                                            </div>
                                            <h4 className="font-semibold text-sm text-foreground">By Train (from Charbagh)</h4>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${openRoute === 'train' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openRoute === 'train' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-4 pb-4 pt-0">
                                                    <div className="text-muted-foreground text-xs leading-relaxed space-y-1 pl-[44px]">
                                                        <p className="font-medium text-foreground">Charbagh Railway Station → LU New Campus</p>
                                                        <p>From Charbagh, take the Metro (Red Line) towards <span className="font-medium text-foreground">IT College</span>.</p>
                                                        <p>Get down at <span className="font-medium text-foreground">IT College</span> or <span className="font-medium text-foreground">Vishwavidyalaya</span>.</p>
                                                        <p>Take an e-rickshaw/auto to <span className="font-medium text-foreground">"Lucknow University New Campus, Jankipuram Extension"</span>.</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* By Cab */}
                                <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                    <button
                                        onClick={() => toggleRoute('cab')}
                                        className="w-full flex items-center justify-between p-4 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Car className="w-4 h-4 text-primary" />
                                            </div>
                                            <h4 className="font-semibold text-sm text-foreground">By Cab</h4>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${openRoute === 'cab' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openRoute === 'cab' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-4 pb-4 pt-0">
                                                    <p className="text-muted-foreground text-xs leading-relaxed pl-[44px]">
                                                        Book <span className="font-medium text-foreground">Ola/Uber</span> → Enter: <span className="font-medium text-foreground">"Lucknow University New Campus, Jankipuram Extension"</span> → Main gate drop.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Office Info */}
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-muted/50 border border-border rounded-xl p-3 flex flex-col items-start justify-start text-left transition-all duration-300 hover:shadow-md hover:border-accent/30"
                                    >
                                        <div className="flex flex-col items-start justify-start gap-1 mb-1">
                                            <Building2 className="h-4 w-4 text-primary" />
                                            <span className="font-semibold text-xs text-foreground">Office</span>
                                        </div>
                                        <p className="text-muted-foreground text-xs text-left">TPC Office, FoET Building</p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-muted/50 border border-border rounded-xl p-3 flex flex-col items-start justify-start text-left transition-all duration-300 hover:shadow-md hover:border-accent/30"
                                    >
                                        <div className="flex flex-col items-start justify-start gap-1 mb-1">
                                            <Clock className="h-4 w-4 text-accent" />
                                            <span className="font-semibold text-xs text-foreground">Hours</span>
                                        </div>
                                        <p className="text-muted-foreground text-xs text-left">Mon-Fri: 10AM-5PM • Sat: 10AM-2PM</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Connect With Us Section */}
                <ConnectWithUs />
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
