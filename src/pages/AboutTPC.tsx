
import { motion } from "framer-motion";
import {
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
} from "lucide-react";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

import uolLogo from "@/assets/uol-logo.png";
import naacBadge from "@/assets/uol-category-1-badge.png";
import heroImage from "@/assets/university-hero-new.jpg";



import topRecruiters from "@/assets/top-recruiters.jpg";

import drdoOpportunities from "@/assets/drdo-opportunities.jpg";
import workshopIndustries from "@/assets/workshop-industries.png";
import navalAviation from "@/assets/naval-aviation.png";
import civilEngineering from "@/assets/civil-engineering-session.png";
import mariaKhan from "@/assets/maria-khan.png";
import karthikGupta from "@/assets/karthik-gupta.png";
import cloudNetworkingWebinar from "@/assets/cloud-networking-webinar.jpg";



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
    hoverDesc: "Our dedicated team coordinates with top companies to organize campus drives, ensuring students get the best placement opportunities. We handle everything from company onboarding to final offer letters.",
    icon: Briefcase
  },
  {
    title: "Career Counseling",
    desc: "Personalized guidance for career planning and professional development",
    hoverDesc: "One-on-one sessions with experienced career counselors help students identify their strengths, explore career paths, and make informed decisions about their professional journey.",
    icon: Target
  },
  {
    title: "Skill Development",
    desc: "Workshops on aptitude, communication and technical skills",
    hoverDesc: "Regular workshops and training sessions covering aptitude tests, group discussions, technical interviews and soft skills to make students industry-ready and confident.",
    icon: GraduationCap
  },
  {
    title: "Industry Connect",
    desc: "Guest lectures, seminars and industry interaction sessions",
    hoverDesc: "Bridge the gap between academia and industry through expert talks, industrial visits and networking events with professionals from leading organizations.",
    icon: Building2
  },
  {
    title: "Internship Coordination",
    desc: "Facilitating internship opportunities with leading companies",
    hoverDesc: "We partner with top companies to provide meaningful internship experiences that give students real-world exposure and enhance their practical skills.",
    icon: Users
  },
  {
    title: "Alumni Network",
    desc: "Connecting students with successful alumni for mentorship",
    hoverDesc: "Leverage our strong alumni network for mentorship, career guidance and networking opportunities. Learn from those who've walked the path before you.",
    icon: Award
  },
];

const stats = [
  { value: "543", label: "Jobs Offered", sublabel: "2024-25" },
  { value: "₹3.0 LPA", label: "Minimum Package", sublabel: "2024-25" },
  { value: "₹9.0 LPA", label: "Average Package", sublabel: "Overall" },
  { value: "₹26 LPA", label: "Highest Package", sublabel: "2023-24 (Kartikey Gupta)" },
];





const trainingPrograms = [
  {
    title: "Session on Scope in Civil Engineering",
    speaker: "Miss Surabhi Aggarwal",
    role: "Geotechnical Engineer, Samsung C&T",
    image: civilEngineering,
    hoverDesc: "An insightful session exploring career opportunities in civil engineering, focusing on geotechnical specializations and modern construction technologies used in global infrastructure projects."
  },
  {
    title: "Workshop: Reaching Out to Industries",
    speaker: "Mr. Shubham Singh",
    role: "SDE, PhonePe",
    image: workshopIndustries,
    hoverDesc: "A comprehensive workshop on crafting effective resumes, mastering interview techniques and understanding industry expectations. Learn strategies that helped professionals break into top tech companies."
  },
  {
    title: "Opportunities for Engineers in DRDO",
    speaker: "Dr. Ashish Dubey",
    role: "Scientist 'G' & Project Director, DTTC Lucknow",
    image: drdoOpportunities,
    hoverDesc: "Discover exciting career paths in defense research and development. Learn about cutting-edge projects, recruitment processes and the impact engineers make in national security and innovation."
  },
  {
    title: "Naval Aviation & Operations",
    speaker: "Lt. Cdr. Rohit Dhama (Retd.)",
    role: "Ex-Indian Navy (10+ Years Exp.)",
    image: navalAviation,
    hoverDesc: "Gain insights into naval aviation careers, operational challenges and leadership opportunities in the Indian Navy. Understand the selection process and life of a naval officer."
  },
  {
    title: "The Evolving World of Cloud, Networking & IT Infrastructure",
    speaker: "Mr. Monish Manoj Sahani",
    role: "Arizona State University, USA",
    image: cloudNetworkingWebinar,
    hoverDesc: "Key takeaways: Navigating the Master's degree landscape in the USA, a reality check on the current job market, and demystifying the role of Product Management in modern tech organizations."
  }
];

const successStories = [
  {
    name: "Kartikey Gupta",
    company: "Qdrant",
    package: "₹26 LPA",
    year: "2023-24",
    image: karthikGupta,
    hoverDesc: "Karthik's journey from a curious engineering student to a high-performing software engineer at Qdrant showcases dedication and smart preparation. His success in securing the highest package demonstrates the quality of training and opportunities at our university."
  },
  {
    name: "Maria Khan",
    company: "Branch International",
    package: "₹22 LPA",
    year: "2024-25",
    image: mariaKhan,
    hoverDesc: "Maria's exceptional performance in technical interviews and her strong foundation in computer science led her to Branch International with an attractive package of ₹22 LPA plus equity. Her achievement inspires many students to pursue excellence in their chosen fields."
  },
];

