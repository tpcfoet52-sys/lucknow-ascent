import { motion } from "framer-motion";
import StudentCorner from "@/components/StudentCorner";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import heroImage from "@/assets/university-hero-new.jpg";

const Students = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
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
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Student Resources</span>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 tracking-tight">
                            Tools for Your <span className="text-gold-gradient">Professional Journey</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Access comprehensive resources designed to help you excel in interviews and secure your ideal placement.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow relative z-10">
                <StudentCorner />
            </main>
            <Footer />
        </div>
    );
};

export default Students;
