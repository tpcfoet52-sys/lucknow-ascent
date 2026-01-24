import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, FileText, Briefcase, Award, PenTool, Download, ChevronRight, User, Settings, Sparkles, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ResumeGuide = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-12">
                {/* Hero Section */}
                <section className="relative py-12 md:py-20 mb-12">
                    <div className="container-narrow text-center relative">


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Career Coaching</span>
                            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                                Build an <span className="text-gold-gradient">Impressive Resume</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Your resume is your first impression. Learn how to craft a professional, ATS-friendly resume that gets you shortlisted by top recruiters.
                            </p>
                            <div className="mt-8 flex justify-center gap-4">
                                <Button variant="gold" size="lg" className="rounded-md" onClick={() => document.getElementById('step-by-step')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Start Building <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-md" onClick={() => document.getElementById('download-template')?.scrollIntoView({ behavior: 'smooth' })}>
                                    <Download className="w-4 h-4 ml-2" /> Templates
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="container-narrow py-12 space-y-20">

                    {/* Why It Matters */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif text-3xl font-semibold mb-6">Why Your Resume Matters</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Recruiters spend an average of <strong className="text-foreground">6-10 seconds</strong> scanning a resume. In that brief window, your resume must communicate your value, skills, and potential.
                                </p>
                                <p>
                                    For placements in India, specifically for engineering and management roles, companies look for candidates who can demonstrate technical competency, problem-solving skills, and cultural fit.
                                </p>
                                <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-md mt-6">
                                    <p className="text-foreground font-medium italic">
                                        "Your resume doesn't get you the job; it gets you the interview. The interview gets you the job."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-card rounded-xl p-6 shadow-sm border border-border/50"
                        >
                            <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-accent" /> What Recruiters Look For
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Relevant Skills matches (Technical & Soft Skills)",
                                    "Impactful Projects with clear outcomes",
                                    "Consistent Academic Performance",
                                    "Internship Experience (Hands-on exposure)",
                                    "Leadership & Extracurricular activities"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </section>

                    {/* Structure */}
                    <section id="structure">
                        <h2 className="font-serif text-3xl font-semibold mb-8 text-center">The Perfect Resume Structure</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Header", icon: User, desc: "Name, phone, email, LinkedIn, GitHub (for tech). keep it clean." },
                                { title: "Education", icon: GraduationCapIcon, desc: "College name, degree, CGPA (if good), and passing year. Reverse chronological." },
                                { title: "Technical Skills", icon: Settings, desc: "Languages, Tools, Frameworks. Group them logically (e.g., Languages: Java, Python)." },
                                { title: "Experience / Internships", icon: Briefcase, desc: "Role, Company, Duration. Use bullet points starting with action verbs." },
                                { title: "Projects", icon: PenTool, desc: "Title, Tech Stack. Describe what you built and the impact/result." },
                                { title: "Achievements", icon: Award, desc: "Hackathons, Competitions, Certifications. quantify if possible." },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full hover:shadow-md transition-all">
                                        <CardHeader>
                                            <item.icon className="w-8 h-8 text-accent mb-2" />
                                            <CardTitle className="text-xl">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Do's and Don'ts */}
                    <section className="bg-secondary/20 -mx-4 md:-mx-8 p-8 md:p-16 rounded-3xl">
                        <h2 className="font-serif text-3xl font-semibold mb-12 text-center">Do's and Don'ts</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold mb-6 text-green-700 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" /> What To Do
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Quantify results (e.g., 'Improved efficiency by 20%')",
                                        "Tailor your resume for each job description (JD)",
                                        "Keep it to 1 page (max 2 for extensive experience)",
                                        "Use a professional font (Inter, Roboto, Calvin)",
                                        "Save as PDF unless asked otherwise",
                                        "Proofread multiple times for typos"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-foreground/80">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-6 text-red-600 flex items-center gap-2">
                                    <XCircle className="w-6 h-6" /> What To Avoid
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Don't include personal details (Age, Religion, Marital Status)",
                                        "Avoid generic objective statements (Use a Summary instead)",
                                        "Don't use graphs or bars for skills (ATS can't read them)",
                                        "Don't lie or exaggerate skills",
                                        "Avoid fancy layouts or photos (unless applying for design roles)",
                                        "Don't use 'I', 'Me', 'My' pronouns"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-foreground/80">
                                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ATS Tips & Power Verbs */}
                    <section className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <h2 className="font-serif text-3xl font-semibold mb-6">Master the ATS</h2>
                            <p className="text-muted-foreground mb-6">
                                Most companies use Applicant Tracking Systems (ATS) to filter resumes before a human sees them. Here is how to beat the bot:
                            </p>
                            <div className="space-y-4">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Keywords are Key</AccordionTrigger>
                                        <AccordionContent>
                                            Scan the Job Description. If they ask for "Python" and "Machine Learning", ensure those exact words appear in your skills or projects section.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Simple Formatting</AccordionTrigger>
                                        <AccordionContent>
                                            Avoid columns, tables, headers/footers, and graphics. Use standard section headings like "Experience" rather than "Professional Journey".
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>File Type</AccordionTrigger>
                                        <AccordionContent>
                                            A text-based PDF is best. Sometimes a Word doc (.docx) is safer for older ATS systems. Never use an image-based PDF.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-accent" /> Pro-Tip: Action Verbs
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Start every bullet point with a power verb. Avoid passive voice.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Developed", "Designed", "Implemented", "Led", "Optimized", "Achieved", "Spearheaded", "Collaborated", "Engineered", "Solved"].map((word) => (
                                        <span key={word} className="bg-background px-3 py-1 rounded-full text-xs font-medium border border-border shadow-sm">
                                            {word}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Before vs After */}
                        <div className="lg:col-span-5">
                            <Card className="bg-navy-900 border-navy-800 text-white h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                                <CardHeader>
                                    <CardTitle className="text-white">Bullet Point Makeover</CardTitle>
                                    <CardDescription className="text-gray-400">See the difference specificity makes.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6 relative z-10">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-red-300 text-sm font-medium">
                                            <XCircle className="w-4 h-4" /> Weak
                                        </div>
                                        <div className="p-3 bg-white/5 rounded text-sm text-gray-300">
                                            "Worked on a project using React."
                                        </div>
                                    </div>

                                    <div className="flex justify-center -my-2">
                                        <ChevronRight className="w-6 h-6 text-accent transform rotate-90" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-green-300 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4" /> Strong
                                        </div>
                                        <div className="p-3 bg-white/10 rounded text-sm text-white border-l-2 border-accent">
                                            "<strong>Developed</strong> a responsive e-commerce web app using <strong>React.js</strong> and Redux, improving page load time by <strong>40%</strong>."
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Common Mistakes */}
                    <section>
                        <h2 className="font-serif text-3xl font-semibold mb-8">Common Student Mistakes</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "One Size Fits All", desc: "Sending the exact same resume to Google, TCS, and a startup. Customize it!" },
                                { title: "Generic Objectives", desc: "Writing 'Looking for a challenging role...' instead of a summary of your skills." },
                                { title: "Ignoring Soft Skills", desc: "Forgetting to mention communication, teamwork, or leadership, especially for management roles." }
                            ].map((mistake, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-orange-50 border border-orange-100 dark:bg-orange-900/10 dark:border-orange-900/30">
                                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">{mistake.title}</h4>
                                        <p className="text-sm text-muted-foreground mt-1">{mistake.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final Checklist */}
                    <section id="step-by-step" className="bg-card rounded-xl p-8 border border-border/50 shadow-sm">
                        <h2 className="font-serif text-2xl font-semibold mb-6">Pre-Submission Checklist</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Contact info is correct (Check phone/email)",
                                "LinkedIn link works and profile is updated",
                                "Formatting is consistent (Font sizes, dates)",
                                "No spelling or grammatical errors (Grammarly check)",
                                "File name is professional (FirstName_LastName_Resume.pdf)",
                                "All hyperlinks work (GitHub, Portfolio)",
                                "Skills listed match the Job Description",
                                "Margins are balanced (not too crammed)"
                            ].map((item, i) => (
                                <label key={i} className="flex items-center gap-3 p-3 hover:bg-secondary/50 rounded cursor-pointer transition-colors">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent" />
                                    <span className="text-foreground/80">{item}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* CTA / Download */}
                    <section id="download-template" className="text-center py-12">
                        <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Build?</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                            Download our recommended resume template to get started. It's clean, ATS-friendly, and perfect for freshers.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="gap-2">
                                <FileText className="w-4 h-4" /> Download Word Template
                            </Button>
                            <Link to="/placement-calendar">
                                <Button size="lg" variant="outline" className="gap-2">
                                    <Briefcase className="w-4 h-4" /> Check Upcoming Drives
                                </Button>
                            </Link>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

// Simple Icon component for the structure section
const GraduationCapIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 0 6-1 6-1v-7" /></svg>
);

export default ResumeGuide;
