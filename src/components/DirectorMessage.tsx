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
          className="bg-card rounded-md p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50 mb-10"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="group flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/50">
              <img
                src={profJaiPrakashSaini}
                alt="Vice Chancellor"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                  "Our goal is to blend our rich academic heritage with modern technological advancement. We are committed to nurturing industry-ready professionals through research-driven education and robust industry partnerships. At the University of Lucknow, we don't just grant degrees; we empower future leaders to innovate and excel on a global stage."
                </blockquote>
              </div>

              <p className="text-foreground leading-relaxed text-sm mb-4">
                Prof. Jai Prakash Saini is the Vice-Chancellor of the University of Lucknow. An eminent academician in Electronics & Communication Engineering and an alumnus of IIT Kanpur, he brings over 38 years of expertise to the role. Having previously led NSUT Delhi and MMMUT Gorakhpur, Prof. Saini is dedicated to transforming the university into a global hub for innovation, digital excellence, and NEP 2020 implementation.
              </p>


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
            className="bg-card rounded-md p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="group flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-accent/50">
                <img
                  src={profSpSingh}
                  alt="Prof. Satendra Pal Singh"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                "Our mission at FoET is to nurture engineers who are not only technically proficient but also globally competitive. We welcome industry partners to engage with our vibrant talent pool and witness the innovation brewing at the University of Lucknow."
              </blockquote>
            </div>

            <p className="text-foreground mt-5 leading-relaxed text-sm">
              Prof. Satendra Pal Singh, Dean of the Faculty of Engineering and Technology, is a distinguished academician with a global outlook. Holding a Ph.D. from IIT (BHU) Varanasi and nearly a decade of research experience at Sejong University, South Korea, he seamlessly integrates international standards with rigorous technical education.
            </p>
          </motion.div>

          {/* Dr. Himanshu Pandey's Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-md p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="group flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-accent/50">
                <img
                  src={drHimanshuPandey}
                  alt="Dr. Himanshu Pandey"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Dr. Himanshu Pandey</h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  Associate Professor & Program Coordinator M.Tech
                </p>
                <p className="text-accent text-xs mt-1">
                  Training & Placement In charge
                </p>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-1 -left-1 w-5 h-5 text-accent/30" />
              <blockquote className="text-muted-foreground text-sm leading-relaxed italic pl-6 border-l-2 border-accent/50">
                "Our mission is to transform students into industry-ready professionals through a blend of technical mastery and soft-skill development. We are committed to fostering a vibrant recruitment ecosystem that connects our innovative talent pool with global industry leaders."
              </blockquote>
            </div>

            <p className="text-foreground mt-5 leading-relaxed text-sm">
              Dr. Himanshu Pandey is the In-charge of the Training & Placement Cell (TPC) and an Associate Professor of Computer Science at the University of Lucknow. With extensive experience in Industry-Academia collaboration, he leads the university's efforts in bridging the gap between technical education and global corporate requirements.
            </p>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
