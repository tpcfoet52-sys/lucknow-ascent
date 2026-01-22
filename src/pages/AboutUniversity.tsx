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
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import uolLogo from "@/assets/uol-logo.png";
import heroImage from "@/assets/university-hero.jpg";
import nirfBadge from "@/assets/nirf-ranking-badge.png";
import centenaryLogo from "@/assets/centenary-logo.png";
import naacBadge from "@/assets/naac-badge.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const programs = [
  { name: "Engineering & Technology", icon: Building, students: "2500+" },
  { name: "Arts & Humanities", icon: BookOpen, students: "3000+" },
  { name: "Science", icon: Microscope, students: "2000+" },
  { name: "Commerce & Management", icon: Landmark, students: "1800+" },
  { name: "Law", icon: Library, students: "1200+" },
  { name: "Education", icon: GraduationCap, students: "800+" },
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
  { year: "1921", event: "University established by the United Provinces government" },
  { year: "1947", event: "Post-independence expansion of faculties" },
  { year: "1975", event: "Institute of Engineering & Technology founded" },
  { year: "2000", event: "Modern campus development begins" },
  { year: "2020", event: "Centenary celebrations completed" },
  { year: "2024", event: "NAAC A++ accreditation achieved" },
];

const AboutUniversity = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={uolLogo} 
                alt="University of Lucknow" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div className="hidden sm:block">
                <p className="font-serif font-semibold text-sm md:text-base leading-tight text-foreground">
                  University of Lucknow
                </p>
                <p className="text-xs tracking-wide text-muted-foreground">
                  Training & Placement Cell
                </p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
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
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.img 
                src={uolLogo} 
                alt="University of Lucknow" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              <motion.img 
                src={nirfBadge} 
                alt="NIRF Ranking" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              About University of Lucknow
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Established in 1921, the University of Lucknow stands as one of India's premier institutions 
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
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Legacy</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              A Century of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <div className="bg-background border border-border rounded-lg p-5 inline-block">
                      <p className="font-serif text-xl font-bold text-accent">{milestone.year}</p>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 ring-4 ring-background" />
                  
                  <div className="flex-1 ml-10 md:ml-0">
                    <div className="bg-background border border-border rounded-lg p-5 md:hidden">
                      <p className="font-serif text-xl font-bold text-accent">{milestone.year}</p>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Academic Excellence</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Faculties & Programs
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Offering 150+ undergraduate, postgraduate, and doctoral programs across diverse disciplines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.name}
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
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {program.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {program.students} Students Enrolled
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">World-Class Facilities</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Campus Infrastructure
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-background border border-border rounded-lg p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-7 w-7 text-accent" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Community</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Campus Demographics
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {demographics.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-6 text-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Distinguished Alumni</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Leaders Who Walked Our Halls
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Dr. A.P.J. Abdul Kalam", role: "Former President of India", field: "Science & Technology" },
              { name: "Amitabh Bachchan", role: "Legendary Actor", field: "Arts & Entertainment" },
              { name: "Rajnath Singh", role: "Defense Minister of India", field: "Politics & Governance" },
            ].map((alumni, index) => (
              <motion.div
                key={alumni.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{alumni.name}</h3>
                <p className="text-sm text-accent mt-1">{alumni.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{alumni.field}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Beyond Academics</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Vibrant Campus Life
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cultural Fests", desc: "Annual celebrations of art, music & dance", icon: Calendar },
              { title: "Sports Complex", desc: "State-of-the-art athletic facilities", icon: Award },
              { title: "Student Clubs", desc: "50+ clubs for diverse interests", icon: Users },
              { title: "Global Exchange", desc: "Partnerships with 30+ universities worldwide", icon: Globe },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
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
              Explore Our Campus
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Schedule a virtual tour or visit us in person to experience the legacy of excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Virtual Tour
              </Button>
              <Link to="/about-tpc">
                <Button variant="goldOutline" size="lg">
                  Learn About TPC
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
            © {new Date().getFullYear()} University of Lucknow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUniversity;
