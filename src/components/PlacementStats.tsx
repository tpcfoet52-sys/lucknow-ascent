import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  { label: "Highest Package", value: "₹48", unit: "LPA", icon: Award },
  { label: "Average Package", value: "₹18", unit: "LPA", icon: TrendingUp },
  { label: "Students Placed", value: "3000", unit: "+", icon: Users },
  { label: "Partner Companies", value: "200", unit: "+", icon: Building2 },
];

const branchData = [
  { name: "Computer Science", percentage: 98, placements: 245 },
  { name: "MBA", percentage: 95, placements: 180 },
  { name: "Electronics", percentage: 92, placements: 156 },
  { name: "Mechanical", percentage: 88, placements: 134 },
  { name: "Civil", percentage: 85, placements: 98 },
];

const yearlyData = [
  { year: "2020", placements: 780 },
  { year: "2021", placements: 920 },
  { year: "2022", placements: 1050 },
  { year: "2023", placements: 1180 },
  { year: "2024", placements: 1320 },
];

const PlacementStats = () => {
  const maxPlacements = Math.max(...yearlyData.map(d => d.placements));

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Placement Statistics</span>
          <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
            Numbers That Speak Excellence
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base">
            Our track record reflects our commitment to student success.
          </p>
        </motion.div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-md p-5 shadow-elevated-sm border border-border/50"
            >
              <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-3">
                <stat.icon className="w-4 h-4 text-accent" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-serif font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm font-medium text-accent">{stat.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Data Visualizations */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Branch-wise Placements */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Branch-wise Placement Rate</h3>
            <div className="space-y-4">
              {branchData.map((branch, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-foreground">{branch.name}</span>
                    <span className="text-sm font-medium text-accent">{branch.percentage}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${branch.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Year-wise Growth */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Year-wise Placement Growth</h3>
            <div className="flex items-end justify-between gap-3 h-40">
              {yearlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(data.placements / maxPlacements) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
                    className="w-full bg-primary rounded-t relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.placements}
                    </div>
                  </motion.div>
                  <span className="text-xs text-muted-foreground">{data.year}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">5-Year Growth</span>
                <span className="text-base font-serif font-semibold text-accent">+69%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
