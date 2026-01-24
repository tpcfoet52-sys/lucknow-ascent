import { Link } from "react-router-dom";
import { Users, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const LoginPortal = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

            {/* Back to Home Button */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8">
                <Link to="/">
                    <Button variant="outline" size="sm" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>

            <div className="text-center mb-8 space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Welcome Back
                </h1>
                <p className="text-muted-foreground">
                    Please select your login type to continue
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
                {/* Team Login Card */}
                <Link to="/team-structure" className="group">
                    <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-primary cursor-pointer group-hover:scale-[1.02]">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Team Member</CardTitle>
                            <CardDescription>
                                Access for TPC team members and coordinators
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• View team dashboard</li>
                                <li>• Manage internal resources</li>
                                <li>• Update profile status</li>
                            </ul>
                            <Button className="w-full mt-6 group-hover:bg-primary/90" variant="outline">
                                Access Team Portal
                            </Button>
                        </CardContent>
                    </Card>
                </Link>

                {/* Admin Login Card */}
                <Link to="/admin" className="group">
                    <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-accent cursor-pointer group-hover:scale-[1.02]">
                        <CardHeader>
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                <ShieldCheck className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle className="text-xl">Administrator</CardTitle>
                            <CardDescription>
                                Restricted access for system administrators
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• Full system control</li>
                                <li>• User management</li>
                                <li>• System configuration</li>
                            </ul>
                            <Button className="w-full mt-6 border-accent text-accent hover:bg-accent hover:text-white" variant="outline">
                                Access Admin Panel
                            </Button>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default LoginPortal;
