import { motion } from "framer-motion";
import { FileText, BookOpen, UserCheck, Layers, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
    {
        icon: FileText,
        title: "Resume Building",
        description: "Professional templates and expert tips to craft an impactful resume.",
        link: "/resume-guide",
        features: ["ATS-Friendly Templates", "Action Verbs Guide", "Industry Examples"]
    },
    {
        icon: BookOpen,
        title: "Interview Prepration",
        description: "Curated guides, mock interviews, and aptitude test resources.",
        link: "/interview-prep",
        features: ["HR Round Tips", "Technical Questions", "Mock Interviews"]
    },
    {
        icon: UserCheck,
        title: "Soft Skills Training",
        description: "Communication, presentation, and leadership development programs.",
        link: "/soft-skills",
        features: ["Communication Skills", "Leadership Traits", "Tech Trends"]
    },
    {
        icon: Layers,
        title: "Notes & Content",
        description: "Subject-wise study notes and curated content for placement preparation.",
        link: "/notes-content",
        features: ["Subject-wise Notes", "Aptitude Material", "Download PDFs"]
    },
];

const SkillDevelopment = () => {
    return (
        <section id="skill-development" className="section-padding bg-secondary/30">
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">Skill Development</span>
                    <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-2">
                        Roadmap for Your <span className="text-gold-gradient">Professional Journey</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-3 text-sm md:text-base">
                        Access comprehensive resources designed to help you excel in interviews and secure your ideal placement.
                    </p>
                </motion.div>

                {/* Resources Grid - 3 columns */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                                hover: { y: -5, transition: { duration: 0.3 } }
                            }}
                            className="h-full"
                        >
                            <Link
                                to={resource.link}
                                className="group block bg-card rounded-xl p-6 shadow-elevated-sm border border-border/50 hover:shadow-elevated-md hover:border-accent/30 transition-all h-full"
                            >
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                                    <resource.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-muted-foreground mt-2 text-sm">
                                    {resource.description}
                                </p>

                                {/* Features list to show more content inside */}
                                <ul className="mt-4 space-y-1.5 border-t border-border/50 pt-3">
                                    {resource.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <ChevronRight className="w-3 h-3 text-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-1 text-accent text-sm font-medium mt-4 transition-colors">
                                    Explore <ExternalLink className="w-3 h-3" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillDevelopment;
