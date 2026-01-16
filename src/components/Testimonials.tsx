import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The University of Lucknow's Training & Placement Cell provided exceptional support throughout my job search. Their industry connections and mock interview sessions were invaluable.",
    author: "Priya Sharma",
    role: "Software Engineer at Google",
    batch: "Class of 2023",
    type: "alumni",
  },
  {
    quote: "We've been recruiting from UoL for over a decade. The quality of talent, their work ethic, and the seamless coordination with the TPC makes it our preferred campus.",
    author: "Rajesh Kumar",
    role: "HR Director",
    batch: "Infosys Limited",
    type: "recruiter",
  },
  {
    quote: "From resume workshops to final placements, the TPC guided me every step of the way. I'm grateful for their mentorship that helped me land my dream job at Microsoft.",
    author: "Amit Verma",
    role: "Product Manager at Microsoft",
    batch: "Class of 2022",
    type: "alumni",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Voices of <span className="text-gold-gradient">Success</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
            >
              {/* Quote Card */}
              <div className="bg-card rounded-sm p-8 shadow-elevated-sm border border-border/50 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Quote className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-foreground text-base leading-relaxed italic flex-1 mt-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-serif font-bold text-primary-foreground text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-accent font-medium">{testimonial.batch}</p>
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    testimonial.type === "alumni" 
                      ? "bg-secondary text-secondary-foreground" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {testimonial.type === "alumni" ? "Alumni" : "Recruiter"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
