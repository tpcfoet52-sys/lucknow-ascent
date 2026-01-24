import { motion } from "framer-motion";
import { FileText, BookOpen, UserCheck, Calendar, ExternalLink, LogIn } from "lucide-react";
import { Button } from "./ui/button";

const resources = [
  {
    icon: FileText,
    title: "Resume Building",
    description: "Professional templates and expert tips to craft an impactful resume.",
    link: "#",
  },
  {
    icon: BookOpen,
    title: "Interview Preparation",
    description: "Curated guides, mock interviews, and aptitude test resources.",
    link: "#",
  },
  {
    icon: UserCheck,
    title: "Soft Skills Training",
    description: "Communication, presentation, and leadership development programs.",
    link: "#",
  },
  {
    icon: Calendar,
    title: "Placement Calendar",
    description: "Stay updated with upcoming drives, deadlines, and events.",
    link: "#",
  },
];

const upcomingEvents = [
  { date: "Jan 20", company: "Microsoft", type: "Campus Drive" },
  { date: "Jan 25", company: "Deloitte", type: "Pre-Placement Talk" },
  { date: "Feb 01", company: "Amazon", type: "Online Assessment" },
];

const StudentCorner = () => {
  return (
    <section id="students" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Student Resources</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Prepare for Your <span className="text-gold-gradient">Dream Career</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-lg">
            Access comprehensive resources designed to help you excel in interviews and secure your ideal placement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resources Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-card rounded-sm p-6 shadow-elevated-sm border border-border/50 hover:shadow-elevated-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {resource.description}
                </p>
                <div className="flex items-center gap-1 text-accent text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <LogIn className="w-6 h-6 text-accent" />
                <h3 className="font-serif font-semibold text-lg text-primary-foreground">Placement Portal</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Access your dashboard, track applications, and update your profile.
              </p>
              <Button variant="gold" className="w-full">
                Student Login
              </Button>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-sm p-6 shadow-elevated-sm border border-border/50"
            >
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-accent/10 flex flex-col items-center justify-center">
                      <span className="text-xs text-accent font-medium">{event.date.split(" ")[0]}</span>
                      <span className="text-sm text-accent font-bold">{event.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{event.company}</p>
                      <p className="text-xs text-muted-foreground">{event.type}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Events
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;
