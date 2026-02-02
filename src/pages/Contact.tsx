import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Building2, ChevronDown, Phone, Smartphone, MapPin, Train, Car } from "lucide-react";
import ConnectWithUs from "@/components/ConnectWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Social Media Screenshots
import socialLinkedin from "@/assets/social-linkedin.jpg";
import socialTwitter from "@/assets/social-twitter.png";
import socialInstagram from "@/assets/social-instagram.jpg";


const Contact = () => {
    const [openTPO, setOpenTPO] = useState<string | null>(null);

    const toggleTPO = (id: string) => {
        setOpenTPO(openTPO === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section className="section-padding bg-muted/30">
                    <div className="container-narrow text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">Get In Touch</span>
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2 mb-4">
                                Contact Us
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Have questions about placements, training programs, or recruitment? We're here to help.
                            </p>
                        </motion.div>
                    </div>
                </section>


                {/* Coordinators & Connect Section */}
                <section className="section-padding bg-muted/30">
                    <div className="container-narrow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">Get Connected</span>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                                Coordinators & Connect
                            </h2>
                        </motion.div>

                        {/* Social Networks - Horizontal Layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                <Smartphone className="w-5 h-5 text-accent" /> Social Networks
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/training-and-placement-cell-foet-university-of-lucknow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card border border-border rounded-xl overflow-hidden hover:border-[#0A66C2]/50 transition-all hover:shadow-lg group"
                                >
                                    <div className="p-3 border-b border-border flex items-center justify-between">
                                        <p className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[#0A66C2] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            LinkedIn
                                        </p>
                                        <span className="text-xs text-muted-foreground">12,578 followers</span>
                                    </div>
                                    <div className="h-28 overflow-hidden bg-[#0A66C2]/5">
                                        <img
                                            src={socialLinkedin}
                                            alt="TPC LinkedIn Profile"
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </a>

                                {/* Twitter/X */}
                                <a
                                    href="https://x.com/PlacementEnggLU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/30 transition-all hover:shadow-lg group"
                                >
                                    <div className="p-3 border-b border-border flex items-center justify-between">
                                        <p className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                            </svg>
                                            Twitter / X
                                        </p>
                                        <span className="text-xs text-muted-foreground">2,967 followers</span>
                                    </div>
                                    <div className="h-28 overflow-hidden bg-foreground/5">
                                        <img
                                            src={socialTwitter}
                                            alt="TPC Twitter/X Profile"
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/tpcfoet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card border border-border rounded-xl overflow-hidden hover:border-pink-500/50 transition-all hover:shadow-lg group"
                                >
                                    <div className="p-3 border-b border-border flex items-center justify-between">
                                        <p className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <svg className="w-4 h-4 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                            Instagram
                                        </p>
                                        <span className="text-xs text-muted-foreground">698 followers</span>
                                    </div>
                                    <div className="h-28 overflow-hidden bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5">
                                        <img
                                            src={socialInstagram}
                                            alt="TPC Instagram Profile"
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* TPO Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                <span>👥</span> Connect With Us
                            </h3>
                            <div className="space-y-2">
                                {/* Training & Placement Cell Incharge */}
                                <div className="border border-border rounded-lg overflow-hidden">
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
                                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openTPO === 'tpo' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openTPO === 'tpo' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-2 bg-muted/30 border-t border-border">
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                                        <a href="tel:+917905287870" className="hover:text-accent transition-colors flex items-center gap-1">
                                                            <Phone className="w-3 h-3" /> +91-79052 87870
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/himanshu-pandey-272a55ab/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                            </svg>
                                                            LinkedIn
                                                        </a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Student Coordinators */}
                                <div className="border border-border rounded-lg overflow-hidden">
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
                                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openTPO === 'student' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openTPO === 'student' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-2 bg-muted/30 border-t border-border">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm text-foreground font-medium">Riddhi Singh</span>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <a href="tel:+917310324848" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
                                                                    <Phone className="w-3 h-3" /> +91 73103 24848
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
                                                            <span className="text-sm text-foreground">Aryan Tripathi</span>
                                                            <div className="flex items-center gap-3">
                                                                <a href="tel:+916392469229" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
                                                                    <Phone className="w-3 h-3" /> +91 63924 69229
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
                                                            <span className="text-sm text-foreground">Abhinav Singh</span>
                                                            <div className="flex items-center gap-3">
                                                                <a href="tel:+918112910276" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
                                                                    <Phone className="w-3 h-3" /> +91 81129 10276
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

                {/* Connect With Us Section */}
                <ConnectWithUs />

                {/* Location & Directions Section - Map + Best Route */}
                <section className="section-padding">
                    <div className="container-narrow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">Location & Directions</span>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                                How To Reach Us?
                            </h2>
                            <p className="text-muted-foreground mt-2 text-sm flex items-center justify-center gap-1">
                                <MapPin className="w-4 h-4 text-accent" /> Lucknow University New Campus, Sultanpur Village, Jankipuram Extension, Lucknow – 226021
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Map Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[400px] lg:min-h-[500px]"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4558!2d80.9397!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37d0fa0b26d%3A0x1f16a3e7d8d7f8!2sTraining%20%26%20Placement%20Cell%2C%20Faculty%20of%20Engineering%20%26%20Technology%2C%20University%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-4"
                            >
                                <h3 className="font-semibold text-lg text-foreground">Best Route</h3>

                                {/* By Metro */}
                                <div className="bg-card border border-border rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                            <Train className="w-4 h-4 text-red-600" />
                                        </div>
                                        <h4 className="font-semibold text-sm text-foreground">By Metro</h4>
                                    </div>
                                    <p className="text-muted-foreground text-xs leading-relaxed pl-11">
                                        Take the Lucknow Metro (Red Line) → <span className="font-medium text-foreground">IT College</span> or <span className="font-medium text-foreground">Vishwavidyalaya</span> station → e-rickshaw/auto to New Campus (10–15 min).
                                    </p>
                                </div>

                                {/* By Train (from Charbagh) */}
                                <div className="bg-card border border-border rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                            <Train className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <h4 className="font-semibold text-sm text-foreground">By Train (from Charbagh)</h4>
                                    </div>
                                    <div className="text-muted-foreground text-xs leading-relaxed pl-11 space-y-1">
                                        <p className="font-medium text-foreground">Charbagh Railway Station → LU New Campus</p>
                                        <p>From Charbagh, take the Metro (Red Line) towards <span className="font-medium text-foreground">IT College</span>.</p>
                                        <p>Get down at <span className="font-medium text-foreground">IT College</span> or <span className="font-medium text-foreground">Vishwavidyalaya</span>.</p>
                                        <p>Take an e-rickshaw/auto to <span className="font-medium text-foreground">"Lucknow University New Campus, Jankipuram Extension"</span>.</p>
                                    </div>
                                </div>

                                {/* By Cab */}
                                <div className="bg-card border border-border rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                            <Car className="w-4 h-4 text-green-600" />
                                        </div>
                                        <h4 className="font-semibold text-sm text-foreground">By Cab</h4>
                                    </div>
                                    <p className="text-muted-foreground text-xs leading-relaxed pl-11">
                                        Book <span className="font-medium text-foreground">Ola/Uber</span> → Enter: <span className="font-medium text-foreground">"Lucknow University New Campus, Jankipuram Extension"</span> → Main gate drop.
                                    </p>
                                </div>

                                {/* Office Info */}
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    <div className="bg-muted/50 border border-border rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Building2 className="h-4 w-4 text-primary" />
                                            <span className="font-semibold text-xs text-foreground">Office</span>
                                        </div>
                                        <p className="text-muted-foreground text-xs">TPC Office, FoET Building</p>
                                    </div>
                                    <div className="bg-muted/50 border border-border rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Clock className="h-4 w-4 text-accent" />
                                            <span className="font-semibold text-xs text-foreground">Hours</span>
                                        </div>
                                        <p className="text-muted-foreground text-xs">Mon-Fri: 10AM-5PM • Sat: 10AM-2PM</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Contact;
