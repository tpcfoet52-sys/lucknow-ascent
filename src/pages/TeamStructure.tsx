import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Users,
  Briefcase,
  Code,
  Camera,
  Calendar,
  ChevronRight,
  Mail,
  Linkedin,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import uolLogo from "@/assets/uol-logo.png";
import tpcBadge from "@/assets/naac-badge.png";
import heroImage from "@/assets/university-hero-new.jpg";
import tpcLogo from "@/assets/tpc-logo.jpeg";
import drHimanshuPandey from "@/assets/dr-himanshu-pandey.jpg";
import erPavanKumarSingh from "@/assets/er-pavan-kumar-singh.jpg";
import erGauravSrivastava from "@/assets/er-gaurav-srivastava.jpg";
import erPrashantKumarSingh from "@/assets/dr-prashant-kumar-singh.png";
import riddhiSingh from "@/assets/riddhi-singh-rathore.jpg";
import studentCoordinatorsGroup from "@/assets/student-coordinators-2025-26.jpg";

const facultyMembers = [
  {
    name: "Dr. Himanshu Pandey",
    title: "Associate Professor",
    role: "T&P Cell Incharge",
    phone: "7905287870",
    email: "pandey_himanshu@lkouniv.ac.in",
    image: drHimanshuPandey
  },
  {
    name: "Er. Pavan Kumar Singh",
    title: "Assistant Professor",
    role: "Faculty Coordinator",
    phone: "9406987292",
    email: "pavanrajawat038@gmail.com",
    image: erPavanKumarSingh
  },
  {
    name: "Er. Gaurav Srivastava",
    title: "Assistant Professor",
    role: "Faculty Coordinator",
    phone: "9717681158",
    email: "gaurav.ap1793@gmail.com",
    image: erGauravSrivastava
  },
  {
    name: "Dr. Prashant Kumar Singh",
    title: "Associate Professor",
    role: "Faculty Coordinator",
    phone: "9179122557",
    email: "singh_pk@lkouniv.ac.in",
    image: erPrashantKumarSingh
  }
];

const teamStructureLinks = [
  { name: "Faculty Coordinators", href: "#faculty-coordinators" },
  { name: "Student Teams", href: "#student-teams" },
];

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  image?: string;
  branch?: string;
  year?: string;
}

interface Team {
  id: number;
  name: string;
  description: string;
  icon: typeof Building2;
  keyPoints: string[];
  members: TeamMember[];
  stats: { label: string; value: string }[];
}

