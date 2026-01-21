import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, Briefcase, Code, Camera, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import uolLogo from "@/assets/uol-logo.png";
import tpcBadge from "@/assets/tpc-badge.png";

const teams = [
  {
    id: 1,
    name: "Team Corporate Connect",
    description: "Company relations & recruitment coordination",
    icon: Building2,
    keyPoints: ["Company outreach", "JAF processing", "MoU management", "Recruiter relations"],
  },
  {
    id: 2,
    name: "Networking & Outreach Team",
    description: "Alumni relations & external partnerships",
    icon: Users,
    keyPoints: ["Alumni engagement", "Finding leads for internship and placement opportunities", "Helping establishing networks with HRs and Companies"],
  },
  {
    id: 3,
    name: "Team Industry Interface",
    description: "Training, skill development & internships",
    icon: Briefcase,
    keyPoints: ["Training programs", "Skill assessments", "Internship coordination", "Industry collaboration"],
  },
  {
    id: 4,
    name: "Web Dev & Design Team",
    description: "Technical infrastructure & design",
    icon: Code,
    keyPoints: ["Website development", "Technical support", "Database management", "UI/UX design"],
  },
  {
    id: 5,
    name: "Content & Media Team",
    description: "Content creation & social media",
    icon: Camera,
    keyPoints: ["Social media management", "Content writing", "Photography/videography", "Brand management"],
  },
  {
    id: 6,
    name: "Event & Hospitality Team",
    description: "Event execution & recruiter hospitality",
    icon: Calendar,
    keyPoints: ["Campus drive logistics", "Venue management", "Recruiter hospitality", "Volunteer coordination"],
  },
];

const TeamStructure = () => {
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

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={uolLogo} 
                alt="University of Lucknow" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <div className="w-px h-12 bg-border" />
              <img 
                src={tpcBadge} 
                alt="TPC Badge" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              TPC Team Structure
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
              Meet the dedicated teams that power the Training & Placement Cell of University of Lucknow
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => {
              const IconComponent = team.icon;
              return (
                <article 
                  key={team.id} 
                  className="group bg-background border border-border rounded-lg p-6 md:p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
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
                    <ul className="space-y-2">
                      {team.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5 border-t border-border">
        <div className="container-narrow">
          <div className="max-w-lg mx-auto text-center">
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
          </div>
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
