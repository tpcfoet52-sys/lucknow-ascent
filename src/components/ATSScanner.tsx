import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle2, AlertCircle, RefreshCw, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const ATSScanner = () => {
    const [activeTab, setActiveTab] = useState<"upload" | "text">("upload");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<null | { score: number; keywords: string[]; missing: string[] }>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleSimulateAnalysis = () => {
        setIsAnalyzing(true);
        setProgress(0);
        setResult(null);

        // Simulate progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsAnalyzing(false);
                    // Mock result
                    setResult({
                        score: Math.floor(Math.random() * (85 - 60) + 60), // Random score between 60-85
                        keywords: ["Leadership", "Project Management", "Communication"],
                        missing: ["Python", "Data Analysis", "React.js"]
                    });
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            handleSimulateAnalysis();
        }
    };

    const resetScanner = () => {
        setResult(null);
        setFileName(null);
        setProgress(0);
    };

    return (
        <section id="ats-scanner" className="py-16 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-10">
                    <span className="text-accent font-medium text-sm resultuppercase tracking-wider">Free Tool</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
                        Check Your <span className="text-gold-gradient">ATS Score</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                        Upload your resume to see how well it parses against standard Applicant Tracking Systems.
                        Get instant feedback on keywords and formatting.
                    </p>
                </div>

                <Card className="border-border/50 shadow-lg overflow-hidden">
                    <div className="flex border-b border-border">
                        <button
                            onClick={() => setActiveTab("upload")}
                            className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === "upload"
                                    ? "bg-accent/5 text-accent border-b-2 border-accent"
                                    : "text-muted-foreground hover:bg-secondary/50"
                                }`}
                        >
                            Upload Resume (PDF)
                        </button>
                        <button
                            onClick={() => setActiveTab("text")}
                            className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === "text"
                                    ? "bg-accent/5 text-accent border-b-2 border-accent"
                                    : "text-muted-foreground hover:bg-secondary/50"
                                }`}
                        >
                            Paste Text
                        </button>
                    </div>

                    <CardContent className="p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center">
                        {/* analyzing State */}
                        {isAnalyzing ? (
                            <div className="w-full max-w-md text-center space-y-6">
                                <div className="relative w-24 h-24 mx-auto">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="w-full h-full border-4 border-accent/20 border-t-accent rounded-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-accent">
                                        {progress}%
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Scanning Resume...</h3>
                                    <p className="text-muted-foreground text-sm mt-1">Analyzing keywords and formatting</p>
                                </div>
                                <Progress value={progress} className="h-2" />
                            </div>
                        ) : result ? (
                            // Result State
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full max-w-2xl"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-serif font-semibold">Analysis Report</h3>
                                    <Button variant="ghost" size="sm" onClick={resetScanner} className="text-muted-foreground">
                                        <RefreshCw className="w-4 h-4 mr-2" /> Scan Another
                                    </Button>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {/* Score Card */}
                                    <div className="bg-secondary/30 rounded-lg p-6 text-center border border-border">
                                        <div className="text-sm text-muted-foreground mb-2">Overall Score</div>
                                        <div className={`text-5xl font-bold mb-2 ${result.score >= 80 ? "text-green-500" :
                                                result.score >= 60 ? "text-yellow-500" : "text-red-500"
                                            }`}>
                                            {result.score}
                                        </div>
                                        <div className="text-xs font-medium px-2 py-1 rounded bg-background inline-block">
                                            {result.score >= 80 ? "Excellent" : result.score >= 60 ? "Good Potential" : "Needs Work"}
                                        </div>
                                    </div>

                                    {/* Found Keywords */}
                                    <div className="bg-green-500/5 rounded-lg p-6 border border-green-500/20">
                                        <div className="flex items-center gap-2 text-green-600 font-semibold mb-3">
                                            <CheckCircle2 className="w-4 h-4" /> Strong Keywords
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {result.keywords.map((k, i) => (
                                                <span key={i} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Missing */}
                                    <div className="bg-red-500/5 rounded-lg p-6 border border-red-500/20">
                                        <div className="flex items-center gap-2 text-red-600 font-semibold mb-3">
                                            <AlertCircle className="w-4 h-4" /> Missing / Improve
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {result.missing.map((k, i) => (
                                                <span key={i} className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-accent/5 p-4 rounded border border-accent/20">
                                    <p className="text-sm text-foreground text-center">
                                        <strong>Tip:</strong> This is a simulation. For best results, tailor your resume specifically to the Job Description you are applying for.
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            // Upload / Input State
                            <div className="w-full max-w-lg text-center">
                                {activeTab === "upload" ? (
                                    <div className="border-2 border-dashed border-border hover:border-accent/50 rounded-xl p-10 transition-colors bg-secondary/20 cursor-pointer relative">
                                        <input
                                            type="file"
                                            accept=".pdf,.docx"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleFileUpload}
                                        />
                                        <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                            <Upload className="w-8 h-8 text-accent" />
                                        </div>
                                        <h3 className="text-lg font-medium text-foreground">Drop your resume here</h3>
                                        <p className="text-muted-foreground text-sm mt-2">
                                            Supports PDF or DOCX (Max 2MB)
                                        </p>
                                        <Button variant="outline" className="mt-6 pointer-events-none">
                                            Browse Files
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <textarea
                                            className="w-full h-64 bg-background border border-border rounded-lg p-4 resize-none focus:ring-1 focus:ring-accent focus:border-accent outline-none text-sm"
                                            placeholder="Paste your resume text here..."
                                        ></textarea>
                                        <Button onClick={handleSimulateAnalysis} className="w-full gap-2" size="lg">
                                            <FileText className="w-4 h-4" /> Analyze Text
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

export default ATSScanner;
