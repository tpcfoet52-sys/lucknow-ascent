import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import ConnectWithUs from "@/components/ConnectWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Contact = () => {
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

                {/* How To Reach Us Section */}
                <section className="section-padding">
                    <div className="container-narrow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">Location</span>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                                How To Reach Us?
                            </h2>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            {/* Map Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-xl overflow-hidden border border-border shadow-sm h-[400px]"
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

                            {/* Address & Contact Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {/* Address Card */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Our Address</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                <span className="font-medium text-foreground">WWHQ+JC7</span><br />
                                                Training & Placement Cell,<br />
                                                Faculty of Engineering & Technology,<br />
                                                University of Lucknow,<br />
                                                New Campus Rd, Sultanpur Village,<br />
                                                Jankipuram Extension,<br />
                                                Lucknow, Uttar Pradesh 226031
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Building2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Office</h3>
                                            <p className="text-muted-foreground">
                                                Training & Placement Cell Office,<br />
                                                Faculty of Engineering & Technology Building
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-card border border-border rounded-xl p-5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                                <Phone className="h-5 w-5 text-accent" />
                                            </div>
                                            <h4 className="font-medium text-foreground">Phone</h4>
                                        </div>
                                        <a href="tel:+917905287870" className="text-muted-foreground hover:text-accent transition-colors">
                                            +91-79052 87870
                                        </a>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Mail className="h-5 w-5 text-primary" />
                                            </div>
                                            <h4 className="font-medium text-foreground">Email</h4>
                                        </div>
                                        <a href="mailto:placement_foet@lkouniv.ac.in" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                            placement_foet@lkouniv.ac.in
                                        </a>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-6 w-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Office Hours</h3>
                                            <p className="text-muted-foreground">
                                                Monday - Friday: 10:00 AM - 5:00 PM<br />
                                                Saturday: 10:00 AM - 2:00 PM<br />
                                                <span className="text-xs">(Closed on Sundays & Public Holidays)</span>
                                            </p>
                                        </div>
                                    </div>
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
