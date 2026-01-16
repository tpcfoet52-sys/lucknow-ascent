import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const DirectorMessage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Director Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative z-10 bg-primary p-3 rounded-sm shadow-elevated-lg">
                <div className="aspect-[4/5] bg-gradient-to-br from-navy-medium to-primary rounded-sm overflow-hidden flex items-end justify-center">
                  {/* Stylized silhouette/placeholder */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-32 h-32 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center mb-6">
                      <span className="font-serif text-5xl font-bold text-accent">P</span>
                    </div>
                    <h4 className="font-serif text-xl text-primary-foreground">Prof. Pankaj Kumar</h4>
                    <p className="text-primary-foreground/70 text-sm mt-1">Director, Training & Placement Cell</p>
                    <p className="text-accent text-xs mt-1">University of Lucknow</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent rounded-sm -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-sm -z-10" />
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">From the Director's Desk</span>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Message from the <span className="text-gold-gradient">Director</span>
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-4 w-8 h-8 text-accent/30" />
              <blockquote className="text-muted-foreground text-lg leading-relaxed italic pl-6 border-l-4 border-accent">
                "The Training & Placement Cell of the University of Lucknow is committed to bridging 
                the gap between academic excellence and industry requirements. Our mission is to 
                empower every student with the skills, confidence, and opportunities they need to 
                build successful careers."
              </blockquote>
            </div>

            <p className="text-foreground mt-6 leading-relaxed">
              With over 150 years of academic heritage, we have consistently produced leaders 
              who have made significant contributions across diverse industries. Our placement 
              cell works tirelessly to connect our talented students with top recruiters from 
              around the globe.
            </p>

            <p className="text-foreground mt-4 leading-relaxed">
              We invite industry partners to join us in shaping the future workforce and 
              encourage our students to leverage the resources and opportunities provided 
              to achieve their professional aspirations.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <div className="text-right">
                <p className="font-serif font-semibold text-foreground">Prof. Pankaj Kumar</p>
                <p className="text-sm text-muted-foreground">Director, TPC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
