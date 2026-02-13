import { motion } from "framer-motion";
import { BookOpen, BrainCircuit, CheckCircle2, MessageSquare, ChevronRight, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InterviewPrep = () => {
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
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Skill Development</span>
                            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                                Master Your <span className="text-gold-gradient">Interview Skills</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                From technical deep-dives to behavioral questions, get everything you need to crack your dream job interview.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="container-narrow space-y-20">

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
                                    <TabsContent value="cse" className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Data Structures & Algorithms</CardTitle>
                                                    <CardDescription>Core problem-solving skills.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Dynamic Programming", "Sorting & Searching"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Core CS Subjects</CardTitle>
                                                    <CardDescription>Fundamental computer science concepts.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Operating Systems (Deadlocks, Paging)", "DBMS (SQL, Normalization)", "Computer Networks (OSI Model, TCP/IP)", "OOPs Concepts"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* ECE Content */}
                                    <TabsContent value="ece" className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Digital Electronics</CardTitle>
                                                    <CardDescription>Logic design and circuits.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Logic Gates & Boolean Algebra", "Combinational Circuits (Mux, Decoder)", "Sequential Circuits (Flip-Flops, Counters)", "Microprocessors (8085/8086)"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Analog & Communication</CardTitle>
                                                    <CardDescription>Signals and semiconductor physics.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Semiconductor Physics (Diodes, BJTs, FETs)", "Op-Amps & Applications", "Analog Communication (AM, FM)", "Digital Communication (PCM, Modulation)"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* EE Content */}
                                    <TabsContent value="ee" className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Electrical Machines</CardTitle>
                                                    <CardDescription>Motors, generators and transformers.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Transformers (Efficiency, Regulation)", "DC Machines", "Induction Motors", "Synchronous Machines"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Power Systems & Circuits</CardTitle>
                                                    <CardDescription>Grid and circuit analysis.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Transmission & Distribution", "Power System Protection", "Circuit Theory (KCL, KVL, Theorems)", "Control Systems"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* ME Content */}
                                    <TabsContent value="me" className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Thermal Engineering</CardTitle>
                                                    <CardDescription>Heat and energy systems.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Thermodynamics Laws & Cycles", "Fluid Mechanics (Bernoulli's, Viscosity)", "Heat Transfer", "IC Engines"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Design & Mechanics</CardTitle>
                                                    <CardDescription>Structure and motion.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Strength of Materials (Stress-Strain)", "Theory of Machines", "Machine Design", "Manufacturing Processes"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* CE Content */}
                                    <TabsContent value="ce" className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Structural Engineering</CardTitle>
                                                    <CardDescription>Analysis and construction materials.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Structural Analysis (Forces, Moments)", "Concrete Technology", "Steel Structures", "Building Materials"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardHeader>
                                                    <CardTitle>Geotechnical & Environmental</CardTitle>
                                                    <CardDescription>Soil and water systems.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="space-y-2">
                                                        {["Soil Mechanics", "Foundation Engineering", "Environmental Engineering (Water Treatment)", "Surveying & Highway Engineering"].map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </TabsContent>
                            <TabsContent value="hr" className="space-y-6">
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                    <CardHeader>
                                        <CardTitle>Common HR Questions</CardTitle>
                                        <CardDescription>Prepare structured answers using the STAR method (Situation, Task, Action, Result).</CardDescription>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        {[
                                            "Tell me about yourself.",
                                            "What are your greatest strengths and weaknesses?",
                                            "Describe a time you faced a challenge and how you overcame it.",
                                            "Why do you want to join our company?"
                                        ].map((q, i) => (
                                            <div key={i} className="p-3 bg-secondary/20 rounded-md border border-border/50">
                                                <p className="font-medium text-foreground">{q}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="gd">
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                    <CardHeader>
                                        <CardTitle>Acing Group Discussions</CardTitle>
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
                            </TabsContent>
                        </Tabs>
                    </section>



                    {/* Aptitude Resources */}
                    <section>
                        <h2 className="font-serif text-3xl font-semibold mb-8 flex items-center gap-2">
                            <BrainCircuit className="w-6 h-6 text-accent" /> Aptitude & Logic
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Quantitative Aptitude", icon: HelpCircle, topics: ["Time & Work", "Probability", "Permutation & Combination", "Percentage"] },
                                { title: "Logical Reasoning", icon: BrainCircuit, topics: ["Blood Relations", "Coding-Decoding", "Seating Arrangement", "Syllogism"] },
                                { title: "Verbal Ability", icon: MessageSquare, topics: ["Reading Comprehension", "Sentence Correction", "Synonyms & Antonyms", "Grammar"] }
                            ].map((cat, i) => (
                                <Card key={i} className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                    <CardHeader>
                                        <cat.icon className="w-8 h-8 text-accent mb-2" />
                                        <CardTitle>{cat.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {cat.topics.map((topic, j) => (
                                                <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> {topic}
                                                </li>
                                            ))}
                                        </ul>

                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default InterviewPrep;
