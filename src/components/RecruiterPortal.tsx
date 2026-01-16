import { motion } from "framer-motion";
import { Building2, Users, Trophy, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    icon: TrendingUp,
    value: "₹18 LPA",
    label: "Average Package",
    sublabel: "2024 batch",
  },
  {
    icon: Trophy,
    value: "₹48 LPA",
    label: "Highest Package",
    sublabel: "Microsoft, Google",
  },
  {
    icon: Building2,
    value: "200+",
    label: "Recruiting Partners",
    sublabel: "Fortune 500 included",
  },
  {
    icon: Users,
    value: "3000+",
    label: "Students Placed",
    sublabel: "Last 5 years",
  },
];

const topRecruiters = [
  "Microsoft", "Google", "Amazon", "TCS", "Infosys", "Wipro",
  "Deloitte", "EY", "KPMG", "PwC", "Goldman Sachs", "JP Morgan"
];

const whyRecruitPoints = [
  {
    icon: GraduationCap,
    title: "Premier Institution",
    description: "One of India's oldest and most prestigious universities with a legacy spanning over 150 years.",
  },
  {
    icon: Briefcase,
    title: "Industry-Ready Talent",
    description: "Students trained with latest industry practices, certifications, and real-world project experience.",
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description: "Access to 50+ academic programs across Engineering, Management, Law, Sciences, and Humanities.",
  },
];

const RecruiterPortal = () => {
  return (
    <section id="recruiters" className="section-padding bg-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">For Recruiters</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Why Recruit from <span className="text-gold-gradient">University of Lucknow?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-lg">
            Partner with one of India's most distinguished institutions and access exceptional talent that drives innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-sm p-6 text-center shadow-elevated-sm border border-border/50 hover:shadow-elevated-md transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Recruit Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyRecruitPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">{point.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-sm p-8 md:p-12"
        >
          <h3 className="text-center font-serif text-xl md:text-2xl text-primary-foreground mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-sm px-4 py-2 text-primary-foreground/90 text-sm font-medium"
              >
                {company}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="gold" size="lg">
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterPortal;
