import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center py-24 px-4">
                <div className="w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Welcome Back</h1>
                        <p className="text-muted-foreground">Select your portal to continue</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-3xl mx-auto">
                        {/* Team Login */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Card className="h-full hover:border-accent/50 transition-colors cursor-pointer group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-16 bg-accent/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                                <CardHeader className="text-center relative z-10">
                                    <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                                        <Users className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
                                    </div>
                                    <CardTitle className="text-2xl font-serif">Team Portal</CardTitle>
                                    <CardDescription>
                                        For placement coordinators and team members
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center relative z-10">
                                    <Link to="/team-structure">
                                        <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                            Access Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Admin Login */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-16 bg-primary/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                                <CardHeader className="text-center relative z-10">
                                    <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                        <ShieldCheck className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <CardTitle className="text-2xl font-serif">Admin Portal</CardTitle>
                                    <CardDescription>
                                        For administrators and management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center relative z-10">
                                    <Link to="/admin-login">
                                        <Button variant="default" className="w-full">
                                            Admin Login <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Login;
