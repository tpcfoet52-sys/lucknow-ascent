import { motion } from "framer-motion";
import { Code2, Layout, Database, HeartHandshake, Linkedin, Mail } from "lucide-react";
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
            color: "bg-blue-500/10 text-blue-600",
            members: [
                {
                    name: "Akash Singh",
                    role: "Frontend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024–2028",
                    linkedin: "https://www.linkedin.com/in/akashsinghmrj64/",
                    email: "mailto:akash.singh@example.com",
                },
                {
                    name: "Srishti Mishra",
                    role: "Data Accuracy Lead",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024–2028",
                    linkedin: "https://www.linkedin.com/in/mishrasrishti108/",
                    email: "mailto:srishti.mishra@example.com",
                },
            ],
        },
        {
            title: "Backend Development",
            icon: Database,
            color: "bg-green-500/10 text-green-600",
            members: [
                {
                    name: "Anurag",
                    role: "Backend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024–2028",
                    linkedin: "#",
                    email: "mailto:anurag@example.com",
                },
                {
                    name: "Akash Kumar Yadav",
                    role: "Backend Developer",
                    program: "B.Tech Computer Science & Engineering – Artificial Intelligence",
                    batch: "2024–2028",
                    linkedin: "https://www.linkedin.com/in/akash-kumar-yadav-b1a33430b/",
                    email: "mailto:akash.yadav@example.com",
                },
            ],
        },
        {
            title: "Support & Assistance",
            icon: HeartHandshake,
            color: "bg-purple-500/10 text-purple-600",
            members: [
                {
                    name: "Rashmi",
                    role: "Support Team",
                    program: "BCA",
                    batch: "2024–2027",
                    linkedin: "https://www.linkedin.com/in/rashmikushwaha2005/",
                    email: "mailto:rashmi@example.com",
                },
                {
                    name: "Aryan Tripathi",
                    role: "Support Team",
                    program: "B.Tech Electrical Engineering",
                    batch: "2024–2028",
                    linkedin: "https://www.linkedin.com/in/aryan-tripathi-45346a254/",
                    email: "mailto:aryan.tripathi@example.com",
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
                    <div className="space-y-12">
                        {teamSections.map((section, sectionIndex) => (
                            <motion.div
                                key={section.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={sectionIndex}
                                variants={fadeInUp}
                                className="bg-card border border-border rounded-2xl p-6 md:p-8"
                            >
                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 rounded-lg ${section.color} flex items-center justify-center`}>
                                        <section.icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                                        {section.title}
                                    </h2>
                                </div>

                                {/* Members Grid */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {section.members.map((member, memberIndex) => (
                                        <motion.div
                                            key={member.name}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={memberIndex}
                                            variants={fadeInUp}
                                            className="bg-card rounded-xl p-4 border border-border/50 flex flex-col items-center gap-3 text-center w-full transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                                        >
                                            <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 bg-muted flex items-center justify-center">
                                                <span className="text-3xl font-bold text-accent/50">
                                                    {member.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="flex-1 flex flex-col items-center w-full">
                                                <h3 className="font-serif text-lg font-bold text-foreground mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                                                    {member.name}
                                                </h3>
                                                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1 flex items-center justify-center">
                                                    {member.role}
                                                </p>
                                                <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mt-1 text-center">
                                                    {member.program}
                                                </p>
                                                <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mb-3 text-center">
                                                    {member.batch}
                                                </p>

                                                <div className="flex items-center justify-center gap-3 mt-auto">
                                                    {member.email && (
                                                        <a href={member.email} className="p-2 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                            <Mail className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    {member.linkedin && (
                                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                            <Linkedin className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
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
