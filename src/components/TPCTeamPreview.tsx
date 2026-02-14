import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, X, Linkedin, ChevronDown } from "lucide-react";


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { teams, facultyMembers, teamLeads, Team } from "@/data/teamData";

const dropdownVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" as const },
    visible: { height: "auto", opacity: 1, overflow: "visible" as const, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
    exit: { height: 0, opacity: 0, overflow: "hidden" as const, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const TPCTeamPreview = () => {
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <section className="section-padding bg-secondary/30 relative">
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Team</span>
                    <h2 className="heading-display text-2xl md:text-3xl text-foreground mt-2">
                        TPC <span className="text-gold-gradient">Team Structure</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
                        Meet the dedicated faculty and student coordinators powering our placements
                    </p>
                </motion.div>

                {/* Faculty Coordinators Section - Dropdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-xl border border-border/50 mb-6"
                >
                    <button
                        onClick={() => toggleSection("faculty")}
                        className="w-full flex items-center justify-start relative p-5 md:p-6 cursor-pointer group"
                    >
                        <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Faculty Coordinators</h3>
                        <motion.div
                            className="absolute right-5 md:right-6 p-1.5 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors"
                            animate={{ rotate: openSections["faculty"] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5 text-blue-600" />
                        </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                        {openSections["faculty"] && (
                            <motion.div
                                key="faculty-content"
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="px-5 md:px-6 pb-5 md:pb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                        {facultyMembers.map((faculty, idx) => (
                                            <div key={idx} className="flex flex-col items-center text-center group">
                                                <div className="relative mb-4">
                                                    <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-accent/30 group-hover:border-accent transition-colors duration-300 shadow-md group-hover:shadow-lg">
                                                        <AvatarImage src={faculty.image} className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                                                            {faculty.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                                        {faculty.role}
                                                    </div>
                                                </div>
                                                <p className="text-sm font-semibold text-foreground leading-tight mt-3">{faculty.name}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{faculty.title}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <a href={`tel:${faculty.phone}`} className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title={faculty.phone}>
                                                        <Phone className="w-3 h-3" />
                                                    </a>
                                                    <a href={`mailto:${faculty.email}`} className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title={faculty.email}>
                                                        <Mail className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Student Coordinators Section - Dropdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-xl border border-border/50 mb-6"
                >
                    <button
                        onClick={() => toggleSection("students")}
                        className="w-full flex items-center justify-start relative p-5 md:p-6 cursor-pointer group"
                    >
                        <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Student Coordinators 2025-26</h3>
                        <motion.div
                            className="absolute right-5 md:right-6 p-1.5 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors"
                            animate={{ rotate: openSections["students"] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5 text-blue-600" />
                        </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                        {openSections["students"] && (
                            <motion.div
                                key="students-content"
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="px-5 md:px-6 pb-5 md:pb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center items-center mx-auto">
                                        {teamLeads.map((lead, idx) => {
                                            const isGroupPhoto = lead.name === "Student Coordinators";

                                            if (isGroupPhoto) {
                                                return (
                                                    <Dialog key={idx}>
                                                        <DialogTrigger asChild>
                                                            <div className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[280px]">
                                                                <div className="relative mb-3 w-full">
                                                                    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden border-2 border-accent/30 group-hover:border-accent group-hover:shadow-lg transition-all duration-300">
                                                                        <img
                                                                            src={lead.image}
                                                                            alt={lead.name}
                                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                        />
                                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                                            <span className="bg-background/80 text-foreground text-xs px-3 py-1 rounded-full backdrop-blur-sm">View Full Image</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-4 py-1 rounded-full shadow-sm whitespace-nowrap z-10">
                                                                        {lead.role}
                                                                    </div>
                                                                </div>
                                                                <h4 className="text-lg font-bold text-foreground mt-5">{lead.name}</h4>
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-[90vw] md:max-w-4xl p-0 bg-transparent border-none shadow-none [&>button]:hidden">
                                                            <div className="relative">
                                                                <DialogClose className="absolute -top-12 right-0 md:-right-12 p-2 bg-white text-black hover:bg-accent hover:text-accent-foreground rounded-full shadow-lg border border-border/10 transition-all duration-300 group z-50">
                                                                    <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                                                                </DialogClose>
                                                                <img
                                                                    src={lead.image}
                                                                    alt={lead.name}
                                                                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                                                />
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                );
                                            }

                                            return (
                                                <div key={idx} className="flex flex-col items-center text-center group">
                                                    <div className="relative mb-4">
                                                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors duration-300 shadow-md group-hover:shadow-lg">
                                                            <img
                                                                src={lead.image}
                                                                alt={lead.name}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                                            {lead.role}
                                                        </div>
                                                    </div>
                                                    <h4 className="text-lg font-bold text-foreground mt-3">{lead.name}</h4>
                                                    {/* Social Icons for Riddhi */}
                                                    {lead.linkedin && (
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <a href={`mailto:${lead.email}`} className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title={lead.email}>
                                                                <Mail className="w-3 h-3" />
                                                            </a>
                                                            <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title="LinkedIn">
                                                                <Linkedin className="w-3 h-3" />
                                                            </a>
                                                            <a href={lead.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title="X">
                                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Divider between coordinators and teams */}
                                    <div className="my-6 border-t border-border/50" />
                                    <h4 className="text-xs font-medium text-gold-gradient uppercase tracking-wider text-center mb-4">Student Teams</h4>

                                    {/* Student Teams Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {teams.map((team, idx) => {
                                            const IconComponent = team.icon;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    onClick={() => setSelectedTeam(team)}
                                                    whileHover={{ y: -5 }}
                                                    className="group flex items-center gap-4 p-5 bg-background rounded-xl border border-border/30 hover:border-accent hover:bg-accent/5 hover:shadow-md transition-all cursor-pointer shadow-sm"
                                                >
                                                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                                        <IconComponent className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-semibold text-foreground group-hover:text-accent truncate transition-colors">{team.name}</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">{team.members.length} members</p>
                                                    </div>
                                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Team Dashboard Modal - Copied and adapted from TeamStructure.tsx */}
            <AnimatePresence>
                {selectedTeam && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedTeam(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Dashboard Header */}
                            <div className="relative p-6 md:p-8 border-b border-border">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
                                <div className="relative flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <selectedTeam.icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <div>
                                            <h2 className="font-serif text-2xl font-semibold text-foreground">
                                                {selectedTeam.name}
                                            </h2>
                                            <p className="text-muted-foreground">{selectedTeam.description}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedTeam(null)}
                                        className="p-2 bg-white text-black hover:bg-accent hover:text-accent-foreground rounded-full shadow-lg border border-border/10 transition-all duration-300 group"
                                    >
                                        <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
                                    </button>
                                </div>
                            </div>

                            {/* Key Responsibilities */}
                            <div className="p-6 md:p-8 border-b border-border bg-muted/10">
                                <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
                                    Key Responsibilities
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {selectedTeam.keyPoints.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Team Members */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-6">
                                    Team Members
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {selectedTeam.members.map((member, idx) => (
                                        <motion.div
                                            key={member.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -5 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex flex-col items-center p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all hover:border-accent/30"
                                        >
                                            <Avatar className="w-20 h-20 border-3 border-background shadow-lg mb-3">
                                                <AvatarImage src={member.image} className="object-cover" />
                                                <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>

                                            <div className="text-center w-full space-y-1 mb-3">
                                                <h4 className="font-serif text-sm font-bold text-foreground leading-tight">{member.name}</h4>
                                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{member.role}</p>
                                                {(member.branch || member.year) && (
                                                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-semibold rounded-full border border-accent/20">
                                                        {member.year} {member.year && member.branch && "•"} {member.branch}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 mt-auto justify-center w-full">
                                                {member.email ? (
                                                    <a href={`mailto:${member.email}`} className="p-2 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                        <Mail className="w-3.5 h-3.5" />
                                                    </a>
                                                ) : (
                                                    <button disabled className="p-2 bg-background/50 border border-border/50 rounded-full text-muted-foreground cursor-not-allowed">
                                                        <Mail className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                                {member.linkedin ? (
                                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                                                        <Linkedin className="w-3.5 h-3.5" />
                                                    </a>
                                                ) : (
                                                    <button disabled className="p-2 bg-background/50 border border-border/50 rounded-full text-muted-foreground cursor-not-allowed">
                                                        <Linkedin className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TPCTeamPreview;
