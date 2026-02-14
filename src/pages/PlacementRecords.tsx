import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import PlacementStats from "@/components/PlacementStats";
import RecruiterPortal from "@/components/RecruiterPortal";
import GateQualifiers from "@/components/GateQualifiers";
import PlacementGallery from "@/components/PlacementGallery";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import heroImage from "@/assets/university-hero-new.jpg";

const PlacementRecords = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
            <PageBackground />

            {/* Hero Section - Enhanced */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="University of Lucknow Campus"
                        className="w-full h-full object-cover object-[center_20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                    className="absolute top-1/4 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"
                    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
                    animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="container-narrow text-center relative z-10 px-4">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-6">
                            <TrendingUp className="w-4 h-4" />
                            Success Stories
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6 tracking-tight"
                    >
                        Placement <span className="text-gold-gradient">Records & Achievements</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
                    >
                        Explore our placement statistics, top recruiters, and success stories from University of Lucknow's exceptional graduates.
                    </motion.p>

                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 rounded-full bg-accent" />
                    </motion.div>
                </motion.div>
            </section>

            <main className="flex-grow relative z-10">
                <PlacementStats />
                <RecruiterPortal />
                <GateQualifiers />
                <PlacementGallery />
            </main>
            <Footer />
        </div>
    );
};

export default PlacementRecords;
