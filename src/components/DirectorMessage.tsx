import { motion } from "framer-motion";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import drHimanshuPandey from "@/assets/dr-himanshu-pandey-new.png";
import profSpSingh from "@/assets/prof-sp-singh-new.png";
import profJaiPrakashSaini from "@/assets/prof-jai-prakash-saini-new.png";

interface LeaderCardProps {
  name: string;
  role: string;
  institution: string;
  image: string;
  quote: string;
  bio: string;
  isFullWidth?: boolean;
  imageClassName?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const LeaderCard = ({ name, role, institution, image, quote, bio, imageClassName, isExpanded, onToggle }: LeaderCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col md:flex-row md:items-center p-3 md:p-5 h-full"
    >
      {/* Image Section - Circular Profile Photo */}
      <div className="flex-shrink-0 mx-auto md:mx-0 relative mb-3 md:mb-0 md:mr-5">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300 shadow-sm relative z-10">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${imageClassName || ''}`}
          />
        </div>
        {/* Decorative elements behind photo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-accent/5 rounded-full blur-2xl" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
          <div>
            <h3 className="font-serif text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
              {name}
            </h3>
            <p className="text-xs text-accent font-semibold uppercase tracking-wide">{role}</p>
          </div>
          <p className="text-[10px] text-muted-foreground font-medium md:text-right md:ml-4">{institution}</p>
        </div>

        <div className="relative mt-1 border-t border-border/50 pt-2 text-left">
          <Quote className="absolute top-2 -left-1 w-3 h-3 text-accent/20" />
          <blockquote className={`text-muted-foreground text-[10px] md:text-xs leading-relaxed italic pl-5 ${!isExpanded ? 'line-clamp-2' : ''}`}>
            "{quote}"
          </blockquote>

          {isExpanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-foreground text-[10px] md:text-xs leading-relaxed mt-2 pt-2 border-t border-dashed border-border/50"
            >
              {bio}
            </motion.p>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="mt-1 flex items-center gap-1 text-accent hover:text-accent/80 transition-all text-[10px] font-bold uppercase tracking-wider group/btn"
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const leaders = [
    {
      name: "Prof. Jai Prakash Saini",
      role: "Vice Chancellor",
      institution: "University of Lucknow",
      image: profJaiPrakashSaini,
      quote: "Our goal is to blend our rich academic heritage with modern technological advancement. We are committed to nurturing industry-ready professionals through research-driven education and robust industry partnerships.",
      bio: "Prof. Jai Prakash Saini is the Vice-Chancellor of the University of Lucknow. An eminent academician in Electronics & Communication Engineering and an alumnus of IIT Kanpur, he brings over 38 years of expertise to the role.",
      imageClassName: "scale-[1.15] -translate-y-1 group-hover:scale-[1.2]",
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
      role: "TPC Incharge",
      institution: "University of Lucknow",
      image: drHimanshuPandey,
      quote: "Our mission is to transform students into industry-ready professionals through a blend of technical mastery and soft-skill development. We are committed to fostering a vibrant recruitment ecosystem.",
      bio: "Dr. Himanshu Pandey is the Incharge of the Training & Placement Cell (TPC) and an Associate Professor of Computer Science at the University of Lucknow. With extensive experience in Industry-Academia collaboration.",
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Subtle decorative pattern - Dot Grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='currentColor'/%3E%3C/svg%3E")`,
      }} />

      <div className="container-narrow relative z-10">
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

        {/* Leaders Layout: All stacked vertically */}
        <div className="flex flex-col gap-8 w-full mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="w-full">
              <LeaderCard
                {...leader}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
