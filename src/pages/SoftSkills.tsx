import { motion } from "framer-motion";
import { MessageSquare, Presentation, Users, Mic, BrainCircuit, Award, Zap, TrendingUp, UserCheck, Volume2, UsersRound, Briefcase, Scale, Shirt, Heart, Clock, Handshake } from "lucide-react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import PageBackground from "@/components/PageBackground";
import heroImage from "@/assets/university-hero-new.jpg";

const SoftSkills = () => {
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
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Professional Growth</span>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                            Elevate Your <span className="text-gold-gradient">Professional Persona</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Master communication, leadership, and essential workplace competencies to stand out in today's competitive landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow relative z-10">
                <div className="container-narrow space-y-16 pb-16">

                    {/* Section 1: Communication & Presentations */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <MessageSquare className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Communication & Presentations</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Presentation className="w-4 h-4 text-blue-600" /> The Art of Presentation
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
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Recommended Watch</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2.5">
                                            {[
                                                { title: "Your Body Language May Shape Who You Are", author: "Amy Cuddy", link: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc" },
                                                { title: "How to Speak So That People Want to Listen", author: "Julian Treasure", link: "https://www.youtube.com/watch?v=eIho2S0ZahI" }
                                            ].map((talk, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Mic className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <a href={talk.link} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline text-foreground text-sm">{talk.title}</a>
                                                        <p className="text-xs text-muted-foreground">TED Talk by {talk.author}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Users className="w-4 h-4 text-blue-600" /> Effective Communication
                                </h3>
                                <div className="grid gap-3">
                                    {[
                                        { title: "The 7 Cs", desc: "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous." },
                                        { title: "Active Listening", desc: "Listen to understand, not just to respond. Paraphrase what you hear." },
                                        { title: "Email Etiquette", desc: "Use clear subject lines, professional greetings, and proofread before sending." }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -3 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-foreground mb-1 text-sm">{skill.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 2: Public Speaking */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-secondary/20 -mx-4 md:-mx-8 px-4 md:px-8 py-10 md:py-14 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Volume2 className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Public Speaking</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Mic className="w-4 h-4 text-blue-600" /> Mastering the Stage
                                </h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="ps-1">
                                        <AccordionTrigger>Structuring Your Speech</AccordionTrigger>
                                        <AccordionContent>
                                            Follow the opening-body-conclusion framework. Begin with a hook, present your core argument with supporting evidence, and close with a memorable takeaway.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="ps-2">
                                        <AccordionTrigger>Overcoming Stage Anxiety</AccordionTrigger>
                                        <AccordionContent>
                                            Practice deep breathing, rehearse thoroughly, and focus on your message rather than the audience. Familiarity with content builds confidence.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="ps-3">
                                        <AccordionTrigger>Voice Modulation</AccordionTrigger>
                                        <AccordionContent>
                                            Vary your pitch, pace, and volume to maintain audience engagement. Strategic pauses add emphasis and allow ideas to resonate.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Presentation className="w-4 h-4 text-blue-600" /> Practical Techniques
                                </h3>
                                <div className="grid gap-3">
                                    {[
                                        { title: "Audience Analysis", desc: "Tailor your language, tone, and examples to suit the audience demographic and expectations." },
                                        { title: "Visual Aid Integration", desc: "Use slides as support, not a script. Ensure visual aids complement your narrative." },
                                        { title: "Impromptu Speaking", desc: "Practice the PREP method: Point, Reason, Example, Point. Ideal for unrehearsed scenarios." }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -3 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-foreground mb-1 text-sm">{skill.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3: Leadership Development */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Award className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Leadership Development</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <motion.div whileHover={{ y: -3 }}>
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 h-full hover:shadow-md hover:border-accent/30">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                                    <Zap className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">Traits of a Modern Leader</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Leadership isn't about titles. It's about influence, empathy, and driving change.
                                                </p>
                                                <ul className="space-y-1.5">
                                                    {["Emotional Intelligence (EQ)", "Strategic Thinking", "Adaptability", "Decisiveness"].map((trait, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                            <UserCheck className="w-4 h-4 text-blue-600" /> {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ y: -3 }}>
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 h-full hover:shadow-md hover:border-accent/30">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                                    <TrendingUp className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">Growth Programs</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Join our campus initiatives to build your leadership muscle.
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="p-2.5 border rounded-lg bg-secondary/50">
                                                        <p className="font-medium text-sm">Student Coordinator Program</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">Manage placement drives and lead teams.</p>
                                                    </div>
                                                    <div className="p-2.5 border rounded-lg bg-secondary/50">
                                                        <p className="font-medium text-sm">Project Lead Experience</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">Lead technical projects during hackathons.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Section 4: Emotional Intelligence */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-secondary/20 -mx-4 md:-mx-8 px-4 md:px-8 py-10 md:py-14 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Heart className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Emotional Intelligence</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: Heart,
                                    color: "text-blue-600",
                                    bgColor: "bg-blue-600/10",
                                    title: "Self-Awareness",
                                    desc: "Recognise your own emotions, strengths, and areas for improvement. Self-awareness is the foundation of emotional intelligence.",
                                    tags: ["Self-Reflection", "Mindfulness", "Growth Mindset"]
                                },
                                {
                                    icon: Users,
                                    color: "text-blue-600",
                                    bgColor: "bg-blue-600/10",
                                    title: "Empathy in Practice",
                                    desc: "Understand and share the feelings of others. Empathetic professionals build stronger relationships and resolve conflicts more effectively.",
                                    tags: ["Active Listening", "Perspective-Taking", "Compassion"]
                                },
                                {
                                    icon: BrainCircuit,
                                    color: "text-blue-600",
                                    bgColor: "bg-blue-600/10",
                                    title: "Emotional Regulation",
                                    desc: "Manage stress, control impulses, and respond thoughtfully rather than reactively. Essential for high-pressure professional environments.",
                                    tags: ["Stress Management", "Composure", "Resilience"]
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="h-full"
                                >
                                    <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 group hover:shadow-md hover:border-accent/30 h-full">
                                        <CardHeader className="pb-2">
                                            <div className={`p-2.5 rounded-lg ${item.bgColor} w-fit mb-2`}>
                                                <item.icon className={`w-6 h-6 ${item.color}`} />
                                            </div>
                                            <CardTitle className="text-base">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {item.tags.map((tag, j) => (
                                                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-0.5 rounded text-muted-foreground">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 5: Workplace Ethics */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Scale className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Workplace Ethics</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <motion.div whileHover={{ y: -3 }}>
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 h-full hover:shadow-md hover:border-accent/30">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                                    <Scale className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Integrity</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Upholding ethical standards builds trust, credibility, and long-term professional reputation.
                                                </p>
                                                <ul className="space-y-1.5">
                                                    {["Honesty and Transparency", "Respect for Confidentiality", "Accountability in Deliverables", "Fair Treatment of Colleagues"].map((trait, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                            <UserCheck className="w-4 h-4 text-blue-600" /> {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ y: -3 }}>
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 h-full hover:shadow-md hover:border-accent/30">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                                    <Briefcase className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">Corporate Conduct</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Understanding workplace norms ensures a smooth transition from academic to professional life.
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="p-2.5 border rounded-lg bg-secondary/50">
                                                        <p className="font-medium text-sm">Conflict Resolution</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">Address disagreements constructively through dialogue and mediation.</p>
                                                    </div>
                                                    <div className="p-2.5 border rounded-lg bg-secondary/50">
                                                        <p className="font-medium text-sm">Workplace Compliance</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">Adhere to organisational policies, anti-harassment guidelines, and data protection protocols.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Section 6: Corporate Grooming */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-secondary/20 -mx-4 md:-mx-8 px-4 md:px-8 py-10 md:py-14 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Shirt className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Corporate Grooming</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Shirt className="w-4 h-4 text-blue-600" /> Professional Appearance
                                </h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="cg-1">
                                        <AccordionTrigger>Corporate Dress Code</AccordionTrigger>
                                        <AccordionContent>
                                            Understand the distinction between formal, business casual, and smart casual attire. Dress appropriately for interviews, presentations, and workplace settings.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="cg-2">
                                        <AccordionTrigger>Personal Hygiene and Presentation</AccordionTrigger>
                                        <AccordionContent>
                                            Maintain a neat, clean, and well-groomed appearance. First impressions are often formed within the initial few seconds of an interaction.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="cg-3">
                                        <AccordionTrigger>Digital Presence</AccordionTrigger>
                                        <AccordionContent>
                                            Maintain a professional LinkedIn profile, use formal email addresses, and ensure social media activity reflects a positive professional image.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Award className="w-4 h-4 text-blue-600" /> Business Etiquette
                                </h3>
                                <div className="grid gap-3">
                                    {[
                                        { title: "Meeting Conduct", desc: "Arrive on time, prepare an agenda, listen actively, and follow up with action items after meetings." },
                                        { title: "Dining Etiquette", desc: "Familiarise yourself with formal dining norms often assessed during corporate lunches and networking events." },
                                        { title: "Networking Skills", desc: "Introduce yourself confidently, exchange business cards professionally, and maintain meaningful follow-ups." }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -3 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-foreground mb-1 text-sm">{skill.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 7: Time Management */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Clock className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Time Management</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <motion.div whileHover={{ y: -3 }}>
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 h-full hover:shadow-md hover:border-accent/30">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                                    <Clock className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">Planning and Prioritisation</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Effective time management begins with clear goal-setting and disciplined prioritisation of tasks.
                                                </p>
                                                <ul className="space-y-1.5">
                                                    {["Eisenhower Matrix (Urgent vs. Important)", "SMART Goal Framework", "Daily and Weekly Planning", "Eliminating Time Wasters"].map((trait, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                            <UserCheck className="w-4 h-4 text-blue-600" /> {trait}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ y: -3 }}>
                                <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 h-full hover:shadow-md hover:border-accent/30">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                                    <TrendingUp className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">Productivity Techniques</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Adopt proven frameworks to maximise output and maintain consistent performance.
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="p-2.5 border rounded-lg bg-secondary/50">
                                                        <p className="font-medium text-sm">Pomodoro Technique</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">Work in focused 25-minute intervals with short breaks to sustain concentration.</p>
                                                    </div>
                                                    <div className="p-2.5 border rounded-lg bg-secondary/50">
                                                        <p className="font-medium text-sm">Time Blocking</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">Allocate dedicated time slots for specific tasks to reduce multitasking and improve focus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Section 8: Teamwork & Collaboration */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-secondary/20 -mx-4 md:-mx-8 px-4 md:px-8 py-10 md:py-14 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-accent/10 rounded-xl">
                                <Handshake className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">Teamwork & Collaboration</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <UsersRound className="w-4 h-4 text-blue-600" /> Collaborative Skills
                                </h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="tw-1">
                                        <AccordionTrigger>Defining Roles and Responsibilities</AccordionTrigger>
                                        <AccordionContent>
                                            Clearly assign roles within a team to ensure accountability. Each member should understand their contribution towards the shared objective.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="tw-2">
                                        <AccordionTrigger>Effective Delegation</AccordionTrigger>
                                        <AccordionContent>
                                            Distribute tasks based on individual strengths and expertise. Trust team members to deliver while providing guidance and support as needed.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="tw-3">
                                        <AccordionTrigger>Cross-Functional Coordination</AccordionTrigger>
                                        <AccordionContent>
                                            Learn to work effectively with professionals from different disciplines. Interdepartmental collaboration is essential in modern workplaces.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Handshake className="w-4 h-4 text-blue-600" /> Building Team Synergy
                                </h3>
                                <div className="grid gap-3">
                                    {[
                                        { title: "Constructive Feedback", desc: "Provide and receive feedback professionally. Focus on specific behaviours and outcomes rather than personal attributes." },
                                        { title: "Shared Accountability", desc: "Take collective ownership of results. Celebrate team achievements and learn from setbacks together." },
                                        { title: "Remote Collaboration", desc: "Master virtual communication tools and practices to maintain productivity and cohesion in distributed teams." }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -3 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Card className="rounded-xl border border-border/50 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-foreground mb-1 text-sm">{skill.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SoftSkills;
