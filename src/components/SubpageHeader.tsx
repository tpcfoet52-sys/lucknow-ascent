import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import tpcLogo from "@/assets/tpc-logo.jpeg";

interface SubpageLink {
    name: string;
    href: string;
}

interface SubpageHeaderProps {
    pageTitle: string;
    subpageLinks: SubpageLink[];
}

const SubpageHeader = ({ pageTitle, subpageLinks }: SubpageHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container-narrow">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Left Side: Back + Logo */}
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src={tpcLogo}
                                alt="Training & Placement Cell"
                                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                            />
                            <div className="hidden sm:block">
                                <p className="font-serif font-semibold text-sm md:text-base leading-tight text-foreground transition-colors group-hover:text-gold-600">
                                    Training & Placement Cell
                                </p>
                                <p className="text-xs tracking-wide text-muted-foreground transition-colors group-hover:text-gold-600/80">
                                    FoET, University of Lucknow
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side: Hamburger Menu */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container-narrow py-4">
                            {/* Page Title */}
                            <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
                                {pageTitle}
                            </p>

                            {/* Subpage Links */}
                            <nav className="space-y-1">
                                {subpageLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className="w-full flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors text-left"
                                    >
                                        <ChevronDown className="h-3 w-3 text-muted-foreground" />
                                        {link.name}
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Quick Links to Other Pages */}
                            <div className="mt-4 pt-4 border-t border-border">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                    More Pages
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    <Link
                                        to="/about-university"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                                    >
                                        About University
                                    </Link>
                                    <Link
                                        to="/about-tpc"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                                    >
                                        About TPC
                                    </Link>
                                    <Link
                                        to="/team"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                                    >
                                        Team Structure
                                    </Link>
                                    <Link
                                        to="/events"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                                    >
                                        Events
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default SubpageHeader;
