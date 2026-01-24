import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, Presentation, Users, Cpu, Mic, BrainCircuit, Globe, Award, Zap, TrendingUp, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const SoftSkills = () => {
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
                                <Button variant="gold" size="default" className="gap-2 shadow-md">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                        <div className="md:hidden mb-6 flex justify-start">
                            <Link to="/">
                                <Button variant="gold" size="default" className="gap-2 shadow-md">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-medium text-sm uppercase tracking-wider">Professional Growth</span>
                            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                                Elevate Your <span className="text-gold-gradient">Professional Persona</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Master communication, leadership, and stay ahead with the latest tech trends.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="container-narrow space-y-20">

                    {/* Communication & Presentations */}
                    <section>
                        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
                            <div className="p-3 bg-accent/10 rounded-full">
                                <MessageSquare className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold">Communication & Presentations</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <Presentation className="w-5 h-5 text-accent" /> The Art of Presentation
                                </h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>The 10-20-30 Rule</AccordionTrigger>
                                        <AccordionContent>
                                            Guy Kawasaki's rule: 10 slides, 20 minutes, 30-point font. Keep it brief, impactful, and legible.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Body Language Excellence</AccordionTrigger>
                                        <AccordionContent>
                                            Maintain eye contact, use open gestures, and avoid crossing arms. Your non-verbal cues speak louder than words.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Storytelling Data</AccordionTrigger>
                                        <AccordionContent>
                                            Don't just show charts. Explain the narrative behind the numbers. What problem did you solve? What was the impact?
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-100 dark:border-blue-900">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Recommended Watch</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {[
                                                { title: "Your Body Language May Shape Who You Are", author: "Amy Cuddy", link: "#" },
                                                { title: "How to Speak So That People Want to Listen", author: "Julian Treasure", link: "#" }
                                            ].map((talk, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Mic className="w-4 h-4 text-accent mt-1" />
                                                    <div>
                                                        <a href={talk.link} className="font-medium hover:underline text-foreground">{talk.title}</a>
                                                        <p className="text-xs text-muted-foreground">TED Talk by {talk.author}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <Users className="w-5 h-5 text-accent" /> Effective Communication
                                </h3>
                                <div className="grid gap-4">
                                    {[
                                        { title: "The 7 Cs", desc: "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous." },
                                        { title: "Active Listening", desc: "Listen to understand, not just to respond. Paraphrase what you hear." },
                                        { title: "Email Etiquette", desc: "Use clear subject lines, professional greetings, and proofread before sending." }
                                    ].map((skill, i) => (
                                        <Card key={i} className="hover:shadow-md transition-all">
                                            <CardContent className="p-4">
                                                <h4 className="font-semibold text-foreground mb-1">{skill.title}</h4>
                                                <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tech Trends */}
                    <section className="bg-secondary/20 -mx-4 md:-mx-8 p-8 md:p-16 rounded-3xl">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="mb-4">Future Ready</Badge>
                            <h2 className="font-serif text-3xl font-semibold mb-4">Leading with Technology</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Stay relevant by understanding the disruptive technologies shaping industries today.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: BrainCircuit,
                                    color: "text-accent",
                                    title: "Artificial Intelligence",
                                    desc: "Generative AI, LLMs, and Machine Learning are automating workflows. Learn prompt engineering and AI ethics.",
                                    tags: ["GenAI", "Python", "TensorFlow"]
                                },
                                {
                                    icon: Cpu,
                                    color: "text-primary",
                                    title: "Internet of Things (IoT)",
                                    desc: "Smart devices connecting the physical and digital worlds. Impacting manufacturing, healthcare, and smart cities.",
                                    tags: ["Sensors", "Arduino", "Cloud"]
                                },
                                {
                                    icon: Globe,
                                    color: "text-accent",
                                    title: "Blockchain & Web3",
                                    desc: "Decentralized finance and secure digital identities. Moving beyond crypto to supply chain and smart contracts.",
                                    tags: ["Solidity", "Smart Contracts", "DeFi"]
                                }
                            ].map((tech, i) => (
                                <Card key={i} className="bg-background border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                    <CardHeader>
                                        <div className={`p-3 rounded-lg bg-secondary w-fit mb-4 group-hover:scale-110 transition-transform`}>
                                            <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                        </div>
                                        <CardTitle>{tech.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                            {tech.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {tech.tags.map((tag, j) => (
                                                <span key={j} className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Leadership Development */}
                    <section>
                        <h2 className="font-serif text-3xl font-semibold mb-10 flex items-center gap-2">
                            <Award className="w-6 h-6 text-accent" /> Leadership Development
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <Card className="hover:shadow-lg transition-all h-full">
                                <CardContent className="p-6 md:p-8">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-accent" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">Traits of a Modern Leader</h3>
                                            <p className="text-muted-foreground mb-4">
                                                Leadership isn't about titles. It's about influence, empathy, and driving change.
                                            </p>
                                            <ul className="space-y-2">
                                                {["Emotional Intelligence (EQ)", "Strategic Thinking", "Adaptability", "Decisiveness"].map((trait, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <UserCheck className="w-4 h-4 text-primary" /> {trait}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all h-full">
                                <CardContent className="p-6 md:p-8">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <TrendingUp className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">Growth Programs</h3>
                                            <p className="text-muted-foreground mb-4">
                                                Join our campus initiatives to build your leadership muscle.
                                            </p>
                                            <div className="space-y-3">
                                                <div className="p-3 border rounded-lg bg-secondary/50">
                                                    <p className="font-medium text-sm">Student Coordinator Program</p>
                                                    <p className="text-xs text-muted-foreground mt-0.5">Manage placement drives and lead teams.</p>
                                                </div>
                                                <div className="p-3 border rounded-lg bg-secondary/50">
                                                    <p className="font-medium text-sm">Project Lead Experience</p>
                                                    <p className="text-xs text-muted-foreground mt-0.5">Lead technical projects during hackathons.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SoftSkills;
