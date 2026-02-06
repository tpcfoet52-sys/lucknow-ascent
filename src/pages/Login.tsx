import { motion } from "framer-motion";

import { ShieldCheck } from "lucide-react";


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

                    <div className="max-w-md mx-auto text-center p-8 border border-dashed border-border rounded-lg bg-muted/30">
                        <ShieldCheck className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">Restricted Access</h3>
                        <p className="text-muted-foreground text-sm mt-2">
                            This portal is restricted to authorized personnel only.
                            <br />
                            Please use the direct link provided by your administrator.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Login;
