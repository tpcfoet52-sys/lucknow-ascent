import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  { label: "Highest Package (23-24)", value: "₹23.6", unit: "LPA", icon: Award },
  { label: "Average Package (23-24)", value: "₹8.5", unit: "LPA", icon: TrendingUp },
  { label: "Students Placed (23-24)", value: "3451", unit: "+", icon: Users },
  { label: "Partner Companies", value: "500", unit: "+", icon: Building2 },
];

const yearlyData = [
  { 
    year: "2020-21", 
    ugPlaced: 888, 
    pgPlaced: 325, 
    avgPackage: 5.5,
    highestPackage: 10,
    total: 1213
  },
  { 
    year: "2021-22", 
    ugPlaced: 935, 
    pgPlaced: 1218, 
    avgPackage: 7.0,
    highestPackage: 15,
    total: 2153
  },
  { 
    year: "2022-23", 
    ugPlaced: 1011, 
    pgPlaced: 1249, 
    avgPackage: 8.25,
    highestPackage: 23.6,
    total: 2260
  },
  { 
    year: "2023-24", 
    ugPlaced: 1507, 
    pgPlaced: 1944, 
    avgPackage: 8.5,
    highestPackage: 23.6,
    total: 3451
  },
];

const PlacementStats = () => {
  const maxPlacements = Math.max(...yearlyData.map(d => d.total));

  return (
    <section id="statistics" className="section-padding bg-cream">
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
            Year-Wise Placement Growth
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base">
            University of Lucknow's consistent growth in campus placements.
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

        {/* Year-wise Detailed Stats */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Year-wise Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Total Students Placed</h3>
            <div className="flex items-end justify-between gap-3 h-40">
              {yearlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(data.total / maxPlacements) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
                    className="w-full bg-primary rounded-t relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.total.toLocaleString()}
                    </div>
                  </motion.div>
                  <span className="text-xs text-muted-foreground text-center">{data.year}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">4-Year Growth</span>
                <span className="text-base font-serif font-semibold text-accent">+185%</span>
              </div>
            </div>
          </motion.div>

          {/* Detailed Year Stats */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Year-wise Breakdown</h3>
            <div className="space-y-4">
              {yearlyData.map((data, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="p-3 bg-secondary/50 rounded-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground text-sm">{data.year}</span>
                    <span className="text-accent font-semibold text-sm">{data.total.toLocaleString()} placed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                    <div>
                      <span className="block">UG: {data.ugPlaced} | PG: {data.pgPlaced}</span>
                      <span className="text-accent font-medium">Avg: ₹{data.avgPackage} LPA</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground/70">Highest Package</span>
                      <span className="text-accent font-semibold">₹{data.highestPackage} LPA</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
