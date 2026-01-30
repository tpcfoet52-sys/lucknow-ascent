import { motion } from "framer-motion";
import { Award } from "lucide-react";

import uolLogo from "@/assets/uol-logo.png";
import heroImage from "@/assets/university-hero-new.jpg";
import naacBadge from "@/assets/naac-badge.png";
import spChakravarti from "@/assets/sp-chakravarti.jpg";
import govindBallabhPant from "@/assets/govind-ballabh-pant.jpg";
import justiceAsAnand from "@/assets/justice-as-anand.jpg";
import jagdishGandhi from "@/assets/jagdish-gandhi.jpg";
import qurratulainHyder from "@/assets/qurratulain-hyder.jpg";
import vartikaSingh from "@/assets/vartika-singh.jpg";
import vinodMehta from "@/assets/vinod-mehta.jpg";
import nareshTrehan from "@/assets/naresh-trehan.jpg";
import rituKaridhal from "@/assets/ritu-karidhal.jpg";

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
        name: "Qurratulain Hyder",
        role: "Jnanpith Awardee Novelist",
        field: "Literature",
        image: qurratulainHyder,
        description: "One of the most influential Urdu writers of the 20th century and recipient of the Jnanpith Award. Her magnum opus 'Aag Ka Darya' is considered a masterpiece of Indo-Persian literature, chronicling 2,500 years of Indian history."
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
        name: "Jagdish Gandhi",
        role: "Founder, City Montessori School",
        field: "Education",
        image: jagdishGandhi,
        description: "Founder of City Montessori School, the world's largest school recognized by Guinness World Records. A visionary educator and recipient of multiple international awards, he has pioneered educational reforms benefiting millions of children."
    },
];

const OurAlumni = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}


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
                        </div>

                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
                            Our Distinguished Alumni
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                            Celebrating the achievements of our graduates who have made significant contributions to society and their respective fields.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Alumni Grid Section */}
            <section id="distinguished" className="py-16 md:py-24 bg-muted/30">
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
                        {alumniList.map((alumni, index) => (
                            <motion.div
                                key={alumni.name}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="group bg-background border border-border rounded-lg overflow-visible hover:shadow-xl hover:border-accent/50 transition-all duration-300 relative cursor-pointer hover:z-10"
                            >
                                <div className="p-6 text-center bg-background rounded-lg border border-border group-hover:border-accent/50 transition-colors duration-300">
                                    {alumni.image ? (
                                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                                            <img
                                                src={alumni.image}
                                                alt={alumni.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <Award className="h-10 w-10 text-primary" />
                                        </div>
                                    )}
                                    <h3 className="font-serif text-lg font-semibold text-foreground">{alumni.name}</h3>
                                    <p className="text-sm text-accent mt-1">{alumni.role}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{alumni.field}</p>
                                </div>

                                {/* Dropdown Description - Absolute positioned overlay */}
                                <div className="absolute left-0 right-0 top-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-0 z-20">
                                    <div className="bg-background border border-accent/50 rounded-b-lg shadow-xl mx-0">
                                        <div className="px-6 py-4 border-t border-border/50 bg-muted/20">
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {alumni.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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

export default OurAlumni;
