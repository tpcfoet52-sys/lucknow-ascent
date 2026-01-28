import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
                </div>
            </div>
        </header>
    );
};

export default SubpageHeader;
