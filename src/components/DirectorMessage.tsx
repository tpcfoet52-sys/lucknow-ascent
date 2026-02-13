import { motion } from "framer-motion";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import drHimanshuPandey from "@/assets/dr-himanshu-pandey.jpg";
import profSpSingh from "@/assets/prof-sp-singh.jpg";
import profJaiPrakashSaini from "@/assets/prof-jai-prakash-saini.png";

interface LeaderCardProps {
  name: string;
  role: string;
  institution: string;
  image: string;
  quote: string;
  bio: string;
  isFullWidth?: boolean;
}

const LeaderCard = ({ name, role, institution, image, quote, bio }: LeaderCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col"
    >
      {/* Image Section - Circular Profile Photo */}
      <div className="overflow-hidden relative bg-card flex items-center justify-center pt-6 pb-2">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300 shadow-sm relative z-10">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Decorative elements behind photo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
      </div>

      {/* Content Section */}
      <div className="p-5 pt-0 relative z-10 bg-card text-center flex-grow flex flex-col">
        <div className="mb-3">
          <h3 className="font-serif text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
            {name}
          </h3>
          <p className="text-xs text-accent mt-1 font-semibold uppercase tracking-wide">{role}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">{institution}</p>
        </div>

        <div className="relative mt-1 border-t border-border/50 pt-3 text-left">
          <Quote className="absolute top-3 -left-1 w-3.5 h-3.5 text-accent/20" />
          <blockquote className={`text-muted-foreground text-[11px] md:text-xs leading-relaxed italic pl-5 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            "{quote}"
          </blockquote>

          {isExpanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-foreground text-[11px] leading-relaxed mt-2 pt-2 border-t border-dashed border-border/50"
            >
              {bio}
            </motion.p>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center gap-1 text-accent hover:text-accent/80 transition-all text-[10px] font-bold uppercase tracking-wider group/btn"
          >
            {isExpanded ? (
              <>
                View Less <ChevronUp className="w-3 h-3 transition-transform group-hover/btn:-translate-y-0.5" />
              </>
            ) : (
              <>
                View More <ChevronDown className="w-3 h-3 transition-transform group-hover/btn:translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const DirectorMessage = () => {
  const leaders = [
    {
      name: "Prof. Jai Prakash Saini",
      role: "Vice Chancellor",
      institution: "University of Lucknow",
      image: profJaiPrakashSaini,
      quote: "Our goal is to blend our rich academic heritage with modern technological advancement. We are committed to nurturing industry-ready professionals through research-driven education and robust industry partnerships.",
      bio: "Prof. Jai Prakash Saini is the Vice-Chancellor of the University of Lucknow. An eminent academician in Electronics & Communication Engineering and an alumnus of IIT Kanpur, he brings over 38 years of expertise to the role.",
    },
    {
      name: "Prof. Satendra Pal Singh",
      role: "Dean, FoET",
      institution: "University of Lucknow",
      image: profSpSingh,
      quote: "Our mission at FoET is to nurture engineers who are not only technically proficient but also globally competitive. We welcome industry partners to engage with our vibrant talent pool.",
      bio: "Prof. Satendra Pal Singh, Dean of the Faculty of Engineering and Technology, is a distinguished academician with a global outlook. Holding a Ph.D. from IIT (BHU) Varanasi and nearly a decade of research experience at Sejong University.",
    },
    {
      name: "Dr. Himanshu Pandey",
      role: "Associate Professor",
      institution: "Training & Placement In charge",
      image: drHimanshuPandey,
      quote: "Our mission is to transform students into industry-ready professionals through a blend of technical mastery and soft-skill development. We are committed to fostering a vibrant recruitment ecosystem.",
      bio: "Dr. Himanshu Pandey is the In-charge of the Training & Placement Cell (TPC) and an Associate Professor of Computer Science at the University of Lucknow. With extensive experience in Industry-Academia collaboration.",
    },
  ];

  return (
    <section className="section-padding bg-background/50">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-accent font-medium text-xs uppercase tracking-wider">Leadership</span>
          <h2 className="heading-display text-xl md:text-2xl text-foreground mt-1">
            Messages from <span className="text-gold-gradient">Our Leaders</span>
          </h2>
        </motion.div>

        {/* All Leaders in Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