const teams: Team[] = [
  {
    id: 2,
    name: "Networking & Outreach Team",
    description: "Alumni relations & external partnerships",
    icon: Users,
    keyPoints: ["Alumni engagement", "Finding leads for internship and placement opportunities", "Helping establishing networks with HRs and Companies"],
    members: [
      { id: 1, name: "Ramakant Mishra", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE" },
      { id: 2, name: "Rashmi Kushwaha", role: "Co-Lead", year: "2nd Year", branch: "BCA" },
      { id: 3, name: "Akash Singh", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 4, name: "Srishti Mishra", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 5, name: "Akash Kumar Yadav", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 6, name: "Harshit Yadav", role: "Team Member", year: "1st Year", branch: "B.Tech CSE" },
      { id: 7, name: "Astitva Bharadwaj", role: "Team Member", year: "1st Year", branch: "BCA" },
      { id: 8, name: "Riya Jainer", role: "Team Member", year: "1st Year", branch: "B.Tech EE" },
      { id: 9, name: "Divyanshu Dubey", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE" },
    ],
    stats: [
      { label: "Alumni Connected", value: "500+" },
      { label: "New Leads", value: "80+" },
      { label: "Partnerships", value: "25" },
    ],
  },
  {
    id: 1,
    name: "Team Corporate Connect",
    description: "Company relations & recruitment coordination",
    icon: Building2,
    keyPoints: ["Company outreach", "JAF processing", "MoU management", "Recruiter relations"],
    members: [
      { id: 1, name: "Kshitij Singh", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE" },
      { id: 2, name: "Aryan Tripathi", role: "Team Lead", year: "2nd Year", branch: "B.Tech EE" },
      { id: 3, name: "Abhinav Singh", role: "Team Lead", year: "2nd Year", branch: "B.Tech CSE" },
      { id: 4, name: "Aditya Swamy", role: "Team Member", year: "2nd Year", branch: "B.Tech ME" },
      { id: 5, name: "Shivaksh Singh", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI" },
      { id: 6, name: "Himanshu Mishra", role: "Team Member", year: "1st Year", branch: "B.Tech EE" },
      { id: 7, name: "Shreya Pandey", role: "Team Member", year: "1st Year", branch: "B.Tech EE" },
      { id: 8, name: "Abhay Kumar Yadav", role: "Team Member", year: "2nd Year", branch: "B.Tech CE" },
    ],
    stats: [
      { label: "Companies Reached", value: "150+" },
      { label: "MoUs Signed", value: "45" },
      { label: "JAFs Processed", value: "200+" },
    ],
  },
  {
    id: 3,
    name: "Team Industry Interface",
    description: "Training, skill development & internships",
    icon: Briefcase,
    keyPoints: ["Soft skill training", "Skill assessments", "Internship coordination", "Industry collaboration"],
    members: [
      { id: 1, name: "Prateek Jaiswal", role: "Team Lead", year: "3rd Year", branch: "B.Tech CE" },
      { id: 2, name: "Arnav Singh Chauhan", role: "Team Lead", year: "3rd Year", branch: "B.Tech" },
      { id: 3, name: "Aman Kumar Yadav", role: "Co-Lead", year: "2nd Year", branch: "B.Tech EE" },
      { id: 4, name: "Abhishek Bajpai", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CSE" },
      { id: 5, name: "Tejas Kumar Vishwakarma", role: "Team Member", year: "1st Year", branch: "BCA" },
      { id: 6, name: "Kanishka", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE" },
      { id: 7, name: "Satyam Nagar", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI" },
      { id: 8, name: "Kashvi Jaiswal", role: "Team Member", year: "1st Year", branch: "BCA" },
    ],
    stats: [
      { label: "Training Sessions", value: "60+" },
      { label: "Internships Secured", value: "300+" },
      { label: "Industry Partners", value: "40" },
    ],
  },
  {
    id: 4,
    name: "Web Dev & Design Team",
    description: "Technical infrastructure & design",
    icon: Code,
    keyPoints: ["Website development", "Technical support", "Database management", "UI/UX design"],
    members: [
      { id: 1, name: "Tejas Bharadwaj", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE" },
      { id: 2, name: "Sivasti Awasthi", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE" },
      { id: 3, name: "Aditya Sharma", role: "Co-Lead", year: "3rd Year", branch: "B.Tech CSE" },
      { id: 4, name: "Varun Sagar", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CE" },
      { id: 5, name: "Ayush Kumar Mishra", role: "Team Member", year: "2nd Year", branch: "B.Tech EE" },
      { id: 6, name: "Divyanshu Singh Chauhan", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE" },
      { id: 7, name: "Shahid Ali Mansuri", role: "Team Member", year: "1st Year", branch: "B.Tech CSE" },
      { id: 8, name: "Arti", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI" },
      { id: 9, name: "Subodh Kushwaha", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE" },
      { id: 10, name: "Piyush Singh", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE" },
    ],
    stats: [
      { label: "Features Deployed", value: "25+" },
      { label: "Uptime", value: "99.9%" },
      { label: "User Satisfaction", value: "95%" },
    ],
  },
  {
    id: 5,
    name: "Content & Media Team",
    description: "Content creation & social media",
    icon: Camera,
    keyPoints: ["Social media management", "Content writing", "Photography/videography", "Brand management"],
    members: [
      { id: 1, name: "Tanishka Soni", role: "Team Lead", year: "3rd Year", branch: "B.Tech CSE" },
      { id: 2, name: "Ishan Chawla", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 3, name: "Akriti Rao", role: "Team Member", year: "1st Year", branch: "B.Tech CSE" },
      { id: 4, name: "Prachi Aswal", role: "Team Member", year: "1st Year", branch: "BCA" },
      { id: 5, name: "Shubham Mishra", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI" },
      { id: 6, name: "Vishnu", role: "Team Member", year: "1st Year", branch: "B.Tech CE" },
      { id: 7, name: "Smriti Shukla", role: "Team Member", year: "1st Year", branch: "B.Tech ME" },
      { id: 8, name: "Anshu Pandey", role: "Team Member", year: "1st Year", branch: "B.Tech ME" },
    ],
    stats: [
      { label: "Posts Created", value: "500+" },
      { label: "Followers", value: "10K+" },
      { label: "Engagement Rate", value: "8.5%" },
    ],
  },
  {
    id: 6,
    name: "Event & Hospitality Team",
    description: "Event execution & recruiter hospitality",
    icon: Calendar,
    keyPoints: ["Campus drive logistics", "Venue management", "Recruiter hospitality", "Volunteer coordination"],
    members: [
      { id: 1, name: "Abhay Yadav", role: "Team Lead", year: "3rd Year", branch: "B.Tech CE" },
      { id: 2, name: "Aayush Aaryan", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CE" },
      { id: 3, name: "Mohd. Faisal", role: "Co-Lead", year: "3rd Year", branch: "B.Tech ECE" },
      { id: 4, name: "Jatin Yadav", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CE" },
      { id: 5, name: "Kuldeep Yadav", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 6, name: "Akshay Kumar Dubey", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 7, name: "Shubham Singh", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 8, name: "Anushka Dwivedi", role: "Team Member", year: "1st Year", branch: "B.Tech CSE" },
      { id: 9, name: "Rajvardhan Shukla", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
      { id: 10, name: "Anvi Jaiswal", role: "Team Member", year: "1st Year", branch: "B.Tech CSE" },
    ],
    stats: [
      { label: "Events Managed", value: "50+" },
      { label: "Drives Hosted", value: "120+" },
      { label: "Volunteers", value: "200+" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

const TeamStructure = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [showGroupPhoto, setShowGroupPhoto] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}


      {/* Hero Section with Background Image */}
      < section className="relative pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden" >
        {/* Background Image */}
        < div className="absolute inset-0 z-0" >
          <img
            src={heroImage}
            alt="University of Lucknow Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div >

        <div className="relative z-10 container-narrow pt-8 md:pt-12">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.img
                src={uolLogo}
                alt="University of Lucknow"
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <div className="w-px h-12 bg-border" />
              <motion.img
                src={tpcBadge}
                alt="TPC Badge"
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              TPC Team Structure
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
              Meet the dedicated teams that power the Training & Placement Cell of University of Lucknow
            </p>
          </motion.div>
        </div>
      </section >

      {/* Faculty Coordinator Section */}
      <section className="py-8 bg-secondary/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Faculty Coordinator
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers.map((faculty, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border/50 flex flex-col items-center gap-3 text-center transition-all duration-300 h-full"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center w-full">
                    <h3 className="font-serif text-sm font-bold text-foreground mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                      {faculty.name}
                    </h3>
                    <p className="text-accent text-[10px] font-semibold uppercase tracking-wider mb-1 min-h-[1.5rem] flex items-center justify-center">{faculty.title}</p>
                    <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mb-3 min-h-[1rem] flex items-center justify-center">{faculty.role}</p>

                    <div className="flex items-center gap-3 mt-auto">
                      <a href={`tel:${faculty.phone}`} className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title={faculty.phone}>
                        <Phone className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${faculty.email}`} className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title={faculty.email}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams Grid - Student Coordinators */}
      <section className="pt-10 pb-16 md:pb-24">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Student Coordinators <span className="text-gold-gradient">2025-26</span>
            </h2>
            <p className="text-muted-foreground mt-2">The dedicated student team driving TPC initiatives</p>
          </div>

          {/* Key Focus Areas */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">Campus Recruitment</span>
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">Industry Connect</span>
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">Skill Development</span>
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">Career Guidance</span>
          </div>

          {/* New TPC Lead Section */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-16">
            {/* Student Coordinators Group Photo Card - Swapped to first position */}
            <div className="bg-card rounded-xl p-4 border border-border/50 flex flex-col items-center gap-3 text-center max-w-xs w-full transition-all duration-300">
              <div
                onClick={() => setShowGroupPhoto(true)}
                className="w-full rounded-lg overflow-hidden cursor-pointer border border-border/30 hover:border-accent/50 transition-colors"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={studentCoordinatorsGroup}
                  alt="Student Coordinators 2025-26"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="font-serif text-sm font-bold text-foreground mb-1 text-center">
                  Student Coordinators 2025-26
                </h3>
              </div>
            </div>

            {/* Riddhi Singh Rathore Card - Swapped to second position */}
            <div className="bg-card rounded-xl p-4 border border-border/50 flex flex-col items-center gap-3 text-center max-w-xs w-full transition-all duration-300">
              <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20">
                <img
                  src={riddhiSingh}
                  alt="Riddhi Singh Rathore"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col items-center w-full">
                <h3 className="font-serif text-sm font-bold text-foreground mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                  Riddhi Singh Rathore
                </h3>
                <p className="text-accent text-[10px] font-semibold uppercase tracking-wider mb-1 flex items-center justify-center">
                  Student Coordinator Lead
                </p>
                <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-wide mb-3 flex items-center justify-center">2025-26</p>

                <div className="flex items-center justify-center gap-3 mt-auto">
                  <a href="mailto:singhrathoreriddhi874@gmail.com" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/riddhi-singh-rathore-997b962aa" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/riddhi_sin22754" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Group Photo Fullscreen Modal */}
          <AnimatePresence>
            {showGroupPhoto && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                onClick={() => setShowGroupPhoto(false)}
              >
                <button
                  onClick={() => setShowGroupPhoto(false)}
                  className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  src={studentCoordinatorsGroup}
                  alt="Student Coordinators 2025-26"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => {
              const IconComponent = team.icon;
              return (
                <motion.article
                  key={team.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  onClick={() => setSelectedTeam(team)}
                  className="group bg-background border border-border rounded-lg p-5 md:p-6 hover:border-accent/50 transition-colors duration-300 cursor-pointer flex flex-col h-full"
                >
                  <div className="flex flex-col items-center text-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h2 className="font-serif text-lg font-semibold text-foreground leading-tight mb-1">
                        {team.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {team.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
                      Key Responsibilities
                    </p>
                    <ul className="space-y-2 mb-4">
                      {team.keyPoints.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Team Members Preview */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex -space-x-2">
                        {team.members.slice(0, 4).map((member) => (
                          <Avatar key={member.id} className="w-8 h-8 border-2 border-background">
                            <AvatarImage src={member.image} />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-accent transition-colors">
                        View Dashboard
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section >

      {/* Team Dashboard Modal */}
      <AnimatePresence>
        {
          selectedTeam && (
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
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedTeam(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>
                </div>



                {/* Team Members */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-6">
                    Team Members
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedTeam.members.map((member, idx) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                      >
                        <Avatar className="w-24 h-24 border-4 border-background shadow-lg mb-4">
                          <AvatarImage src={member.image} className="object-cover" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div className="text-center w-full space-y-2 mb-4">
                          <h4 className="font-serif text-lg font-bold text-foreground leading-tight">{member.name}</h4>
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{member.role}</p>
                          {(member.branch || member.year) && (
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20 mt-1">
                              {member.year} {member.year && member.branch && "•"} {member.branch}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 mt-auto">
                          <a href="#" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                            <Mail className="w-4 h-4" />
                          </a>
                          <a href="#" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="p-6 md:p-8 border-t border-border bg-muted/10">
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
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence >



      {/* Minimal Footer */}
      < footer className="py-8 border-t border-border" >
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <img
                src={uolLogo}
                alt="University of Lucknow"
                className="w-8 h-8 object-contain opacity-70"
              />
              <span>Training & Placement Cell, University of Lucknow</span>
            </div>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default TeamStructure;