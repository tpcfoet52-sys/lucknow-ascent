import { motion } from "framer-motion";
import gateQualifiers2025 from "@/assets/gate-qualifiers-2025.png";

const GateQualifiers = () => {
    return (
        <section className="section-padding bg-cream">
            <div className="container-narrow">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
                >
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-5 text-center">GATE Qualifiers 2025</h3>
                    <div className="w-full rounded-lg overflow-hidden">
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
