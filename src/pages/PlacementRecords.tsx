import { motion } from "framer-motion";
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

            {/* Hero Section */}
            <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="University of Lucknow Campus"
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
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Placement Statistics</span>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 tracking-tight">
                            Placement <span className="text-gold-gradient">Records & Achievements</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
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
