import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Building,
  Users,
  Globe,
  BookOpen,
  Award,
  MapPin,
  Calendar,
  Library,
  Microscope,
  Landmark,
  Gavel,
  Briefcase,
  Pill,
  Sun,
  Star,
  Scroll,
  CheckCircle2,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

import uolLogo from "@/assets/uol-logo.png";
import heroImage from "@/assets/university-hero-new.jpg";
import nirfBadge from "@/assets/nirf-ranking-badge.png";
import centenaryLogo from "@/assets/centenary-logo.png";
import naacBadge from "@/assets/uol-category-1-badge.png";
import tpcLogo from "@/assets/tpc-logo.jpeg";
import programEngineering from "@/assets/engineering-academic-excellence.jpg";
import programLaw from "@/assets/law-academic-excellence.jpg";
import programManagement from "@/assets/management-academic-excellence.jpg";
import programPharmacy from "@/assets/pharmacy-academic-excellence.jpg";
import programYoga from "@/assets/yoga-academic-excellence.jpg";

import programTourism from "@/assets/tourism-collage.jpg";


import mainCampus from "@/assets/main-campus.jpg";
import secondCampus from "@/assets/second-campus.jpg";

const aboutUniversityLinks = [
  { name: "Our Legacy", href: "#legacy" },
  { name: "Courses Offered", href: "#programs" },
  { name: "Quick Facts", href: "#quick-facts" },
  { name: "Accreditations", href: "#accreditations" },
  { name: "Campuses", href: "#campuses" },
  { name: "Faculties", href: "#all-faculties" },
  { name: "Campus Life", href: "#campus-life" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const programs = [
  { name: "Engineering", icon: Building, students: "2500+", image: programEngineering, hoverDesc: "Offering B.Tech (CSE, CSE-AI, ECE, EE, CE and ME), BCA and M.Tech Programs. Focus on practical learning, industry collaboration and placement excellence with state-of-the-art laboratories." },
  { name: "Law", icon: Gavel, students: "1200+", image: programLaw, hoverDesc: "LLB and LLM programs recognized by Bar Council of India. Comprehensive curriculum covering corporate law, constitutional law, and international law with moot court facilities." },
  { name: "Management", icon: Briefcase, students: "1800+", image: programManagement, hoverDesc: "MBA programs specializing in Finance, Marketing, HR, and Operations. Industry-oriented curriculum with case studies, internships, and guest lectures from corporate leaders." },
  { name: "Pharmacy", icon: Pill, students: "800+", image: programPharmacy, hoverDesc: "B.Pharm and M.Pharm programs approved by PCI. Focus on pharmaceutical sciences, drug development, and clinical pharmacy with modern research facilities." },
  { name: "Yoga", icon: Sun, students: "500+", image: programYoga, hoverDesc: "UG and PG programs in Yoga and Alternative Medicine. Traditional wisdom meets modern science with research on therapeutic applications and wellness management." },
  { name: "Tourism", icon: Globe, students: "400+", image: programTourism, hoverDesc: "Programs in Tourism and Travel Management. Practical training in hospitality, tour operations, and heritage management with industry partnerships." },
];

const infrastructure = [
  { label: "Central Library", value: "5L+ Books", icon: Library },
  { label: "Research Labs", value: "120+", icon: Microscope },
  { label: "Smart Classrooms", value: "200+", icon: Building },
  { label: "Hostels", value: "15", icon: MapPin },
];

const demographics = [
  { label: "Total Students", value: "35,000+" },
  { label: "Faculty Members", value: "1,200+" },
  { label: "Research Scholars", value: "3,500+" },
  { label: "International Students", value: "500+" },
];

const milestones = [
  {
    year: "1920",
    event: "University of Lucknow established on November 25 under the Lucknow University Act. Founded with vision of Sir Harcourt Butler and Raja Mohammad Ali Mohammad Khan of Mahmudabad."
  },
  {
    year: "1921",
    event: "Formal teaching commenced on July 17. King George's Medical College transferred to university. Canning College (est. 1867) merged with university."
  },
  {
    year: "1984",
    event: "Institute of Engineering & Technology (IET) Lucknow established on November 19 as the Faculty of Engineering & Technology under the university."
  },
  {
    year: "2017",
    event: "Faculty of Engineering & Technology (FoET) re-established at New Campus with 5 engineering departments: CSE, ECE, EE, CE, and ME."
  },
  {
    year: "2020",
    event: "The University of Lucknow celebrated its Centenary from November 19–25. Prime Minister Narendra Modi released a commemorative ₹100 coin, and the week featured cultural, literary, and sports events honoring the university’s 100-year legacy."
  },
  {
    year: "2022",
    event: "Achieved NAAC A++ accreditation in July — first state university in Uttar Pradesh to receive the highest grade."
  },
  {
    year: "2025",
    event: "NIRF 2025 rankings released Sept 4: Ranked 98th in University category, 29th in Law, and 100th in MBA. Continues in Top 200 overall."
  },
];

const quickFacts = [
  { label: "Established", value: "1920", icon: Landmark },
  { label: "Campus Area", value: "219 Acres", icon: MapPin },
  { label: "Faculties", value: "13", icon: BookOpen },
  { label: "Affiliated Colleges", value: "556+", icon: Building2 },
  { label: "Students", value: "35,000+", icon: Users },
  { label: "Faculty Members", value: "1,200+", icon: GraduationCap },
];

const accreditations = [
  { title: "NAAC A++ Accreditation", description: "First state university in UP with highest NAAC grade (CGPA 3.55/7, July 2022)", icon: Award, highlight: true },
  { title: "UGC Category-I Status", description: "Granted academic & administrative autonomy for curriculum and international collaborations", icon: Star },
  { title: "NIRF Top 100 Universities", description: "Ranked 98th in University category, 29th in Law (NIRF 2025)", icon: CheckCircle2 },
];

const affiliations = ["UGC", "AIU", "BCI", "NCTE", "AICTE", "PCI"];

const campusLocations = [
  { name: "Main Campus", location: "Badshah Bagh, University Road", image: mainCampus, description: "Historic campus on eastern bank of Gomti river with traditional Avadh architecture.", hoverDesc: "Spread across 144 acres with heritage buildings dating back to 1920. Houses Science, Arts, and Commerce faculties. Features the iconic administrative block, central library with 5L+ books, and beautifully landscaped gardens along the Gomti river." },
  { name: "New Campus (2nd)", location: "Jankipuram, Sitapur Road", image: secondCampus, description: "Modern 75-acre campus housing Faculty of Engineering & Technology, Management, and Law.", hoverDesc: "State-of-the-art campus established in 2017 with green building designs. Equipped with modern laboratories, smart classrooms, auditoriums, sports complex, separate hostels, and excellent placement infrastructure for professional programs." },
];

const allFaculties = [
  "Faculty of Arts (27+ Depts)", "Faculty of Science", "Faculty of Commerce",
  "Faculty of Engineering & Technology", "Faculty of Law", "Faculty of Management Studies",
  "Faculty of Education", "Faculty of Fine Arts", "Faculty of Ayurveda",
  "Faculty of Unani", "Faculty of Yoga & Alternative Medicine"
];

const notableAlumni = [
  { name: "Dr. Shankar Dayal Sharma", role: "9th President of India" },
  { name: "Justice A.S. Anand", role: "Chief Justice of India" },
  { name: "Suresh Raina", role: "Indian Cricketer" },
  { name: "Dr. Naresh Trehan", role: "Renowned Cardiologist" },
  { name: "Qurratulain Hyder", role: "Novelist, Padma Bhushan" },
  { name: "Kamala Nehru", role: "Freedom Fighter" },
];

const AboutUniversity = () => {
  return (
    <div className="min-h-screen bg-background">
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
            {/* Badges Row */}
            <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
              <motion.img
                src={naacBadge}
                alt="NAAC A++ Accreditation"
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
              About <span className="text-gold-gradient">University of Lucknow</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Established in 1920, the University of Lucknow stands as one of India's premier institutions
              of higher learning, with a legacy spanning over a century of academic excellence.
            </p>

            {/* Centenary Logo */}
            <motion.img
              src={centenaryLogo}
              alt="Centenary Celebrations 1920-2020"
              className="mx-auto w-64 md:w-80 object-contain mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
        </div>
      </section >

      {/* History Timeline - Our Legacy */}
      <section id="legacy" className="section-padding bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 relative overflow-hidden" >
        {/* Subtle decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-narrow relative z-10" >
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-4" >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/60" />
              <Landmark className="w-5 h-5 text-accent" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60" />
            </div >

            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-2">
              Our Legacy
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              A Century of Excellence
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
              From humble beginnings in 1920 to a premier institution of national importance —
              our journey of academic distinction.
            </p>
          </motion.div >

          {/* Enhanced Timeline */}
          <div className="relative max-w-4xl mx-auto" >
            {/* Timeline center line with gradient */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 md:-translate-x-px" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Desktop Card - Left or Right */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8 md:flex md:justify-end" : "md:pl-8 md:flex md:justify-start"} hidden md:block`}>
                    <motion.div
                      className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-lg p-5 inline-block shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 max-w-md"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-accent/70" />
                        <p className="font-serif text-xl font-bold text-accent">{milestone.year}</p>
                      </div>
                      <p className="text-foreground text-sm leading-relaxed text-justify">{milestone.event}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-background shadow-md z-10" />
                  </div>

                  {/* Mobile Card */}
                  <div className="flex-1 ml-12 md:hidden">
                    <div className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-accent/70" />
                        <p className="font-serif text-lg font-bold text-accent">{milestone.year}</p>
                      </div>
                      <p className="text-foreground text-sm leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div >

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">105+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years of Excellence</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent">1920</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Established</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">A++</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">NAAC Grade</p>
                </div>
              </div>
            </div>
          </motion.div >
        </div >
      </section >

      {/* Programs Section */}
      <section className="section-padding" >
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Academic Excellence</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              University of Lucknow New Campus (2nd), Courses Offered
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Offering 150+ undergraduate, postgraduate, and doctoral programs across diverse disciplines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.name}
                  custom={index}
                  initial="initial"
                  whileInView="animate"

                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                    hover: { y: -5, transition: { duration: 0.3 } }
                  }}
                  className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer   transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="aspect-video overflow-hidden relative bg-muted">
                    {program.image ? (
                      <>
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient overlay on hover - Removed */}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <IconComponent className="h-10 w-10 text-primary/40" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 relative z-10 bg-card">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                          {program.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mb-1">
                      {program.students} Students Enrolled
                    </p>

                    <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed">
                      {program.hoverDesc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section >

      {/* Quick Facts Section */}
      <section id="quick-facts" className="section-padding bg-muted/30" >
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">At a Glance</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2">Quick Facts</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <motion.div key={fact.label} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-serif text-xl font-bold text-foreground">{fact.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{fact.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section >

      {/* Accreditations Section */}
      <section id="accreditations" className="section-padding" >
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Recognition</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2">Accreditations & Affiliations</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {accreditations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={item.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section >

      {/* Campus Locations Section */}
      <section id="campuses" className="section-padding bg-muted/30" >
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Our Campuses</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2">Campus Locations</h2>

          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {campusLocations.map((campus, index) => (
              <motion.div
                key={campus.name}
                custom={index}
                initial="initial"
                whileInView="animate"

                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } },
                  hover: { y: -5, transition: { duration: 0.3 } }
                }}
                className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer   transition-all duration-300"
              >
                {/* Image Section */}
                <div className="aspect-video overflow-hidden relative bg-muted">
                  {campus.image ? (
                    <>
                      <img
                        src={campus.image}
                        alt={campus.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 scale-105 group-hover:scale-110"
                      />
                      {/* Gradient overlay on hover - Removed */}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5">
                      <MapPin className="h-10 w-10 text-primary/40" />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 relative z-10 bg-card">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-base text-foreground group-hover:text-accent transition-colors">
                        {campus.name}
                      </h3>
                      <p className="text-accent text-xs font-medium">{campus.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs">{campus.description}</p>

                  <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed">
                    {campus.hoverDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default AboutUniversity;
