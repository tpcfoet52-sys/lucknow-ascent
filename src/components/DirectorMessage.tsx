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

const LeaderCard = ({ name, role, institution, image, quote, bio, isFullWidth = false }: LeaderCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-md p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
    >
      <div className="flex items-start gap-3">
        <div className={`group flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 ${isFullWidth ? 'border-primary/50' : 'border-accent/50'}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-sm text-foreground">{name}</h3>
          <p className="text-muted-foreground text-[11px] leading-tight">{role}</p>
          <p className="text-accent text-[10px]">{institution}</p>
        </div>
      </div>

      <div className="mt-3">
        <div className="relative">
          <Quote className="absolute -top-0.5 -left-0.5 w-3 h-3 text-accent/30" />
          <blockquote className={`text-muted-foreground text-[11px] leading-relaxed italic pl-4 border-l border-accent/50 ${!isExpanded ? 'line-clamp-2' : ''}`}>
            "{quote}"
          </blockquote>
        </div>

        {!isExpanded && (
          <p className="text-foreground leading-relaxed text-[11px] mt-2 line-clamp-1">
            {bio}
          </p>
        )}

        {isExpanded && (
          <p className="text-foreground leading-relaxed text-[11px] mt-2">
            {bio}
          </p>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center gap-0.5 text-accent hover:text-accent/80 transition-colors text-[10px] font-medium"
        >
          {isExpanded ? (
            <>
              View Less <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              View More <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
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
      quote: "Our goal is to blend our rich academic heritage with modern technological advancement. We are committed to nurturing industry-ready professionals through research-driven education and robust industry partnerships. At the University of Lucknow, we don't just grant degrees; we empower future leaders to innovate and excel on a global stage.",
      bio: "Prof. Jai Prakash Saini is the Vice-Chancellor of the University of Lucknow. An eminent academician in Electronics & Communication Engineering and an alumnus of IIT Kanpur, he brings over 38 years of expertise to the role. Having previously led NSUT Delhi and MMMUT Gorakhpur, Prof. Saini is dedicated to transforming the university into a global hub for innovation, digital excellence, and NEP 2020 implementation.",
      isFullWidth: true
    },
    {
      name: "Prof. Satendra Pal Singh",
      role: "Dean, Faculty of Engineering & Technology",
      institution: "University of Lucknow",
      image: profSpSingh,
      quote: "Our mission at FoET is to nurture engineers who are not only technically proficient but also globally competitive. We welcome industry partners to engage with our vibrant talent pool and witness the innovation brewing at the University of Lucknow.",
      bio: "Prof. Satendra Pal Singh, Dean of the Faculty of Engineering and Technology, is a distinguished academician with a global outlook. Holding a Ph.D. from IIT (BHU) Varanasi and nearly a decade of research experience at Sejong University, South Korea, he seamlessly integrates international standards with rigorous technical education.",
      isFullWidth: false
    },
    {
      name: "Dr. Himanshu Pandey",
      role: "Associate Professor",
      institution: "Training & Placement In charge",
      image: drHimanshuPandey,
      quote: "Our mission is to transform students into industry-ready professionals through a blend of technical mastery and soft-skill development. We are committed to fostering a vibrant recruitment ecosystem that connects our innovative talent pool with global industry leaders.",
      bio: "Dr. Himanshu Pandey is the In-charge of the Training & Placement Cell (TPC) and an Associate Professor of Computer Science at the University of Lucknow. With extensive experience in Industry-Academia collaboration, he leads the university's efforts in bridging the gap between technical education and global corporate requirements.",
      isFullWidth: false
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Leadership</span>
          <h2 className="heading-display text-2xl md:text-3xl text-foreground mt-2">
            Messages from Our Leaders
          </h2>
        </motion.div>

        {/* All Leaders in Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
