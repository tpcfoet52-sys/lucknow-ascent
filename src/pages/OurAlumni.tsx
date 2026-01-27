import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import uolLogo from "@/assets/uol-logo.png";
import heroImage from "@/assets/university-hero-new.jpg";
import naacBadge from "@/assets/naac-badge.png";

const alumniLinks = [
    { name: "Alumni Network", href: "#network" },
    { name: "Distinguished Alumni", href: "#distinguished" },
    { name: "Stories", href: "#stories" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const alumniList = [
    { name: "Ritu Karidhal", role: "Senior Scientist, ISRO (Rocket Woman)", field: "Science & Technology" },
    { name: "Naresh Trehan", role: "Founder, Medanta Hospital (Padma Shri)", field: "Medicine & Healthcare" },
    { name: "S. P. Chakravarti", role: "Pioneer of Electronics Education", field: "Education & Technology" },
    { name: "Govind Ballabh Pant", role: "Freedom Fighter & 1st CM of UP", field: "Politics & Governance" },
    { name: "Justice A. S. Anand", role: "Former Chief Justice of India", field: "Law & Judiciary" },
    { name: "Qurratulain Hyder", role: "Jnanpith Awardee Novelist", field: "Literature" },
    { name: "Vinod Mehta", role: "Eminent Journalist (Editor, Outlook)", field: "Journalism & Media" },
    { name: "Jaya Prada", role: "Actress & Former MP", field: "Arts & Politics" },
    { name: "Jagdish Gandhi", role: "Founder, City Montessori School", field: "Education" },
];

const OurAlumni = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <SubpageHeader pageTitle="Our Alumni" subpageLinks={alumniLinks} />

            {/* Hero Section */}
            <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="University of Lucknow Campus"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
                </div>

                <div className="relative z-10 container-narrow pt-8 md:pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        {/* Badges Row */}
                        <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
                            <motion.img
                                src={naacBadge}
                                alt="NAAC A++ Accreditation"
                                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            />
                            <motion.img
                                src={uolLogo}
                                alt="University of Lucknow"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            />
                        </div>

                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
                            Our Distinguished Alumni
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                            Celebrating the achievements of our graduates who have made significant contributions to society and their respective fields.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Alumni Grid Section */}
            <section id="distinguished" className="py-16 md:py-24 bg-muted/30">
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">Distinguished Alumni</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                            Leaders Who Walked Our Halls
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {alumniList.map((alumni, index) => (
                            <motion.div
                                key={alumni.name}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-foreground">{alumni.name}</h3>
                                <p className="text-sm text-accent mt-1">{alumni.role}</p>
                                <p className="text-xs text-muted-foreground mt-1">{alumni.field}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-border bg-background">
                <div className="container-narrow text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} University of Lucknow. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default OurAlumni;
