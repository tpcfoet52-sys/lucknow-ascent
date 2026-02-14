import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PageBackground from "@/components/PageBackground";
import heroImage from "@/assets/university-hero-new.jpg";

const PlacementCalendar = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <PageBackground />

            <main className="flex-grow flex flex-col items-center justify-center p-6 text-center pt-24 md:pt-32 min-h-[60vh] relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full space-y-6"
                >
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-accent/5">
                        <Calendar className="w-10 h-10 text-accent" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                            Coming Soon
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We are updating the placement schedule for the 2025-26 session. Please check back later.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link to="/">
                            <Button variant="outline" size="lg" className="gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default PlacementCalendar;
