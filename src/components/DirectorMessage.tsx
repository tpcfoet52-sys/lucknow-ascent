import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const DirectorMessage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Dean Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Main Image Frame */}
              <div className="relative z-10 bg-secondary p-2 rounded-md shadow-elevated-md">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary rounded overflow-hidden flex items-end justify-center">
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-accent/50 flex items-center justify-center mb-4">
                      <span className="font-serif text-4xl font-semibold text-primary">S</span>
                    </div>
                    <h4 className="font-serif text-lg text-foreground">Prof. S.P. Singh</h4>
                    <p className="text-muted-foreground text-sm mt-1">Dean, Faculty of Engineering & Technology</p>
                    <p className="text-accent text-xs mt-1">University of Lucknow</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent/30 rounded-md -z-10" />
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">From the Dean's Desk</span>
            <h2 className="heading-display text-2xl md:text-3xl text-foreground mt-2 mb-5">
              Message from the Dean, FoET
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-1 -left-3 w-6 h-6 text-accent/30" />
              <blockquote className="text-muted-foreground text-base leading-relaxed italic pl-5 border-l-2 border-accent/50">
                "The Training & Placement Cell of the University of Lucknow is committed to bridging 
                the gap between academic excellence and industry requirements. Our mission is to 
                empower every student with the skills, confidence, and opportunities they need to 
                build successful careers."
              </blockquote>
            </div>

            <p className="text-foreground mt-5 leading-relaxed text-sm">
              With over 100 years of academic heritage, the Faculty of Engineering & Technology 
              has consistently produced leaders who have made significant contributions across 
              diverse industries. Our placement cell works tirelessly to connect our talented 
              students with top recruiters, achieving record-breaking placements year after year.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <div className="text-right">
                <p className="font-serif font-semibold text-foreground">Prof. Satendra Pal Singh</p>
                <p className="text-sm text-muted-foreground">Dean, FoET</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
