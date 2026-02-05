import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Users, Trophy, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    icon: Trophy,
    value: "₹26 LPA",
    label: "Highest Package (2023-24)",
    subLabel: "Kartikey Gupta",
  },
  {
    icon: TrendingUp,
    value: "₹9.0 LPA",
    label: "Average Package (24-25)",
    subLabel: "",
  },
  {
    icon: Users,
    value: "543+",
    label: "FoET Students Placed (24-25)",
    subLabel: "",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Recruiting Partners",
    subLabel: "",
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
              {stat.subLabel && <p className="text-[10px] text-accent font-medium mt-0.5">{stat.subLabel}</p>}
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
          className="bg-primary rounded-xl p-6 md:p-8"
        >
          <h3 className="text-center font-serif text-3xl md:text-4xl text-primary-foreground mb-8">
            Our <span className="text-accent">Top</span> Recruiting Partners
          </h3>

          <div className="space-y-5">
            {/* IT, Consulting & Tech */}
            <div>
              <div className="flex justify-center mb-3">
                <span className="border-2 border-accent text-accent bg-transparent text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase backdrop-blur-sm">IT, Consulting & Tech</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["Accenture", "Adobe", "Capgemini", "Cognizant", "Deloitte", "Genpact", "HCL Technologies", "IBM India", "Infosys", "LTI", "Mindtree", "Nagarro", "Persistent Systems", "Publicis Sapient", "Sopra Steria", "TCS", "Tech Mahindra", "Virtusa", "Wipro", "Accolite Digital", "Apisero", "Birlasoft", "Cedcoss", "Collabera", "Hexaware", "Innovaccer", "Intellect Design", "KPIT", "Mountblue", "Mobileum", "Revature", "Sourcefuse", "Xoriant", "Zemoso"].map((company, index) => (
                  <div key={index} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1 text-primary-foreground text-xs">
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* Core / PSU / Manufacturing */}
            <div>
              <div className="flex justify-center mb-3">
                <span className="border-2 border-accent text-accent bg-transparent text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase backdrop-blur-sm">Core / Manufacturing</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["Adani Group", "Ambuja Cements", "Mahindra Group", "Reliance Industries", "Tata Steel", "Yazaki India", "Ashok Leyland", "CMR Green", "Emmvee Energy", "JBM Auto", "Lumax Industries", "Motherson"].map((company, index) => (
                  <div key={index} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1 text-primary-foreground text-xs">
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* EdTech / Training */}
            <div>
              <div className="flex justify-center mb-3">
                <span className="border-2 border-accent text-accent bg-transparent text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase backdrop-blur-sm">EdTech / Training</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["Aakash", "BYJU'S", "Edureka", "Intellipaat", "Jaro Education", "LawSikho", "NIIT", "Physics Wallah", "PlanetSpark", "upGrad", "Verzeo", "YHills"].map((company, index) => (
                  <div key={index} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1 text-primary-foreground text-xs">
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* Finance / Banking / FinTech */}
            <div>
              <div className="flex justify-center mb-3">
                <span className="border-2 border-accent text-accent bg-transparent text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase backdrop-blur-sm">Finance / Banking / FinTech</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["Aditya Birla Sun Life", "AU Small Finance Bank", "Federal Bank", "Muthoot Microfin", "Piramal Finance", "Rupeek Fintech"].map((company, index) => (
                  <div key={index} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1 text-primary-foreground text-xs">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link to="/contact">
              <Button variant="gold" size="default">
                Partner With Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterPortal;
