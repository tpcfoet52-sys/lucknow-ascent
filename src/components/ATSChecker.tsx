import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

const ATSChecker = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"idle" | "analyzing" | "result">("idle");
    const [progress, setProgress] = useState(0);
    const [score, setScore] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus("idle");
        }
    };

    const analyzeResume = () => {
        if (!file) return;
        setStatus("analyzing");
        setProgress(0);

        // Simulate analysis
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatus("result");
                    setScore(Math.floor(Math.random() * (95 - 75 + 1)) + 75); // Random score between 75-95
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    const reset = () => {
        setFile(null);
        setStatus("idle");
        setProgress(0);
        setScore(0);
    };

    return (
        <section id="ats-checker" className="py-12 scroll-mt-24">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl font-semibold mb-3">ATS Score Checker</h2>
                    <p className="text-muted-foreground">
                        Upload your resume to get an instant compatibility score and feedback.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <AnimatePresence mode="wait">
                        {status === "idle" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-secondary/50 transition-colors relative">
                                    <input
                                        type="file"
                                        accept=".pdf,.docx"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="flex flex-col items-center gap-3 pointer-events-none">
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                            <Upload className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">
                                                {file ? file.name : "Click to upload or drag and drop"}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {file ? `${(file.size / 1024).toFixed(2)} KB` : "PDF or DOCX (Max 5MB)"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={analyzeResume}
                                    disabled={!file}
                                    size="lg"
                                    className="w-full gap-2"
                                >
                                    {file ? "Check Score" : "Select Result to Analyze"}
                                </Button>
                            </motion.div>
                        )}

                        {status === "analyzing" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-6 text-center py-8"
                            >
                                <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto" />
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Analyzing Resume...</h3>
                                    <Progress value={progress} className="h-2 w-full max-w-md mx-auto" />
                                    <p className="text-sm text-muted-foreground mt-2">Checking keywords and formatting ({progress}%)</p>
                                </div>
                            </motion.div>
                        )}

                        {status === "result" && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-8"
                            >
                                {/* Score Display */}
                                <div className="text-center">
                                    <div className="relative inline-flex items-center justify-center">
                                        <svg className="w-32 h-32 transform -rotate-90">
                                            <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-secondary" />
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="60"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                className={`text-accent transition-all duration-1000 ease-out`}
                                                strokeDasharray={377}
                                                strokeDashoffset={377 - (377 * score) / 100}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-4xl font-bold text-foreground">{score}</span>
                                            <span className="text-xs text-muted-foreground uppercase">Score</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mt-4">
                                        {score >= 80 ? "Excellent Profile!" : score >= 60 ? "Good Start!" : "Needs Improvement"}
                                    </h3>
                                </div>

                                {/* Feedback Grid */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                            <h4 className="font-medium text-green-700">Strengths</h4>
                                        </div>
                                        <ul className="text-sm text-green-700/80 space-y-1 list-disc list-inside">
                                            <li>Use of action verbs</li>
                                            <li>Contact information found</li>
                                            <li>Section headers are clear</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <AlertCircle className="w-5 h-5 text-orange-600" />
                                            <h4 className="font-medium text-orange-700">Improvements</h4>
                                        </div>
                                        <ul className="text-sm text-orange-700/80 space-y-1 list-disc list-inside">
                                            <li>Add more numerical results</li>
                                            <li>Customize for specific JD keywords</li>
                                            <li>Check for consistent date formatting</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Button variant="outline" onClick={reset} className="gap-2">
                                        <RefreshCw className="w-4 h-4" /> Check Another Resume
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ATSChecker;