const downloads = [
  { name: "Placement Brochure 2024-25", type: "PDF", url: "/pdfs/TPC_Placement_Brochure.pdf" },
  { name: "Training Calendar", type: "PDF", url: "#" },
  { name: "Placement Statistics Report", type: "PDF", url: "#" },
  { name: "Company Registration Form", type: "DOCX", url: "#" },
];

const AboutTPC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <PageBackground />
      <main className="relative z-10">
        {/* Header */}


        {/* Hero Section */}
        <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="University of Lucknow Campus"
              className="w-full h-full object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
          </div>

          <div className="relative z-10 container-narrow pt-8 md:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
                <motion.img
                  src={naacBadge}
                  alt="NAAC A++ Badge"
                  className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.img
                  src={uolLogo}
                  alt="University of Lucknow"
                  className="w-20 h-20 md:w-28 md:h-28 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
                Training & <span className="text-gold-gradient">Placement Cell</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Empowering students with skills, opportunities and connections to build successful careers
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-8 md:py-12">
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
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="group bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
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



        {/* Services */}
        <section className="py-8 md:py-12">
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
                    initial="initial"
                    whileInView="animate"

                    whileHover="hover"
                    viewport={{ once: true }}
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                      hover: { y: -5, transition: { duration: 0.3 } }
                    }}
                    className="group relative overflow-hidden rounded-xl border border-border/50 shadow-sm bg-card cursor-pointer hover:shadow-md hover:border-accent/30 transition-all duration-300"
                  >


                    {/* Content Section */}
                    <div className="p-6 relative z-10 bg-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">{service.desc}</p>

                      <p className="text-sm text-muted-foreground mt-2 border-t border-border/50 pt-3 leading-relaxed">
                        {service.hoverDesc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="py-8 md:py-12 bg-muted/30">
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

            <div className="flex flex-col gap-0 w-full border border-border/50 rounded-xl overflow-hidden shadow-sm">
              <img src={topRecruiters} alt="Our Top Recruiters" className="w-full h-auto object-contain block bg-white" />
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-8 md:py-12">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  custom={index}
                  initial="initial"
                  whileInView="animate"

                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                    hover: { y: -5, transition: { duration: 0.3 } }
                  }}
                  className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  {/* Image Section - Icon Placeholder or Actual Image */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                    {program.image ? (
                      <img src={program.image} alt={program.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent/5">
                        <GraduationCap className="h-10 w-10 text-accent/40" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 relative z-10 bg-card text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-accent" />
                      </div>
                    </div>

                    <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1 leading-tight">
                      {program.title}
                    </h3>


                    <div className="pt-2 border-t border-border/40 mt-2">
                      <p className="text-accent font-medium text-xs">{program.speaker}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{program.role}</p>
                    </div>

                    <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed text-left">
                      {program.hoverDesc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>
        </section>

        {/* Success Stories */}
        <section className="py-8 md:py-12 bg-muted/30">
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

            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  custom={index}
                  initial="initial"
                  whileInView="animate"

                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                    hover: { y: -5, transition: { duration: 0.3 } }
                  }}
                  className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  {/* Image Section - Icon Placeholder or Actual Image */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                    {story.image ? (
                      <img src={story.image} alt={story.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent/5">
                        <TrendingUp className="h-10 w-10 text-accent/40" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 relative z-10 bg-card text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-accent" />
                      </div>
                    </div>

                    <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                      {story.name}
                    </h3>
                    <p className="text-accent font-medium mt-0.5 text-sm">{story.company}</p>
                    <p className="text-xl font-bold text-foreground mt-1">{story.package}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Batch of {story.year}</p>

                    <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed">
                      {story.hoverDesc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* Recruitment Process */}
        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Join Our Team</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                Recruitment Process
              </h2>
              <p className="text-muted-foreground mt-2">
                Training and Placement Cell, Faculty of Engineering and Technology
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-accent/5 border border-accent/20 rounded-xl p-6 md:p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  Eligibility
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Open to <span className="font-semibold text-foreground">1st & 2nd Year Engineering and 1st Year BCA Students Only.</span>.
                  <br />
                  We are looking for dedicated individuals ready to contribute to the university's placement ecosystem.
                </p>
              </motion.div>

              {/* Selection Process */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border rounded-xl p-6 relative overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full -mr-6 -mt-6" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="font-serif font-bold text-primary">01</span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Round 1: Application Screening</h4>
                    <p className="text-sm text-muted-foreground">
                      Submission of resume and basic details. We look for academic consistency and extracurricular involvement.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border rounded-xl p-6 relative overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 p-12 bg-accent/5 rounded-full -mr-6 -mt-6" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <span className="font-serif font-bold text-accent">02</span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Round 2: Personal Interview</h4>
                    <p className="text-sm text-muted-foreground">
                      One-on-one interaction to assess communication skills, teamwork spirit and genuine interest in TPC activities.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-6 md:p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Requirements
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { text: "Updated Resume", icon: FileText },
                    { text: "Valid College ID", icon: Award },
                    { text: "Active Participation", icon: TrendingUp },
                  ].map((req, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-3 p-4 bg-muted/30 rounded-lg">
                      <req.icon className="h-8 w-8 text-muted-foreground" />
                      <span className="font-medium text-foreground">{req.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section >

        {/* Download Center */}
        <section className="py-8 md:py-12">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Resources</span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                Download Center
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {downloads.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  download={item.url !== "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </section >



      </main>
      <Footer />
    </div>
  );
};

export default AboutTPC;
