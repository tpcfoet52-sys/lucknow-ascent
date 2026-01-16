import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Award, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Highest Package", value: "₹48", unit: "LPA", icon: Award, change: "+12%" },
  { label: "Average Package", value: "₹18", unit: "LPA", icon: TrendingUp, change: "+8%" },
  { label: "Students Placed", value: "3000", unit: "+", icon: Users, change: "Last 5 years" },
  { label: "Partner Companies", value: "200", unit: "+", icon: Building2, change: "Fortune 500" },
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
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Placement Statistics</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Numbers That <span className="text-gold-gradient">Speak Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-lg">
            Our track record reflects our commitment to student success and industry partnerships.
          </p>
        </motion.div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-sm p-6 shadow-elevated-sm border border-border/50 hover:shadow-elevated-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-medium text-accent flex items-center gap-1">
                  {stat.change}
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-foreground">{stat.value}</span>
                <span className="text-lg font-semibold text-accent">{stat.unit}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Data Visualizations */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Branch-wise Placements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-sm p-6 md:p-8 shadow-elevated-sm border border-border/50"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Branch-wise Placement Rate</h3>
            <div className="space-y-5">
              {branchData.map((branch, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{branch.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{branch.placements} placed</span>
                      <span className="text-sm font-semibold text-accent">{branch.percentage}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${branch.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-gold-light rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Year-wise Growth */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-sm p-6 md:p-8 shadow-elevated-sm border border-border/50"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Year-wise Placement Growth</h3>
            <div className="flex items-end justify-between gap-4 h-48">
              {yearlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(data.placements / maxPlacements) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
                    className="w-full bg-gradient-to-t from-primary to-navy-light rounded-t-sm relative group cursor-pointer"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.placements} placed
                    </div>
                  </motion.div>
                  <span className="text-xs font-medium text-muted-foreground">{data.year}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">5-Year Growth</span>
                <span className="text-lg font-serif font-bold text-accent">+69%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
