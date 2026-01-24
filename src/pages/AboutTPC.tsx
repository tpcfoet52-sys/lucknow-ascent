import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Users,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Building2,
  Award,
  FileText,
  Download,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import uolLogo from "@/assets/uol-logo.png";
import naacBadge from "@/assets/naac-badge.png";
import heroImage from "@/assets/university-hero.jpg";
import profSpSingh from "@/assets/prof-sp-singh.jpg";
import drHimanshuPandey from "@/assets/dr-himanshu-pandey.jpg";
import tpcLogo from "@/assets/tpc-logo.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const visionPoints = [
  "Bridge the gap between academic learning and industry requirements",
  "Prepare students for successful careers in leading organizations",
  "Build lasting relationships with top recruiters across sectors",
  "Provide comprehensive training and skill development programs",
];

const services = [
  {
    title: "Placement Assistance",
    desc: "End-to-end support for campus recruitment drives and job placement",
    icon: Briefcase
  },
  {
    title: "Career Counseling",
    desc: "Personalized guidance for career planning and professional development",
    icon: Target
  },
  {
    title: "Skill Development",
    desc: "Workshops on aptitude, communication, and technical skills",
    icon: GraduationCap
  },
  {
    title: "Industry Connect",
    desc: "Guest lectures, seminars, and industry interaction sessions",
    icon: Building2
  },
  {
    title: "Internship Coordination",
    desc: "Facilitating internship opportunities with leading companies",
    icon: Users
  },
  {
    title: "Alumni Network",
    desc: "Connecting students with successful alumni for mentorship",
    icon: Award
  },
];

const stats = [
  { value: "543", label: "Jobs Offered", sublabel: "2024-25" },
  { value: "₹3.0 LPA", label: "Minimum Package", sublabel: "2024-25" },
  { value: "₹9.0 LPA", label: "Average Package", sublabel: "Overall" },
  { value: "₹26.0 LPA", label: "Highest Package", sublabel: "2024-25" },
];

const topRecruiters = [
  "Samsung", "HCL", "Wipro", "Infosys", "Jio", "Deloitte",
  "Accenture", "Paytm", "Capgemini", "Cognizant", "Tech Mahindra",
  "Amazon", "Flipkart", "Cedcoss", "Hexaware", "Sopra Steria",
  "Ericsson", "TCS"
];

const trainingPrograms = [
  { title: "Session on Scope in Civil Engineering", by: "Miss Surabhi Aggarwal" },
  { title: "Geotechnical Enginee", by: "Samsung C&T" },
  { title: "Workshop Session on Reaching Out to Industries", by: "Mr. Shubham Sing" },
  { title: " PhonePe Session on Opportunities for Engineers in DRDO", by: "Miss Surabhi Aggarwal" },
  { title: "Session on Scope in Civil Engineering", by: "Miss Surabhi Aggarwal" },
];

const successStories = [
  { name: "Karthik Gupta", company: "Qdrant", package: "₹26 LPA", year: "2023" },
  { name: "Maria Khan", company: "Branch International", package: "₹22 LPA", year: "2024" },
];

const downloads = [
  { name: "Placement Brochure 2024-25", type: "PDF" },
  { name: "Training Calendar", type: "PDF" },
  { name: "Placement Statistics Report", type: "PDF" },
  { name: "Company Registration Form", type: "DOCX" },
];

