import { Link } from "react-router-dom";
import { ArrowLeft, LogOut, LayoutDashboard, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


import { useLogout } from "@/hooks/useLogout";

const TeamDashboard = () => {

    const { logout } = useLogout();


    return (
        // FIXED: Added pt-20 (mobile) and md:pt-28 (desktop) to prevent Header overlap
        <div className="min-h-screen bg-gray-50 pt-20 px-4 pb-4 md:pt-28 md:px-8 md:pb-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <Link to="/" className="flex items-center text-muted-foreground hover:text-primary mb-2">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-navy-900">Team Dashboard</h1>
                    <p className="text-muted-foreground">Manage your team's activities and resources</p>
                </div>

                <Button variant="outline" className="gap-2" onClick={logout}>
                    <LogOut className="h-4 w-4" /> Logout
                </Button>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Welcome Card */}
                <Card className="col-span-full bg-gradient-to-r from-navy-900 to-navy-800 text-white border-none">
                    <CardHeader>
                        <CardTitle className="text-2xl">Welcome back!</CardTitle>
                        <CardDescription className="text-gray-300">
                            Access your team tools and reports below.
                        </CardDescription>
                    </CardHeader>
                </Card>

                {/* Placeholder Widget 1 */}
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Resources</CardTitle>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-xs text-muted-foreground">Documents available</p>
                    </CardContent>
                </Card>

                {/* Placeholder Widget 2 */}
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Activity</CardTitle>
                        <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">Pending</p>
                        <p className="text-xs text-muted-foreground">Updates required</p>
                    </CardContent>
                </Card>

                {/* Placeholder Widget 3 */}
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Settings</CardTitle>
                        <Settings className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Manage profile and preferences</p>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default TeamDashboard;