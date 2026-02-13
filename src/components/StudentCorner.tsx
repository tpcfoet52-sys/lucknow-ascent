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
    <section id="students" className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Resources Grid - Now 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
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
