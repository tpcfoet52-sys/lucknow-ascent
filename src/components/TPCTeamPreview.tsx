import { motion } from "framer-motion";
import { Building2, Users, Briefcase, Code, Camera, Calendar, ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import drHimanshuPandey from "@/assets/dr-himanshu-pandey.jpg";
import erPavanKumarSingh from "@/assets/er-pavan-kumar-singh.jpg";
import erGauravSrivastava from "@/assets/er-gaurav-srivastava.jpg";
import erPrashantKumarSingh from "@/assets/dr-prashant-kumar-singh.png";
import erRoliKushwaha from "@/assets/er-roli-kushwaha.jpg";
import erSonamSingh from "@/assets/er-sonam-singh.jpg";
import erMarutiMaurya from "@/assets/er-maruti-maurya.jpg";
import erNamitaSrivastava from "@/assets/er-namita-srivastava.png";
import riddhiSingh from "@/assets/riddhi-singh-rathore.jpg";
import akashSingh from "@/assets/akash-singh-new.jpg";
import srishtiMishra from "@/assets/srishti-mishra.jpg";

const facultyMembers = [
    { name: "Dr. Himanshu Pandey", title: "Associate Professor", phone: "7905287870", email: "pandey_himanshu@lkouniv.ac.in", image: drHimanshuPandey },
    { name: "Er. Pavan Kumar Singh", title: "Assistant Professor", phone: "9406987292", email: "pavanrajawat038@gmail.com", image: erPavanKumarSingh },
    { name: "Er. Gaurav Srivastava", title: "Assistant Professor", phone: "9717681158", email: "gaurav.ap1793@gmail.com", image: erGauravSrivastava },
    { name: "Dr. Prashant Kumar Singh", title: "Associate Professor", phone: "9179122557", email: "singh_pk@lkouniv.ac.in", image: erPrashantKumarSingh },
    { name: "Er. Roli Kushwaha", title: "Assistant Professor", phone: "7007538905", email: "rolikushwaha.academics22@gmail.com", image: erRoliKushwaha },
    { name: "Er. Sonam Singh", title: "Assistant Professor", phone: "7007928931", email: "ssinghsonam061@gmail.com", image: erSonamSingh },
    { name: "Er. Maruti Maurya", title: "Assistant Professor", phone: "7020464299", email: "maurya_maruti@lkouniv.ac.in", image: erMarutiMaurya },
    { name: "Er. Namita Srivastava", title: "Assistant Professor", phone: "9651314977", email: "namitas25@gmail.com", image: erNamitaSrivastava },
];

const teamLeads = [
    { name: "Riddhi Singh Rathore", role: "Coordinator Lead", image: riddhiSingh },
    { name: "Akash Singh", role: "Networking Co-Lead", image: akashSingh },
    { name: "Srishti Mishra", role: "Networking Team", image: srishtiMishra },
];

const teamsPreview = [
    { id: 2, name: "Networking & Outreach", icon: Users, members: 9 },
    { id: 1, name: "Corporate Connect", icon: Building2, members: 8 },
    { id: 3, name: "Industry Interface", icon: Briefcase, members: 8 },
    { id: 4, name: "Web Dev & Design", icon: Code, members: 10 },
    { id: 5, name: "Content & Media", icon: Camera, members: 8 },
    { id: 6, name: "Event & Hospitality", icon: Calendar, members: 10 },
];

const TPCTeamPreview = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-row items-center justify-between mb-8 gap-4"
                >
                    <div>
                        <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Team</span>
                        <h2 className="heading-display text-2xl md:text-3xl text-foreground mt-2">
                            TPC <span className="text-gold-gradient">Team Structure</span>
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-md text-sm">
                            Meet the dedicated faculty and student coordinators powering our placements
                        </p>
                    </div>
                    <Link to="/team-structure" className="flex-shrink-0">
                        <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                            View Full Team
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>

                {/* Faculty Coordinators Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-xl p-5 md:p-6 border border-border/50 mb-6"
                >
                    <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-5 text-center">Faculty Coordinators</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {facultyMembers.map((faculty, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <Avatar className="w-14 h-14 md:w-16 md:h-16 border-2 border-accent/30 mb-2">
                                    <AvatarImage src={faculty.image} className="object-cover" />
                                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                                        {faculty.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <p className="text-xs font-medium text-foreground leading-tight">{faculty.name}</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5">{faculty.title}</p>
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
                </motion.div>

                {/* Student Teams Section - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-xl p-5 border border-border/50"
                >
                    <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">Student Teams</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {teamsPreview.map((team, idx) => {
                            const IconComponent = team.icon;
                            return (
                                <Link
                                    key={idx}
                                    to={`/team-structure?team=${team.id}`}
                                    className="group flex items-center gap-3 p-3 bg-background rounded-lg border border-border/30 hover:border-accent hover:bg-accent/5 hover:shadow-md transition-all cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <IconComponent className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium text-foreground group-hover:text-accent truncate transition-colors">{team.name}</p>
                                        <p className="text-[10px] text-muted-foreground">{team.members} members</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TPCTeamPreview;
