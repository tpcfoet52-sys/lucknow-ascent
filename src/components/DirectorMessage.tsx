import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import drHimanshuPandey from "@/assets/dr-himanshu-pandey.jpg";
import profSpSingh from "@/assets/prof-sp-singh.jpg";
import profJaiPrakashSaini from "@/assets/prof-jai-prakash-saini.png";
const DirectorMessage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Leadership</span>
          <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
            Messages from Our Leaders
          </h2>
        </motion.div>

        {/* Vice Chancellor's Message - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-md p-6 md:p-8 shadow-elevated-sm border border-border/50 mb-10"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/50">
              <img 
                src={profJaiPrakashSaini} 
                alt="Prof. Jai Prakash Saini" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="font-serif font-semibold text-xl text-foreground">Prof. Jai Prakash Saini</h3>
                <p className="text-primary font-medium text-sm">Vice Chancellor</p>
                <p className="text-accent text-xs mt-1">University of Lucknow</p>
              </div>
              
              <div className="relative mb-5">
                <Quote className="absolute -top-1 -left-1 w-5 h-5 text-accent/30" />
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic pl-6 border-l-2 border-primary/50">
                  "Prof. Jai Prakash Saini assumed charge as Vice Chancellor of the University of Lucknow 
                  on 14 January 2026, bringing 38+ years of experience in academics, research, and 
                  university administration."
                </blockquote>
              </div>

              <p className="text-foreground leading-relaxed text-sm mb-4">
                A senior Professor of Electronics & Communication Engineering, he has served as Vice Chancellor 
                of MMMUT Gorakhpur and NSUT New Delhi, with additional charge of DTU New Delhi, and has held 
                key roles including Chairman Training and Placement, Dean (R&D), and Coordinator of major 
                national programs.
              </p>

              <p className="text-foreground leading-relaxed text-sm">
                His strong focus on industry–academia collaboration, MoUs, incubation, innovation, and student 
                training aligns closely with the objectives of the Training and Placement Cell, Faculty of 
                Engineering and Technology, in strengthening student employability and placement outcomes.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Vice Chancellor", "Industry-Academia", "Innovation", "Incubation"].map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Messages Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Dean's Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-md p-6 md:p-8 shadow-elevated-sm border border-border/50"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-accent/50">
                <img 
                  src={profSpSingh} 
                  alt="Prof. Satendra Pal Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Prof. Satendra Pal Singh</h3>
                <p className="text-muted-foreground text-sm">Dean, Faculty of Engineering & Technology</p>
                <p className="text-accent text-xs mt-1">University of Lucknow</p>
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-1 -left-1 w-5 h-5 text-accent/30" />
              <blockquote className="text-muted-foreground text-sm leading-relaxed italic pl-6 border-l-2 border-accent/50">
                "The Training & Placement Cell of the University of Lucknow is committed to bridging 
                the gap between academic excellence and industry requirements. Our mission is to 
                empower every student with the skills, confidence, and opportunities they need to 
                build successful careers."
              </blockquote>
            </div>

            <p className="text-foreground mt-5 leading-relaxed text-sm">
              With over 105 years of academic heritage, the Faculty of Engineering & Technology 
              has consistently produced leaders who have made significant contributions across 
              diverse industries. Our placement cell works tirelessly to connect our talented 
              students with top recruiters, achieving record-breaking placements year after year.
            </p>
          </motion.div>

          {/* Dr. Himanshu Pandey's Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-md p-6 md:p-8 shadow-elevated-sm border border-border/50"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-accent/50">
                <img 
                  src={drHimanshuPandey} 
                  alt="Dr. Himanshu Pandey" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Dr. Himanshu Pandey</h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  Training & placement In charge 
                </p>
                <p className="text-accent text-xs mt-1">
                  Additional Director – Central Placement Cell
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-1 -left-1 w-5 h-5 text-accent/30" />
              <blockquote className="text-muted-foreground text-sm leading-relaxed italic pl-6 border-l-2 border-accent/50">
                "Innovation and employability are at the core of what we do. Our goal is to prepare 
                students not just for jobs, but for impactful careers. Through industry collaborations, 
                mentorship programs, and incubation support, we ensure every student is ready to 
                excel in the professional world."
              </blockquote>
            </div>

            <p className="text-foreground mt-5 leading-relaxed text-sm">
              As the Incharge of T&P Cell, FoET and Member of the Incubation Cell, Dr. Himanshu Pandey 
              is dedicated to mentoring innovation and enhancing employability. His vision focuses 
              on building strong industry-academia partnerships and providing students with 
              hands-on exposure to emerging technologies and career opportunities.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["T&P Cell, FoET", "Incubation Cell", "M.Tech CSE"].map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
