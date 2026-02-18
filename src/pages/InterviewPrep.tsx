import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, MessageSquare, ChevronRight, Users } from "lucide-react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBackground from "@/components/PageBackground";
import heroImage from "@/assets/university-hero-new.jpg";

const InterviewPrep = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
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
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Skill Development</span>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                            Master Your <span className="text-gold-gradient">Interview Skills</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            From technical deep-dives to behavioral questions, get everything you need to crack your dream job interview.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow relative z-10">

                <div className="container-narrow space-y-20 pb-20">

                    {/* Preparation Guides */}
                    <section>
                        <h2 className="font-serif text-3xl font-semibold mb-8 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-accent" /> Curated Guides
                        </h2>
                        <Tabs defaultValue="technical" className="w-full">
                            <TabsList className="flex flex-wrap justify-center w-full max-w-2xl mx-auto mb-10 bg-background/50 backdrop-blur-sm border border-gold/20 p-1.5 rounded-xl shadow-sm h-auto gap-2">
                                <TabsTrigger value="technical" className="flex-1 min-w-[120px] rounded-lg data-[state=active]:bg-gold/10 data-[state=active]:text-gold-dark border border-transparent data-[state=active]:border-gold/20 transition-all duration-300 hover:text-gold-dark/80 font-medium px-4 py-2">Technical</TabsTrigger>
                                <TabsTrigger value="hr" className="flex-1 min-w-[120px] rounded-lg data-[state=active]:bg-gold/10 data-[state=active]:text-gold-dark border border-transparent data-[state=active]:border-gold/20 transition-all duration-300 hover:text-gold-dark/80 font-medium px-4 py-2">HR & Behavioral</TabsTrigger>
                                <TabsTrigger value="gd" className="flex-1 min-w-[120px] rounded-lg data-[state=active]:bg-gold/10 data-[state=active]:text-gold-dark border border-transparent data-[state=active]:border-gold/20 transition-all duration-300 hover:text-gold-dark/80 font-medium px-4 py-2">Group Discussion</TabsTrigger>
                            </TabsList>
                            <TabsContent value="technical" className="space-y-6">
                                <Tabs defaultValue="cse" className="w-full">
                                    <div className="flex flex-col items-center mb-10">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Choose Your Engineering Branch</p>
                                        <TabsList className="bg-muted/40 p-1.5 rounded-full flex flex-wrap justify-center h-auto gap-1 border border-border/50 w-full max-w-4xl mx-auto">
                                            <TabsTrigger value="cse" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">CSE</TabsTrigger>
                                            <TabsTrigger value="ece" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">ECE</TabsTrigger>
                                            <TabsTrigger value="ee" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">EE</TabsTrigger>
                                            <TabsTrigger value="me" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">ME</TabsTrigger>
                                            <TabsTrigger value="ce" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">CE</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    {/* CSE Content */}
                                    <TabsContent value="cse" className="space-y-6">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                {
                                                    title: "Data Structures & Algorithms",
                                                    topics: ["Arrays, Linked Lists", "Stacks, Queues", "Trees, Graphs", "Sorting & Searching", "Recursion", "Time & Space Complexity"]
                                                },
                                                {
                                                    title: "Programming Languages",
                                                    topics: ["C / C++ / Java / Python", "OOPS Concepts", "Exception Handling", "Memory Management"]
                                                },
                                                {
                                                    title: "Database Management Systems",
                                                    topics: ["Normalization", "SQL Queries", "Joins & Indexing", "Transactions & ACID Properties"]
                                                },
                                                {
                                                    title: "Operating Systems",
                                                    topics: ["Process vs Thread", "Deadlock", "Scheduling Algorithms", "Memory Management"]
                                                },
                                                {
                                                    title: "Computer Networks",
                                                    topics: ["OSI & TCP/IP Models", "Routing & Switching", "HTTP / HTTPS", "Subnetting"]
                                                },
                                                {
                                                    title: "Software Engineering",
                                                    topics: ["SDLC Models", "Agile Methodology", "Version Control (Git)"]
                                                }
                                            ].map((card, idx) => (
                                                <motion.div key={idx} whileHover={{ y: -3 }} className="h-full">
                                                    <Card className="h-full rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                        <CardHeader className="pb-3">
                                                            <CardTitle className="text-base text-accent">{card.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="pt-0">
                                                            <ul className="space-y-1.5">
                                                                {card.topics.map((t, i) => (
                                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                        <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="rounded-xl bg-secondary/30 border border-border/50 p-5">
                                            <h4 className="font-semibold text-accent mb-3">Practical Expectations</h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {["Write optimized code on board/system", "Explain logic clearly", "Debug small programs", "Discuss academic projects in depth"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TabsContent>

                                    {/* ECE Content */}
                                    <TabsContent value="ece" className="space-y-6">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                {
                                                    title: "Analog Electronics",
                                                    topics: ["Diodes & Transistors", "BJT & MOSFET", "Amplifiers", "Operational Amplifiers"]
                                                },
                                                {
                                                    title: "Digital Electronics",
                                                    topics: ["Logic Gates", "Flip-Flops", "Counters", "Combinational & Sequential Circuits"]
                                                },
                                                {
                                                    title: "Signals & Systems",
                                                    topics: ["Fourier Transform", "Laplace Transform", "System Stability"]
                                                },
                                                {
                                                    title: "Communication Systems",
                                                    topics: ["Modulation & Demodulation", "AM, FM, PCM", "Noise Analysis"]
                                                },
                                                {
                                                    title: "Microprocessors & Microcontrollers",
                                                    topics: ["8086 Architecture", "Instruction Set", "Interrupts"]
                                                }
                                            ].map((card, idx) => (
                                                <motion.div key={idx} whileHover={{ y: -3 }} className="h-full">
                                                    <Card className="h-full rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                        <CardHeader className="pb-3">
                                                            <CardTitle className="text-base text-accent">{card.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="pt-0">
                                                            <ul className="space-y-1.5">
                                                                {card.topics.map((t, i) => (
                                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                        <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="rounded-xl bg-secondary/30 border border-border/50 p-5">
                                            <h4 className="font-semibold text-accent mb-3">Practical Expectations</h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {["Circuit analysis", "Numerical problem solving", "Block diagram explanation", "Final year project understanding"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TabsContent>

                                    {/* EE Content */}
                                    <TabsContent value="ee" className="space-y-6">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                {
                                                    title: "Electrical Machines",
                                                    topics: ["Transformers", "Induction Motors", "Synchronous Machines", "DC Machines"]
                                                },
                                                {
                                                    title: "Power Systems",
                                                    topics: ["Generation, Transmission & Distribution", "Load Flow Analysis", "Fault Analysis"]
                                                },
                                                {
                                                    title: "Power Electronics",
                                                    topics: ["Converters", "Inverters", "Choppers", "Thyristors"]
                                                },
                                                {
                                                    title: "Control Systems",
                                                    topics: ["Transfer Functions", "Stability Criteria", "Root Locus", "PID Controllers"]
                                                },
                                                {
                                                    title: "Network Theory",
                                                    topics: ["KCL & KVL", "Thevenin & Norton Theorems", "Transient Analysis"]
                                                }
                                            ].map((card, idx) => (
                                                <motion.div key={idx} whileHover={{ y: -3 }} className="h-full">
                                                    <Card className="h-full rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                        <CardHeader className="pb-3">
                                                            <CardTitle className="text-base text-accent">{card.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="pt-0">
                                                            <ul className="space-y-1.5">
                                                                {card.topics.map((t, i) => (
                                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                        <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="rounded-xl bg-secondary/30 border border-border/50 p-5">
                                            <h4 className="font-semibold text-accent mb-3">Practical Expectations</h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {["Numerical accuracy", "Diagram drawing", "Real-world application explanation", "Industry exposure awareness"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TabsContent>

                                    {/* ME Content */}
                                    <TabsContent value="me" className="space-y-6">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                {
                                                    title: "Thermodynamics",
                                                    topics: ["Laws of Thermodynamics", "Entropy", "Thermodynamic Cycles"]
                                                },
                                                {
                                                    title: "Fluid Mechanics",
                                                    topics: ["Bernoulli's Theorem", "Reynolds Number", "Flow Measurement"]
                                                },
                                                {
                                                    title: "Strength of Materials",
                                                    topics: ["Stress & Strain", "Bending Moment", "Torsion"]
                                                },
                                                {
                                                    title: "Theory of Machines",
                                                    topics: ["Gears", "Cam Mechanisms", "Vibrations"]
                                                },
                                                {
                                                    title: "Manufacturing Processes",
                                                    topics: ["Casting", "Welding", "Machining", "CNC Basics"]
                                                }
                                            ].map((card, idx) => (
                                                <motion.div key={idx} whileHover={{ y: -3 }} className="h-full">
                                                    <Card className="h-full rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                        <CardHeader className="pb-3">
                                                            <CardTitle className="text-base text-accent">{card.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="pt-0">
                                                            <ul className="space-y-1.5">
                                                                {card.topics.map((t, i) => (
                                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                        <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="rounded-xl bg-secondary/30 border border-border/50 p-5">
                                            <h4 className="font-semibold text-accent mb-3">Practical Expectations</h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {["Derivations & numerical solving", "Free body diagrams", "Application-based reasoning", "Project model explanation"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TabsContent>

                                    {/* CE Content */}
                                    <TabsContent value="ce" className="space-y-6">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                {
                                                    title: "Structural Engineering",
                                                    topics: ["Bending Moment & Shear Force", "RCC Concepts", "Steel Structures"]
                                                },
                                                {
                                                    title: "Geotechnical Engineering",
                                                    topics: ["Soil Mechanics", "Bearing Capacity", "Compaction"]
                                                },
                                                {
                                                    title: "Environmental Engineering",
                                                    topics: ["Water Treatment", "Wastewater Management", "Air Pollution Control"]
                                                },
                                                {
                                                    title: "Transportation Engineering",
                                                    topics: ["Highway Design", "Traffic Flow Characteristics"]
                                                },
                                                {
                                                    title: "Fluid Mechanics",
                                                    topics: ["Open Channel Flow", "Hydrology Basics"]
                                                }
                                            ].map((card, idx) => (
                                                <motion.div key={idx} whileHover={{ y: -3 }} className="h-full">
                                                    <Card className="h-full rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                        <CardHeader className="pb-3">
                                                            <CardTitle className="text-base text-accent">{card.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="pt-0">
                                                            <ul className="space-y-1.5">
                                                                {card.topics.map((t, i) => (
                                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                        <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="rounded-xl bg-secondary/30 border border-border/50 p-5">
                                            <h4 className="font-semibold text-accent mb-3">Practical Expectations</h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {["Drawing diagrams clearly", "Site-based scenario discussion", "IS Code awareness", "Final year project depth"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </TabsContent>
                            <TabsContent value="hr" className="space-y-6">
                                <div className="text-center mb-2">
                                    <h3 className="text-xl font-semibold">Common HR Interview Questions</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Prepare structured answers for each category. Use the STAR method for behavioural questions.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            num: 1,
                                            title: "Introduction & Background",
                                            questions: [
                                                "Tell me about yourself.",
                                                "Walk me through your resume.",
                                                "Describe your academic journey.",
                                                "Why did you choose this field of study?"
                                            ]
                                        },
                                        {
                                            num: 2,
                                            title: "Strengths & Weaknesses",
                                            questions: [
                                                "What are your strengths?",
                                                "What is your greatest weakness?",
                                                "How are you working to improve your weaknesses?",
                                                "What differentiates you from other candidates?"
                                            ]
                                        },
                                        {
                                            num: 3,
                                            title: "Career Goals & Motivation",
                                            questions: [
                                                "Where do you see yourself in five years?",
                                                "What are your short-term and long-term goals?",
                                                "Why do you want to join our organization?",
                                                "What motivates you to perform better?"
                                            ]
                                        },
                                        {
                                            num: 4,
                                            title: "Behavioral & Situational Questions",
                                            questions: [
                                                "Describe a challenging situation you faced and how you handled it.",
                                                "Tell me about a time you worked in a team.",
                                                "Have you ever faced a conflict in a team? How did you resolve it?",
                                                "Give an example of a leadership experience.",
                                                "Describe a failure and what you learned from it."
                                            ]
                                        },
                                        {
                                            num: 5,
                                            title: "Work Ethic & Professionalism",
                                            questions: [
                                                "How do you handle pressure?",
                                                "Are you comfortable with relocation?",
                                                "How do you manage deadlines?",
                                                "What does professionalism mean to you?"
                                            ]
                                        },
                                        {
                                            num: 6,
                                            title: "Company & Role-Specific",
                                            questions: [
                                                "What do you know about our company?",
                                                "Why should we hire you?",
                                                "What value will you bring to this role?",
                                                "Are you applying to other companies?"
                                            ]
                                        },
                                        {
                                            num: 7,
                                            title: "Adaptability & Learning",
                                            questions: [
                                                "How do you adapt to change?",
                                                "How do you handle criticism?",
                                                "Describe a time when you had to learn something quickly.",
                                                "How do you keep yourself updated with industry trends?"
                                            ]
                                        },
                                        {
                                            num: 8,
                                            title: "Salary & Final Round Questions",
                                            questions: [
                                                "What are your salary expectations?",
                                                "When can you join?",
                                                "Do you have any questions for us?"
                                            ]
                                        }
                                    ].map((section) => (
                                        <motion.div
                                            key={section.num}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -3 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: section.num * 0.05 }}
                                        >
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30 h-full">
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-base flex items-center gap-2.5">
                                                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold flex-shrink-0">
                                                            {section.num}
                                                        </span>
                                                        <span className="text-accent">{section.title}</span>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <ul className="space-y-2">
                                                        {section.questions.map((q, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> {q}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="gd" className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold flex items-center gap-2">
                                            <Users className="w-5 h-5 text-accent" /> GD Essentials
                                        </h3>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="gd-1">
                                                <AccordionTrigger>Initiating the Discussion</AccordionTrigger>
                                                <AccordionContent>
                                                    Start with a clear definition or a relevant statistic. A strong opening sets the tone and demonstrates preparedness.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="gd-2">
                                                <AccordionTrigger>Building on Others' Points</AccordionTrigger>
                                                <AccordionContent>
                                                    Acknowledge previous speakers before presenting your view. Use phrases such as "Building on that point" or "To add a different perspective" to stay constructive.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="gd-3">
                                                <AccordionTrigger>Summarising Effectively</AccordionTrigger>
                                                <AccordionContent>
                                                    Conclude by synthesising key viewpoints discussed. A well-structured summary demonstrates analytical thinking and leadership.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5 text-accent" /> Evaluation Criteria
                                        </h3>
                                        <div className="grid gap-4">
                                            {[
                                                { title: "Content Quality", desc: "Present factual, relevant, and well-structured arguments supported by examples or data." },
                                                { title: "Communication Clarity", desc: "Speak clearly, maintain moderate pace, and use precise language to convey ideas." },
                                                { title: "Team Behaviour", desc: "Demonstrate respect for differing opinions, avoid interrupting, and encourage quieter members to contribute." }
                                            ].map((skill, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    whileHover={{ y: -5 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30 h-full">
                                                        <CardContent className="p-4">
                                                            <h4 className="font-semibold text-foreground mb-1">{skill.title}</h4>
                                                            <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <motion.div whileHover={{ y: -5 }}>
                                    <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                        <CardHeader>
                                            <CardTitle>Quick Tips for Group Discussions</CardTitle>
                                            <CardDescription>Stand out without being aggressive.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-4">
                                                {[
                                                    { title: "Listen Actively", desc: "Acknowledge others' points before adding your own." },
                                                    { title: "Quality over Quantity", desc: "Speak 2-3 times with valuable insights rather than dominating." },
                                                    { title: "Structure Your Thoughts", desc: "Use data or examples to back your arguments." }
                                                ].map((item, i) => (
                                                    <li key={i} className="flex gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                        <div>
                                                            <strong className="text-foreground">{item.title}:</strong> <span className="text-muted-foreground">{item.desc}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default InterviewPrep;
