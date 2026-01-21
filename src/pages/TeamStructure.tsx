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
  Phone,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import uolLogo from "@/assets/uol-logo.png";
import tpcBadge from "@/assets/tpc-badge.png";
import heroImage from "@/assets/university-hero.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  image?: string;
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
    id: 1,
    name: "Team Corporate Connect",
    description: "Company relations & recruitment coordination",
    icon: Building2,
    keyPoints: ["Company outreach", "JAF processing", "MoU management", "Recruiter relations"],
    members: [
      { id: 1, name: "Rahul Sharma", role: "Team Lead" },
      { id: 2, name: "Priya Gupta", role: "Corporate Coordinator" },
      { id: 3, name: "Amit Kumar", role: "Recruiter Relations" },
      { id: 4, name: "Sneha Singh", role: "MoU Manager" },
    ],
    stats: [
      { label: "Companies Reached", value: "150+" },
      { label: "MoUs Signed", value: "45" },
      { label: "JAFs Processed", value: "200+" },
    ],
  },
  {
    id: 2,
    name: "Networking & Outreach Team",
    description: "Alumni relations & external partnerships",
    icon: Users,
    keyPoints: ["Alumni engagement", "Finding leads for internship and placement opportunities", "Helping establishing networks with HRs and Companies"],
    members: [
      { id: 1, name: "Vikram Patel", role: "Team Lead" },
      { id: 2, name: "Ananya Mishra", role: "Alumni Coordinator" },
      { id: 3, name: "Rohit Verma", role: "Partnership Manager" },
    ],
    stats: [
      { label: "Alumni Connected", value: "500+" },
      { label: "New Leads", value: "80+" },
      { label: "Partnerships", value: "25" },
    ],
  },
  {
    id: 3,
    name: "Team Industry Interface",
    description: "Training, skill development & internships",
    icon: Briefcase,
    keyPoints: ["Training programs", "Skill assessments", "Internship coordination", "Industry collaboration"],
    members: [
      { id: 1, name: "Kavita Joshi", role: "Team Lead" },
      { id: 2, name: "Arjun Reddy", role: "Training Coordinator" },
      { id: 3, name: "Meera Nair", role: "Internship Manager" },
      { id: 4, name: "Sanjay Tiwari", role: "Skill Assessment Head" },
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
      { id: 1, name: "Dev Sharma", role: "Team Lead" },
      { id: 2, name: "Riya Agarwal", role: "Frontend Developer" },
      { id: 3, name: "Karan Mehta", role: "Backend Developer" },
      { id: 4, name: "Pooja Yadav", role: "UI/UX Designer" },
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
      { id: 1, name: "Neha Kapoor", role: "Team Lead" },
      { id: 2, name: "Aditya Saxena", role: "Content Writer" },
      { id: 3, name: "Shreya Das", role: "Social Media Manager" },
      { id: 4, name: "Varun Khanna", role: "Photographer" },
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
      { id: 1, name: "Ishaan Malhotra", role: "Team Lead" },
      { id: 2, name: "Tanvi Bhatt", role: "Event Coordinator" },
      { id: 3, name: "Rajat Sinha", role: "Hospitality Manager" },
      { id: 4, name: "Kriti Jain", role: "Volunteer Head" },
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

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={uolLogo} 
                alt="University of Lucknow" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div className="hidden sm:block">
                <p className="font-serif font-semibold text-sm md:text-base leading-tight text-foreground">
                  University of Lucknow
                </p>
                <p className="text-xs tracking-wide text-muted-foreground">
                  Training & Placement Cell
                </p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="University of Lucknow Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>
        
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
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <div className="w-px h-12 bg-border" />
              <motion.img 
                src={tpcBadge} 
                alt="TPC Badge" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
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
      </section>

      {/* Teams Grid */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => {
              const IconComponent = team.icon;
              return (
                <motion.article 
                  key={team.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  onClick={() => setSelectedTeam(team)}
                  className="group bg-background border border-border rounded-lg p-6 md:p-8 hover:border-accent/50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <motion.div 
                      className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <IconComponent className="h-5 w-5 text-primary" />
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
                  
                  <div className="border-t border-border pt-5">
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
      </section>

      {/* Team Dashboard Modal */}
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

              {/* Dashboard Stats */}
              <div className="p-6 md:p-8 border-b border-border">
                <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
                  Team Statistics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedTeam.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-muted/30 rounded-lg p-4 text-center"
                    >
                      <p className="text-2xl md:text-3xl font-serif font-bold text-accent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="p-6 md:p-8">
                <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-6">
                  Team Members
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedTeam.members.map((member, idx) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors"
                    >
                      <Avatar className="w-12 h-12 border-2 border-accent/20">
                        <AvatarImage src={member.image} />
                        <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{member.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{member.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </button>
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
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5 border-t border-border">
        <div className="container-narrow">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Want to be part of our team?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join the TPC family and contribute to shaping the careers of fellow students at the University of Lucknow.
            </p>
            <Link to="/#contact">
              <Button variant="default" size="lg" className="px-8">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-border">
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
      </footer>
    </div>
  );
};

export default TeamStructure;
