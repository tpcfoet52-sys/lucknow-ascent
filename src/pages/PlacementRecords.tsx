import { motion } from "framer-motion";
import PlacementStats from "@/components/PlacementStats";

import RecruiterPortal from "@/components/RecruiterPortal";
import GateQualifiers from "@/components/GateQualifiers";
import PlacementGallery from "@/components/PlacementGallery";
import Footer from "@/components/Footer";

const PlacementRecords = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col relative">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Hero Section */}
            <section className="section-padding bg-muted/20 relative z-10 pt-32">
                <div className="container-narrow text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Success Stories</span>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 tracking-tight">
                            Placement <span className="text-gold-gradient">Records & Achievements</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            Explore our placement statistics, top recruiters, and success stories from University of Lucknow's exceptional graduates.
                        </p>
                    </motion.div>
                </div>
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
