import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, Briefcase, Code, Camera, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teams = [
  {
    id: 1,
    name: "Team Corporate Connect",
    description: "Company relations & recruitment coordination",
    icon: Building2,
    keyPoints: ["Company outreach", "JAF processing", "MoU management", "Recruiter relations"],
    color: "from-primary to-primary/80",
  },
  {
    id: 2,
    name: "Networking & Outreach Team",
    description: "Alumni relations & external partnerships",
    icon: Users,
    keyPoints: ["Alumni engagement", "Finding leads for internship and placement opportunities", "Helping establishing networks with HRs and Companies"],
    color: "from-accent to-accent/80",
  },
  {
    id: 3,
    name: "Team Industry Interface",
    description: "Training, skill development & internships",
    icon: Briefcase,
    keyPoints: ["Training programs", "Skill assessments", "Internship coordination", "Industry collaboration"],
    color: "from-primary to-primary/80",
  },
  {
    id: 4,
    name: "Web Dev & Design Team",
    description: "Technical infrastructure & design",
    icon: Code,
    keyPoints: ["Website development", "Technical support", "Database management", "UI/UX design"],
    color: "from-accent to-accent/80",
  },
  {
    id: 5,
    name: "Content & Media Team",
    description: "Content creation & social media",
    icon: Camera,
    keyPoints: ["Social media management", "Content writing", "Photography/videography", "Brand management"],
    color: "from-primary to-primary/80",
  },
  {
    id: 6,
    name: "Event & Hospitality Team",
    description: "Event execution & recruiter hospitality",
    icon: Calendar,
    keyPoints: ["Campus drive logistics", "Venue management", "Recruiter hospitality", "Volunteer coordination"],
    color: "from-accent to-accent/80",
  },
];

const TeamStructure = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-navy-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-narrow">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
            TPC Team Structure
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Meet the dedicated teams that power the Training & Placement Cell of University of Lucknow
          </p>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="container-narrow section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => {
            const IconComponent = team.icon;
            return (
              <Card key={team.id} className="card-elevated group hover:shadow-elevated transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${team.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-serif">{team.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {team.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Key Responsibilities</p>
                    <ul className="space-y-1.5">
                      {team.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-secondary/50 py-12">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">Want to be part of our team?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join the TPC family and contribute to shaping the careers of fellow students.
          </p>
          <Link to="/#contact">
            <Button variant="default" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamStructure;
