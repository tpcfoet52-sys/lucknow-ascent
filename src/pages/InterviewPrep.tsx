import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Users, BrainCircuit, CheckCircle2, MessageSquare, Video, FileText, ChevronRight, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InterviewPrep = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-12">
                {/* Hero Section */}
                <section className="relative py-12 md:py-20 mb-12">
                    <div className="container-narrow text-center relative">
                        {/* Back to Home Button */}
                        <div className="absolute top-0 left-0 z-20 hidden md:block">
                            <Link to="/">
                                <div className="bg-white hover:bg-yellow-400 text-black px-4 py-2 rounded shadow-md transition-colors flex items-center gap-2 font-medium text-sm">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </div>
                            </Link>
                        </div>
                        <div className="md:hidden mb-6 flex justify-start">
                            <Link to="/">
                                <div className="bg-white hover:bg-yellow-400 text-black px-4 py-2 rounded shadow-md transition-colors flex items-center gap-2 font-medium text-sm">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </div>
                            </Link>
                        </div>
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
                            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                                <TabsTrigger value="technical">Technical</TabsTrigger>
                                <TabsTrigger value="hr">HR & Behavioral</TabsTrigger>
                                <TabsTrigger value="gd">Group Discussion</TabsTrigger>
                            </TabsList>
                            <TabsContent value="technical" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Data Structures & Algorithms</CardTitle>
                                            <CardDescription>The backbone of technical interviews.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Dynamic Programming"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>System Design</CardTitle>
                                            <CardDescription>For senior or backend roles.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {["Scalability Basics", "Load Balancing", "Database Sharding", "Caching Strategies"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <ChevronRight className="w-4 h-4 text-accent" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="hr" className="space-y-6">
                                <Card>
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
                                <Card>
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

                    {/* Mock Interviews */}
                    <section className="bg-secondary/20 -mx-4 md:-mx-8 p-8 md:p-16 rounded-3xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">Practice Makes Perfect</span>
                                <h2 className="font-serif text-3xl font-semibold mb-4">Mock Interviews</h2>
                                <p className="text-muted-foreground mb-6">
                                    Simulate the real interview experience. Schedule a 1:1 session with alumni or use our AI-powered mock interview tool.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-background rounded-lg shadow-sm">
                                            <Users className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Alumni Mentorship</h4>
                                            <p className="text-sm text-muted-foreground">Connect with seniors working in top product companies.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-background rounded-lg shadow-sm">
                                            <BrainCircuit className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">AI Interview Bot</h4>
                                            <p className="text-sm text-muted-foreground">Instant feedback on your tone, pace, and answer structure.</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="mt-8 gap-2">
                                    <Video className="w-4 h-4" /> Schedule Mock Interview
                                </Button>
                            </div>
                            <div className="relative">
                                {/* Abstract visual representation */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-2xl blur-2xl transform rotate-6"></div>
                                <Card className="relative z-10 border-border/50 shadow-lg">
                                    <CardHeader>
                                        <CardTitle>Upcoming Mock Sessions</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            { type: "Technical Round", mentor: "Ex-Google Engineer", time: "Tomorrow, 4 PM" },
                                            { type: "HR Discussion", mentor: "Senior HR Manager", time: "Sat, 11 AM" },
                                            { type: "System Design", mentor: "Tech Lead, Amazon", time: "Sun, 2 PM" }
                                        ].map((session, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                                                <div>
                                                    <p className="font-medium text-foreground">{session.type}</p>
                                                    <p className="text-xs text-muted-foreground">{session.mentor}</p>
                                                </div>
                                                <span className="text-xs font-semibold bg-background px-2 py-1 rounded border shadow-sm">
                                                    {session.time}
                                                </span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
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
                                <Card key={i} className="hover:shadow-md transition-all">
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
                                        <Button variant="link" className="px-0 mt-4 text-accent">
                                            Practice Sets <ChevronRight className="w-4 h-4 ml-1" />
                                        </Button>
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
