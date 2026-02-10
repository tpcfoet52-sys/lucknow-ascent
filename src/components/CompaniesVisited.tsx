import { motion } from "framer-motion";
import { FileText, Building2, ExternalLink } from "lucide-react";

// Year-wise Companies Visited Data with PDF placeholders
const companiesVisitedData = [
    { year: "2024-25", companyCount: 500, pdfUrl: null },
    { year: "2023-24", companyCount: 350, pdfUrl: null },
    { year: "2022-23", companyCount: 240, pdfUrl: null },
    { year: "2021-22", companyCount: 185, pdfUrl: null },
    { year: "2020-21", companyCount: 120, pdfUrl: null },
];

const CompaniesVisited = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent font-medium text-sm uppercase tracking-wider">Recruiting Partners</span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2 tracking-tight">
                        Year-wise <span className="text-gold-gradient">Companies Visited</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base md:text-lg leading-relaxed">
                        View the list of companies that visited our campus each year.
                    </p>
                </motion.div>

                {/* Year-wise PDF Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companiesVisitedData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-card rounded-lg p-6 shadow-elevated-sm border border-border/50 hover:border-accent/50 hover:shadow-elevated-md transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-accent" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.year}</h3>
                                    <p className="text-accent font-semibold text-lg">{item.companyCount}+ Companies</p>
                                </div>
                            </div>

                            {/* PDF Download/View Button */}
                            <div className="mt-5 pt-4 border-t border-border">
                                {item.pdfUrl ? (
                                    <a
                                        href={item.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm"
                                    >
                                        <FileText className="w-4 h-4" />
                                        View Company List (PDF)
                                        <ExternalLink className="w-3 h-3 ml-auto" />
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <FileText className="w-4 h-4" />
                                        <span>PDF Coming Soon</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center text-muted-foreground text-sm mt-8"
                >
                    Click on any year to view or download the detailed list of recruiting companies.
                </motion.p>
            </div>
        </section>
    );
};

export default CompaniesVisited;
