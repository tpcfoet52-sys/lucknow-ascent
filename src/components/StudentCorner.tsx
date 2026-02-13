import { motion } from "framer-motion";
import { FileText, BookOpen, UserCheck, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Resume Building",
    description: "Professional templates and expert tips to craft an impactful resume.",
    link: "/resume-guide",
  },
  {
    icon: BookOpen,
    title: "Interview Preparation",
    description: "Curated guides, mock interviews, and aptitude test resources.",
    link: "/interview-prep",
  },
  {
    icon: UserCheck,
    title: "Soft Skills Training",
    description: "Communication, presentation, and leadership development programs.",
    link: "/soft-skills",
  },
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
          className="text-center mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Student Resources</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Tools for Your <span className="text-gold-gradient">Professional Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-lg">
            Access comprehensive resources designed to help you excel in interviews and secure your ideal placement.
          </p>
        </motion.div>

        {/* Resources Grid - Now 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-xl p-6 shadow-elevated-sm border border-border/50 hover:shadow-elevated-md hover:border-accent/30 transition-all"
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
              <div className="flex items-center gap-1 text-accent text-sm font-medium mt-4 transition-colors">
                Learn more <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;
