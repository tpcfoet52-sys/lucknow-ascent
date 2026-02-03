import { motion } from "framer-motion";
import { Code2, Layout, Database, HeartHandshake, Linkedin, Mail } from "lucide-react";
import akashSingh from "@/assets/akash-singh.jpg";
import srishtiMishra from "@/assets/srishti-mishra.jpg";
import anurag from "@/assets/anurag.jpg";
import rashmiKushwaha from "@/assets/rashmi-kushwaha.jpg";
import aryanTripathi from "@/assets/aryan-tripathi.jpg";
import akashKumarYadav from "@/assets/akash-kumar-yadav.jpg";
import Footer from "@/components/Footer";

const DeveloperTeam = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 },
        }),
    };

    const teamSections = [
        {
            title: "Frontend Development & Data Accuracy",
            icon: Layout,
            color: "bg-accent/10 text-accent",
            members: [
                {
                    name: "Akash Singh",
                    role: "Frontend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024-28",
                    linkedin: "https://www.linkedin.com/in/akashsinghmrj64/",
                    email: "mailto:akashsinghmrj64@gmail.com",
                    image: akashSingh,
                },
                {
                    name: "Srishti Mishra",
                    role: "Frontend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024-28",
                    linkedin: "https://www.linkedin.com/in/mishrasrishti108/",
                    email: "mailto:mishrasrishti108@gmail.com",
                    image: srishtiMishra,
                },
            ],
        },
        {
            title: "Backend Development",
            icon: Database,
            color: "bg-accent/10 text-accent",
            members: [
                {
                    name: "Anurag",
                    role: "Backend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024-28",
                    linkedin: "https://www.linkedin.com/in/anurag-210a86317/",
                    email: "mailto:anurag00744@outlook.com",
                    image: anurag,
                },
                {
                    name: "Akash Kumar Yadav",
                    role: "Backend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024-28",
                    linkedin: "https://www.linkedin.com/in/akash-kumar-yadav-b1a33430b/",
                    email: "mailto:akashkumar197yadav@gmail.com",
                    image: akashKumarYadav,
                },
            ],
        },
        {
            title: "Support & Assistance",
            icon: HeartHandshake,
            color: "bg-accent/10 text-accent",
            members: [
                {
                    name: "Rashmi Kushwaha",
                    role: "Support & Assistance",
                    program: "Bachelor of Computer Applications",
                    batch: "2024–2027",
                    linkedin: "https://www.linkedin.com/in/rashmikushwaha2005/",
                    email: "mailto:rashmingkushwaha@gmail.com",
                    image: rashmiKushwaha,
                },
                {
                    name: "Aryan Tripathi",
                    role: "Support & Assistance",
                    program: "B.Tech Electrical Engineering",
                    batch: "2024-28",
                    linkedin: "https://www.linkedin.com/in/aryan-tripathi-45346a254/",
                    email: "mailto:tripathiaryan647@gmail.com",
                    image: aryanTripathi,
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 pt-24 pb-12">
                {/* Hero Section */}
                <section className="relative py-12 md:py-16">
                    <div className="container-narrow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Code2 className="w-6 h-6 text-accent" />
                                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                                    Behind The Scenes
                                </span>
                            </div>
                            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                                Website Development &{" "}
                                <span className="text-gold-gradient">Support Team</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                This website is a collaborative student initiative developed under the
                                Training and Placement Cell to ensure accuracy, usability, and a
                                professional digital presence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Team Sections */}
                <section className="container-narrow py-12">
                    {/* Frontend & Backend - All 4 cards in one row */}
                    <div className="mb-12">
                        {/* Combined Section Header */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Layout className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-serif text-sm font-semibold text-foreground">Frontend</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Database className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-serif text-sm font-semibold text-foreground">Backend</span>
                            </div>
                        </div>

                        {/* All 4 members in one row */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {teamSections.slice(0, 2).flatMap(section => section.members).map((member, memberIndex) => (
                                <motion.div
                                    key={member.name}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={memberIndex}
                                    variants={fadeInUp}
                                    className="bg-card rounded-xl p-4 border border-border/50 flex flex-col items-center gap-3 text-center w-full max-w-[280px] transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                                >
                                    <div className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border-4 border-accent/20 bg-muted flex items-center justify-center">
                                        {/* @ts-ignore */}
                                        {member.image ? (
                                            <img
                                                // @ts-ignore
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        ) : (
                                            <span className="text-3xl font-bold text-accent/50">
                                                {member.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col items-center w-full">
                                        <h3 className="font-serif text-sm font-bold text-foreground mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-accent text-[10px] font-semibold uppercase tracking-wider mb-1">
                                            {member.role}
                                        </p>
                                        <p className="text-muted-foreground text-[9px] font-medium uppercase tracking-wide mt-1 line-clamp-2">
                                            {member.program}
                                        </p>
                                        <p className="text-gold-gradient text-[10px] font-medium uppercase tracking-wide mb-2">
                                            {member.batch}
                                        </p>
                                        <div className="flex items-center justify-center gap-2 mt-auto">
                                            {member.email && (
                                                <a href={member.email} className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                    <Mail className="w-3 h-3" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                    <Linkedin className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        {/* Support Section Header */}
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <HeartHandshake className="w-4 h-4 text-accent" />
                            </div>
                            <span className="font-serif text-sm font-semibold text-foreground">Support & Assistance</span>
                        </div>

                        {/* Support members in same style grid */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {teamSections.slice(2).flatMap(section => section.members).map((member, memberIndex) => (
                                <motion.div
                                    key={member.name}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={memberIndex}
                                    variants={fadeInUp}
                                    className="bg-card rounded-xl p-4 border border-border/50 flex flex-col items-center gap-3 text-center w-full max-w-[280px] transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                                >
                                    <div className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border-4 border-accent/20 bg-muted flex items-center justify-center">
                                        {/* @ts-ignore */}
                                        {member.image ? (
                                            <img
                                                // @ts-ignore
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        ) : (
                                            <span className="text-3xl font-bold text-accent/50">
                                                {member.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col items-center w-full">
                                        <h3 className="font-serif text-sm font-bold text-foreground mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-accent text-[10px] font-semibold uppercase tracking-wider mb-1">
                                            {member.role}
                                        </p>
                                        <p className="text-muted-foreground text-[9px] font-medium uppercase tracking-wide mt-1 line-clamp-2">
                                            {member.program}
                                        </p>
                                        <p className="text-gold-gradient text-[10px] font-medium uppercase tracking-wide mb-2">
                                            {member.batch}
                                        </p>
                                        <div className="flex items-center justify-center gap-2 mt-auto">
                                            {member.email && (
                                                <a href={member.email} className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                    <Mail className="w-3 h-3" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                    <Linkedin className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Acknowledgment */}
                <section className="container-narrow py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-2xl p-8 border border-accent/20"
                    >
                        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                            We extend our gratitude to all team members for their dedication and hard work
                            in building and maintaining this platform. This project reflects the
                            collaborative spirit of our institution.
                        </p>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DeveloperTeam;
