import { motion } from "framer-motion";
import { BookOpen, Download, FileText, GraduationCap, ChevronRight, Layers, Code, Calculator, Cpu, Database, Globe, BarChart3 } from "lucide-react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageBackground from "@/components/PageBackground";

const notesCategories = [
    {
        title: "Computer Science",
        icon: Code,
        color: "text-accent",
        subjects: [
            { name: "Data Structures & Algorithms", type: "PDF" },
            { name: "Operating Systems", type: "PDF" },
            { name: "Database Management Systems", type: "PDF" },
            { name: "Computer Networks", type: "PDF" },
            { name: "Object Oriented Programming", type: "PDF" },
        ]
    },
    {
        title: "Mathematics",
        icon: Calculator,
        color: "text-primary",
        subjects: [
            { name: "Engineering Mathematics I", type: "PDF" },
            { name: "Engineering Mathematics II", type: "PDF" },
            { name: "Discrete Mathematics", type: "PDF" },
            { name: "Probability & Statistics", type: "PDF" },
        ]
    },
    {
        title: "Electronics & Communication",
        icon: Cpu,
        color: "text-accent",
        subjects: [
            { name: "Digital Electronics", type: "PDF" },
            { name: "Signals & Systems", type: "PDF" },
            { name: "Analog Communication", type: "PDF" },
            { name: "Microprocessors", type: "PDF" },
        ]
    },
    {
        title: "Information Technology",
        icon: Database,
        color: "text-primary",
        subjects: [
            { name: "Web Technologies", type: "PDF" },
            { name: "Software Engineering", type: "PDF" },
            { name: "Cloud Computing", type: "PDF" },
            { name: "Cyber Security Fundamentals", type: "PDF" },
        ]
    },
    {
        title: "General Aptitude",
        icon: BarChart3,
        color: "text-accent",
        subjects: [
            { name: "Quantitative Aptitude", type: "PDF" },
            { name: "Logical Reasoning", type: "PDF" },
            { name: "Verbal Ability", type: "PDF" },
            { name: "Data Interpretation", type: "PDF" },
        ]
    },
    {
        title: "General Knowledge & English",
        icon: Globe,
        color: "text-primary",
        subjects: [
            { name: "English Grammar & Vocabulary", type: "PDF" },
            { name: "Current Affairs Compendium", type: "PDF" },
            { name: "General Science", type: "PDF" },
        ]
    },
];

const NotesContent = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <PageBackground />

            {/* Hero Section */}
            <section className="relative pt-24 md:pt-32 pb-12 md:pb-16">
                <div className="container-narrow text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Study Resources</span>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 tracking-tight">
                            Notes & <span className="text-gold-gradient">Content Library</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Access subject-wise notes, study material, and curated content to strengthen your fundamentals and prepare for placements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="relative z-10 pb-8">
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
                    >
                        {[
                            { label: "Subjects Covered", value: "25+" },
                            { label: "Study Notes", value: "100+" },
                            { label: "Categories", value: "6" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-grow relative z-10 pb-20">
                <div className="container-narrow space-y-16">

                    {/* Notes by Category */}
                    <section>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-10"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 rounded-xl bg-accent/10">
                                    <Layers className="w-6 h-6 text-accent" />
                                </div>
                            </div>
                            <Badge variant="outline" className="mb-3">Subject-wise</Badge>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                                Browse by <span className="text-accent">Category</span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {notesCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -4 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="h-full"
                                >
                                    <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30 h-full">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-lg bg-secondary">
                                                    <category.icon className={`w-5 h-5 ${category.color}`} />
                                                </div>
                                                <CardTitle className="text-lg text-accent">{category.title}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <ul className="space-y-2.5">
                                                {category.subjects.map((subject, i) => (
                                                    <li key={i} className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-secondary/40 transition-colors">
                                                        <span className="flex items-center gap-2 text-sm text-foreground/80">
                                                            <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                                                            {subject.name}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{subject.type}</Badge>
                                                            <Download className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* How to Use Section */}
                    <section className="bg-secondary/20 -mx-4 md:-mx-8 p-8 md:p-12 rounded-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-8"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 rounded-xl bg-accent/10">
                                    <GraduationCap className="w-6 h-6 text-accent" />
                                </div>
                            </div>
                            <Badge variant="outline" className="mb-3">Study Tips</Badge>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                                How to <span className="text-accent">Use These Notes</span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {[
                                {
                                    step: "01",
                                    title: "Choose Your Subject",
                                    desc: "Browse through the categories and select the subject you want to study or revise."
                                },
                                {
                                    step: "02",
                                    title: "Download & Study",
                                    desc: "Download the PDF notes and create a structured study plan around your placement schedule."
                                },
                                {
                                    step: "03",
                                    title: "Practice & Revise",
                                    desc: "Use these notes alongside mock tests and previous year questions for best results."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <span className="text-4xl font-bold text-accent/20">{item.step}</span>
                                    <h4 className="font-semibold text-foreground mt-2 mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="p-8 md:p-12 rounded-2xl bg-card border border-border/50 shadow-sm">
                            <BookOpen className="w-10 h-10 text-accent mx-auto mb-4" />
                            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3">
                                Want to Contribute?
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                                If you have quality notes or study material that can help fellow students, reach out to the TPC team. Your contributions are always appreciated!
                            </p>
                            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors">
                                Get in Touch <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NotesContent;