const AboutTPC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo */}
              <img
                src={tpcLogo}
                alt="Training & Placement Cell"
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
              />
              <div className="hidden sm:block">
                <p className="font-serif font-semibold text-sm md:text-base leading-tight text-foreground transition-colors group-hover:text-gold-600">
                  Training & Placement Cell
                </p>
                <p className="text-xs tracking-wide text-muted-foreground transition-colors group-hover:text-gold-600/80">
                  FoET, University of Lucknow
                </p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="University of Lucknow Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        </div>

        <div className="relative z-10 container-narrow pt-8 md:pt-16">
          {/* Back to Home Button */}
          <div className="absolute top-4 left-0 z-20">
            <Link to="/">
              <Button variant="gold" size="default" className="gap-2 shadow-md">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-6">
                <motion.img
                  src={uolLogo}
                  alt="University of Lucknow"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <div className="w-px h-16 bg-border" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={naacBadge}
                    alt="NAAC A++ Badge"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-1"
                  />
                  <span className="text-xs font-bold text-foreground">CGPA 3.55</span>
                </motion.div>
              </div>

            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Training & Placement Cell
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Empowering students with skills, opportunities, and connections to build successful careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Purpose</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-6">
                Vision & Mission
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Training & Placement Cell (TPC) at University of Lucknow serves as the vital link
                between students and the corporate world, dedicated to ensuring every student
                achieves their career aspirations.
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Leadership</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Meet Our Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Prof. S.P. Singh",
                role: "Dean, Faculty of Engineering & Technology",
                image: profSpSingh,
                quote: "Our mission is to nurture industry-ready professionals who contribute to nation-building."
              },
              {
                name: "Dr. Himanshu Pandey",
                role: "Associate Professor & Program Coordinator, Additional Director CPC",
                image: drHimanshuPandey,
                quote: "We bridge academia and industry through strategic partnerships and comprehensive training."
              },
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-accent/20"
                />
                <h3 className="font-serif text-lg font-semibold text-foreground">{leader.name}</h3>
                <p className="text-sm text-accent mt-1">{leader.role}</p>
                <p className="text-sm text-muted-foreground mt-4 italic">"{leader.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">What We Offer</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Our Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="group bg-background border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Partners</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Top Recruiters
            </h2>
            <p className="text-muted-foreground mt-3">
              Leading companies that trust us for their talent acquisition needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {topRecruiters.map((company, index) => (
              <motion.div
                key={company}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background border border-border rounded-lg px-5 py-3 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Skill Development</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Training Programs
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group bg-background border border-border/50 rounded-lg p-6 text-center shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-accent mx-auto" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">Duration: {program.duration}</p>
                  <p className="text-accent font-medium">{program.participants} Participants</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Achievements</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group bg-background border border-border/50 rounded-lg p-6 text-center shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{story.name}</h3>
                <p className="text-accent font-medium mt-1">{story.company}</p>
                <p className="text-2xl font-bold text-foreground mt-2">{story.package}</p>
                <p className="text-xs text-muted-foreground mt-1">Batch of {story.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Pride</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Notable Alumni
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Ritu Karidhal",
                role: "Senior Scientist, ISRO",
                desc: "Mission Director of Chandrayaan-2",
                icon: Target
              },
              {
                name: "Suresh Raina",
                role: "International Cricketer",
                desc: "Former Member of Indian National Team",
                icon: Award
              },
              {
                name: "Rajiv Kumar",
                role: "Former Vice Chairman",
                desc: "NITI Aayog, Govt. of India",
                icon: Building2
              },
              {
                name: "Amitabh Bhattacharya",
                role: "Lyricist & Playback Singer",
                desc: "National Award Winner",
                icon: FileText
              },
              {
                name: "Vartika Singh",
                role: "Miss Universe India 2019",
                desc: "Model and Beauty Pageant Titleholder",
                icon: Award
              }
            ].map((alumni, index) => (
              <motion.div
                key={alumni.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <alumni.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{alumni.name}</h3>
                <p className="text-sm font-medium text-accent mt-1">{alumni.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{alumni.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Resources</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Download Center
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {downloads.map((item, index) => (
              <motion.button
                key={item.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-background border border-border rounded-lg p-4 hover:border-accent/50 hover:bg-accent/5 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.type}</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Join 500+ companies in hiring top talent from University of Lucknow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="gap-2">
                Recruit From Us <ArrowRight className="h-4 w-4" />
              </Button>
              <Link to="/team-structure">
                <Button variant="goldOutline" size="lg">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container-narrow text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Training & Placement Cell, University of Lucknow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutTPC;
