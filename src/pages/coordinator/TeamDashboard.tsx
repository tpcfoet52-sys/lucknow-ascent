import { Link } from "react-router-dom";
import { ArrowLeft, LogOut, LayoutDashboard, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";

const TeamDashboard = () => {
    const { logout } = useLogout();

    return (
        <div className="min-h-screen bg-background pt-20 px-4 pb-8 md:pt-28 md:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <Link to="/" className="flex items-center text-muted-foreground hover:text-accent transition-colors mb-3 text-sm">
                            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
                        </Link>
                        <span className="text-accent font-medium text-sm uppercase tracking-wider">
                            Coordinator Panel
                        </span>
                        <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-1">
                            Team <span className="text-gold-gradient">Dashboard</span>
                        </h1>
                        <p className="text-muted-foreground text-sm mt-2">
                            Manage your team's activities and resources.
                        </p>
                    </div>

                    <Button variant="outline" className="gap-2 border-border hover:border-accent/30 hover:text-accent transition-all" onClick={logout}>
                        <LogOut className="h-4 w-4" /> Logout
                    </Button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Welcome */}
                    <div className="col-span-full bg-card border border-border/50 rounded-xl p-6 shadow-sm">
                        <h2 className="font-serif text-xl font-semibold text-foreground">
                            Welcome <span className="text-gold-gradient">back!</span>
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1">
                            Access your team tools and reports below.
                        </p>
                    </div>

                    {/* Resources */}
                    <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-serif font-semibold text-foreground">Resources</span>
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <FileText className="h-4 w-4 text-primary" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-foreground">12</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Documents available</p>
                    </div>

                    {/* Activity */}
                    <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-serif font-semibold text-foreground">Activity</span>
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <LayoutDashboard className="h-4 w-4 text-accent" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-foreground">Pending</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Updates required</p>
                    </div>

                    {/* Settings */}
                    <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-serif font-semibold text-foreground">Settings</span>
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Settings className="h-4 w-4 text-primary" />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Manage profile and preferences</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDashboard;