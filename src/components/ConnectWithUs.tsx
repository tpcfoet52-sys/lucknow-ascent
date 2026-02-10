import { Share2, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const ConnectWithUs = () => {
    return (
        <section className="container-narrow mb-8">
            <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/50 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] -z-10" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                            <Share2 className="w-5 h-5 text-accent" /> Connect with Us
                        </h3>
                        <p className="text-muted-foreground text-center md:text-left">
                            Stay updated with the latest from the Training & Placement Cell.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/tpcfoet" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/PlacementEnggLU" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/tpcfoet" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="mailto:trainingfoet@gmail.com" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title="trainingfoet@gmail.com">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="tel:+917905287870" className="p-3 bg-background border border-border rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110" title="+91-79052 87870">
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithUs;
