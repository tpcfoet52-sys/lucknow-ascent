import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Footer from "@/components/Footer";

import uolLogo from "@/assets/uol-logo.png";
import heroImage from "@/assets/university-hero-new.jpg";
import naacBadge from "@/assets/uol-category-1-badge.png";
import spChakravarti from "@/assets/sp-chakravarti.jpg";
import govindBallabhPant from "@/assets/govind-ballabh-pant.jpg";
import justiceAsAnand from "@/assets/justice-as-anand.jpg";
import jagdishGandhi from "@/assets/jagdish-gandhi.jpg";
import sureshRaina from "@/assets/suresh-raina.png";
import vartikaSingh from "@/assets/vartika-singh.jpg";
import vinodMehta from "@/assets/vinod-mehta.jpg";
import nareshTrehan from "@/assets/naresh-trehan.jpg";
import rituKaridhal from "@/assets/ritu-karidhal.jpg";
import kartikeyGupta from "@/assets/karthik-gupta.png";

const alumniLinks = [
    { name: "Alumni Network", href: "#network" },
    { name: "Distinguished Alumni", href: "#distinguished" },
    { name: "Stories", href: "#stories" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const alumniList = [
    {
        name: "Ritu Karidhal",
        role: "Senior Scientist, ISRO (Rocket Woman)",
        field: "Science & Technology",
        image: rituKaridhal,
        description: "Known as the 'Rocket Woman of India', Ritu Karidhal played a crucial role in India's Mars Orbiter Mission (Mangalyaan) and Chandrayaan-2. Her pioneering work in space science has inspired countless women to pursue careers in STEM fields."
    },
    {
        name: "Naresh Trehan",
        role: "Founder, Medanta Hospital (Padma Shri)",
        field: "Medicine & Healthcare",
        image: nareshTrehan,
        description: "A globally renowned cardiac surgeon and recipient of the Padma Shri and Padma Bhushan, Dr. Trehan founded Medanta - The Medicity. He has performed over 48,000 open-heart surgeries and revolutionized healthcare delivery in India."
    },
    {
        name: "S. P. Chakravarti",
        role: "Pioneer of Electronics Education",
        field: "Education & Technology",
        image: spChakravarti,
        description: "A visionary educator who established India's first electronics engineering department. His contributions to technical education have shaped generations of engineers and laid the foundation for India's electronics industry."
    },
    {
        name: "Govind Ballabh Pant",
        role: "Freedom Fighter & 1st CM of UP",
        field: "Politics & Governance",
        image: govindBallabhPant,
        description: "A key figure in India's independence movement and recipient of the Bharat Ratna, Pant served as the first Chief Minister of Uttar Pradesh. He championed land reforms and social justice, leaving an indelible mark on Indian democracy."
    },
    {
        name: "Justice A. S. Anand",
        role: "Former Chief Justice of India",
        field: "Law & Judiciary",
        image: justiceAsAnand,
        description: "Served as the 29th Chief Justice of India and made landmark contributions to constitutional law. His judicial wisdom and commitment to justice have significantly influenced India's legal landscape and upheld the rule of law."
    },
    {
        name: "Suresh Raina",
        role: "Indian International Cricketer",
        field: "Sports",
        image: sureshRaina,
        description: "Suresh Raina is an Indian former international cricketer. He played for the India national team and represented Uttar Pradesh in domestic cricket. He was an aggressive left-handed middle-order batsman and who occasionally bowled right-arm off-spin."
    },
    {
        name: "Vinod Mehta",
        role: "Eminent Journalist (Editor, Outlook)",
        field: "Journalism & Media",
        image: vinodMehta,
        description: "A legendary journalist who served as the founding editor of Outlook magazine for over two decades. Known for his fearless journalism and editorial independence, he shaped public discourse in India through investigative reporting."
    },
    {
        name: "Vartika Singh",
        role: "Indian model and beauty pageant titleholder",
        field: "Arts & Fashion",
        image: vartikaSingh,
        description: "A successful model and beauty pageant winner who has represented India on international platforms. She has been an advocate for women's empowerment and has used her platform to inspire young women across the country."
    },
    {
        name: "Late Jagdish Gandhi",
        role: "Founder, City Montessori School",
        field: "Education",
        image: jagdishGandhi,
        description: "Founder of City Montessori School, the world's largest school recognized by Guinness World Records. A visionary educator and recipient of multiple international awards, he has pioneered educational reforms benefiting millions of children."
    },
];

const foetAlumniList = [
    {
        name: "Kartikey Gupta",
        role: "Software Development Engineer",
        company: "Qdrant",
        batch: "2023-24",
        image: kartikeyGupta,
        description: "A talented software engineer who secured a position at Qdrant, a leading vector database company. His expertise in artificial intelligence and database technologies has made him a valuable contributor to cutting-edge AI infrastructure solutions."
    },
];

const OurAlumni = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}


            {/* Hero Section */}
            <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
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
                            Our Distinguished <span className="text-gold-gradient">Alumni</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                            Celebrating the achievements of our graduates who have made significant contributions to society and their respective fields.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Alumni Grid Section */}
            <section id="distinguished" className="section-padding bg-muted/30">
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {alumniList.map((alumni, index) => (
                            <motion.div
                                key={alumni.name}
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
                                {/* Image Section - Circular Profile Photo */}
                                <div className="overflow-hidden relative bg-card flex items-center justify-center pt-6 pb-2">
                                    {alumni.image ? (
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300 ">
                                            <img
                                                src={alumni.image}
                                                alt={alumni.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-accent/20">
                                            <Award className="h-16 w-16 text-primary/40" />
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-3 relative z-10 bg-card text-center">
                                    <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                                        {alumni.name}
                                    </h3>
                                    <p className="text-xs text-accent mt-1 font-medium">{alumni.role}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{alumni.field}</p>

                                    <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed text-left">
                                        {alumni.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Alumni Section */}
            <section className="section-padding bg-background">
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2">
                            Faculty of Engineering & Technology Alumni
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foetAlumniList.map((alumni, index) => (
                            <motion.div
                                key={alumni.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card cursor-pointer transition-all duration-300"
                            >
                                {/* Image Section - Circular Profile Photo */}
                                <div className="overflow-hidden relative bg-card flex items-center justify-center pt-6 pb-2">
                                    {alumni.image ? (
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                                            <img
                                                src={alumni.image}
                                                alt={alumni.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-accent/20">
                                            <Award className="h-16 w-16 text-primary/40" />
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-3 relative z-10 bg-card text-center">
                                    <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                                        {alumni.name}
                                    </h3>
                                    <p className="text-xs text-accent mt-1 font-medium">{alumni.role}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{alumni.company} • Batch {alumni.batch}</p>

                                    <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed text-left">
                                        {alumni.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurAlumni;
