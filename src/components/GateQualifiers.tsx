import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import gateQualifiers2025 from "@/assets/gate-qualifiers-2025.png";

const GateQualifiers = () => {
    return (
        <section className="section-padding bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="container-narrow relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-card to-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-md border border-border/50 hover:border-accent/30 transition-all duration-500"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-gold/10 px-5 py-2 rounded-full mb-4">
                            <Trophy className="w-5 h-5 text-gold" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Excellence</span>
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                            GATE <span className="text-gold-gradient">Qualifiers 2025</span>
                        </h3>
                        <p className="text-muted-foreground mt-2 text-sm md:text-base">
                            Celebrating our students' remarkable achievements in GATE 2025
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-xl border border-border/30">
                        <img
                            src={gateQualifiers2025}
                            alt="GATE Qualifiers 2025"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GateQualifiers;
