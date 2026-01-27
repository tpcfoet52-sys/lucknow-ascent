import { motion } from "framer-motion";
import { Building2, Users, Trophy, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    icon: TrendingUp,
    value: "₹9.0 LPA",
    label: "Average Package (23-24)",
  },

  {
    icon: Building2,
    value: "500+",
    label: "Recruiting Partners",
  },
  {
    icon: Users,
    value: "3451+",
    label: "Students Placed (23-24)",
  },
];

const topRecruiters = [
  "SOTI", "ADOBE", "DELLOIT", "WIPRO", "NPCL", "HCL TECH",
  "GENPACT", "ADANI CEMENTS", "MOTHERSON INTERNATIONAL", "ALLEN", "PW",
  "BYJU’S", "Tech Mahindra", "JARO EDUCATION", "RELIANCE INDUSTRIES LTD.", "ACCENTURE",
];

const whyRecruitPoints = [
  {
    icon: GraduationCap,
    title: "Premier Institution",
    description: "One of India's oldest and most prestigious universities with a legacy spanning over 100 years.",
  },
  {
    icon: Briefcase,
    title: "Industry-Ready Talent",
    description: "Students trained with latest industry practices and real-world project experience.",
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description: "Access to 50+ academic programs across Engineering, Management, Law, and Sciences.",
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
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">For Recruiters</span>
          <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
            Why Recruit from University of Lucknow?
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base">
            Partner with one of India's most distinguished institutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-md p-5 text-center shadow-elevated-sm border border-border/50"
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Why Recruit Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {whyRecruitPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-base text-foreground">{point.title}</h3>
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
          className="bg-primary rounded-md p-6 md:p-8"
        >
          <h3 className="text-center font-serif text-lg md:text-xl text-primary-foreground mb-6">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded px-3 py-1.5 text-primary-foreground/90 text-sm"
              >
                {company}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="gold"
              size="default"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterPortal;
