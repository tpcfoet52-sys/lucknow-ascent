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
    <section id="recruiters" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full inline-block">For Recruiters</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-6 tracking-tight">
            Why Recruit from <span className="text-gold-gradient">University of Lucknow?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            Partner with one of India's most distinguished institutions and access exceptional talent.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-medium leading-tight">{stat.label}</p>
                {stat.subLabel && <p className="text-xs text-primary/70 font-semibold mt-1.5">{stat.subLabel}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Recruit Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyRecruitPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="flex gap-4 p-5 bg-gradient-to-br from-card to-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
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
          className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-center font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              Our <span className="text-gold-gradient">Top Recruiting</span> Partners
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterPortal;
