import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ATSScanner = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [scanning, setScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [result, setResult] = useState<any | null>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            setResult(null);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setResult(null);
        }
    };

    const startScan = () => {
        if (!file) return;
        setScanning(true);
        setScanProgress(0);

        // Simulate scanning process
        const interval = setInterval(() => {
            setScanProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setScanning(false);
                    generateMockResult();
                    return 100;
                }
                return prev + 2; // Speed of scan
            });
        }, 50);
    };

    const generateMockResult = () => {
        // Deterministic mock result based on file name length just to vary it slightly
        const score = Math.floor(Math.random() * (95 - 60 + 1)) + 60;
        setResult({
            score: score,
            keywords: {
                found: ["Communication", "Teamwork", "Problem Solving", "React", "JavaScript"],
                missing: ["TypeScript", "Next.js", "System Design", "Unit Testing"]
            },
            formatting: [
                { status: "pass", text: "File format (PDF) is ATS friendly" },
                { status: "pass", text: "No images/graphics detected" },
                { status: "warning", text: "Margins might be too narrow" }
            ]
        });
    };

    return (
        <section id="ats-scanner" className="py-12 scroll-mt-24">
            <Card className="max-w-4xl mx-auto border-dashed border-2 border-border/60 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center bg-secondary/20 border-b border-border/50 pb-8">
                    <CardTitle className="text-2xl md:text-3xl font-serif mb-2">Check Your ATS Score</CardTitle>
                    <CardDescription className="text-lg">
                        Upload your resume to see how well it parses against standard ATS algorithms.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-8 md:p-12">
                    <AnimatePresence mode="wait">
                        {!result ? (
                            <motion.div
                                key="upload"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-8"
                            >
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={`
                                        border-3 border-dashed rounded-xl p-10 text-center transition-all duration-300 cursor-pointer
                                        ${isDragging
                                            ? 'border-accent bg-accent/5 scale-[1.02]'
                                            : 'border-muted-foreground/30 hover:border-accent/50 hover:bg-secondary/30'}
                                    `}
                                    onClick={() => document.getElementById('file-upload')?.click()}
                                >
                                    <input
                                        type="file"
                                        id="file-upload"
                                        className="hidden"
                                        accept=".pdf, .docx, .doc"
                                        onChange={handleFileChange}
                                    />

                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className={`p-4 rounded-full bg-background shadow-sm ${isDragging ? 'text-accent' : 'text-muted-foreground'}`}>
                                            {file ? <FileText className="w-10 h-10" /> : <Upload className="w-10 h-10" />}
                                        </div>
                                        <div>
                                            {file ? (
                                                <>
                                                    <h3 className="text-xl font-semibold text-foreground">{file.name}</h3>
                                                    <p className="text-sm text-muted-foreground mt-1">{(file.size / 1024).toFixed(1)} KB • Ready to scan</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h3 className="text-xl font-semibold text-foreground">Drag & drop your resume here</h3>
                                                    <p className="text-sm text-muted-foreground mt-1">or click to browse (PDF only)</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {file && !scanning && (
                                    <div className="flex justify-center">
                                        <Button size="lg" onClick={(e) => { e.stopPropagation(); startScan(); }} className="px-8 text-lg h-12 rounded-full shadow-gold">
                                            Run ATS Scan
                                        </Button>
                                    </div>
                                )}

                                {scanning && (
                                    <div className="space-y-4 max-w-md mx-auto">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span>Scanning document...</span>
                                            <span>{scanProgress}%</span>
                                        </div>
                                        <Progress value={scanProgress} className="h-2" />
                                        <p className="text-center text-xs text-muted-foreground animate-pulse">
                                            Parsing formatting • Checking keywoards • Validating structure
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-background shadow-xl relative mb-6">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                className="text-muted/20"
                                            />
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                strokeDasharray={351.858}
                                                strokeDashoffset={351.858 - (351.858 * result.score) / 100}
                                                className={`transition-all duration-1000 ease-out ${result.score >= 80 ? 'text-green-500' :
                                                        result.score >= 60 ? 'text-yellow-500' : 'text-red-500'
                                                    }`}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-4xl font-bold">{result.score}</span>
                                            <span className="text-xs text-muted-foreground uppercase">Score</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">
                                        {result.score >= 80 ? 'Excellent Job!' :
                                            result.score >= 60 ? 'Good Start, Needs Polish' : 'Needs Attention'}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Your resume parsed {result.score >= 80 ? 'perfectly' : 'with some issues'}. See details below.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="border rounded-xl p-6 bg-background/50">
                                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" /> Keywords Found
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {result.keywords.found.map((k: string) => (
                                                <span key={k} className="px-2 py-1 bg-green-500/10 text-green-700 text-xs rounded-md border border-green-500/20">
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border rounded-xl p-6 bg-background/50">
                                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-500" /> Missing / Improve
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {result.keywords.missing.map((k: string) => (
                                                <span key={k} className="px-2 py-1 bg-yellow-500/10 text-yellow-700 text-xs rounded-md border border-yellow-500/20">
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-secondary/30 rounded-xl p-6">
                                    <h4 className="font-semibold mb-4">Formatting Check</h4>
                                    <div className="space-y-3">
                                        {result.formatting.map((item: any, i: number) => (
                                            <div key={i} className="flex items-center gap-3 text-sm">
                                                {item.status === 'pass' ? (
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                                )}
                                                <span className={item.status === 'pass' ? 'text-foreground' : 'text-foreground/80'}>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center pt-4">
                                    <Button variant="outline" onClick={() => { setFile(null); setResult(null); }}>
                                        Scan Another Resume
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </section>
    );
};

export default ATSScanner;
