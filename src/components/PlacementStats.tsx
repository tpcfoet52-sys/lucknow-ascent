import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import gateQualifiers2025 from "@/assets/gate-qualifiers-2025.png";
import ConnectWithUs from "./ConnectWithUs";

const stats = [
  { label: "Highest Package (2024-25)", value: "₹22.0", unit: "LPA + Equity", icon: Award, note: "Maria Khan (CSE)" },
  { label: "Average Package (Overall)", value: "₹9.0", unit: "LPA", icon: TrendingUp, note: "" },
  { label: "Jobs Offered (2025)", value: "543", unit: "+", icon: Users, note: "" },
  { label: "Partner Companies", value: "500", unit: "+", icon: Building2, note: "" },
];

// FoET / Engineering (UG 4-Year) Students Placed Data
const foetPlacementData = [
  { year: "2021", students: 301 },
  { year: "2022", students: 465 },
  { year: "2023", students: 581 },
  { year: "2024", students: 473 },
  { year: "2025", students: 543, estimated: true },
];

const yearlyData = [
  {
    year: "2020-21",
    highestPackage: 9,
    studentName: "Sudhanshu Prajapati",
    branch: "CSE"
  },
  {
    year: "2021-22",
    highestPackage: 14,
    studentName: "Prateek Mishra",
    branch: "CSE"
  },
  {
    year: "2022-23",
    highestPackage: 22.2,
    studentName: "Kriti Vajpaye",
    branch: "CSE"
  },
  {
    year: "2023-24",
    highestPackage: 26,
    studentName: "Kartikey Pandey",
    branch: "ECE"
  },
  {
    year: "2024-25",
    highestPackage: 22,
    studentName: "Maria Khan",
    branch: "CSE"
  },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    const data = foetPlacementData.find(d => d.year === label);
    return (
      <div className="bg-card border border-border rounded-md px-3 py-2 shadow-lg">
        <p className="font-medium text-foreground text-sm">{label}</p>
        <p className="text-accent font-semibold">
          {payload[0].value} students
          {data?.estimated && <span className="text-muted-foreground text-xs ml-1">(estimated)</span>}
        </p>
      </div>
    );
  }
  return null;
};

const PlacementStats = () => {
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2 tracking-tight">
            Year-Wise <span className="text-gold-gradient">Placement Growth</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base md:text-lg leading-relaxed">
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
              {stat.note && <p className="text-[10px] text-accent/80 mt-0.5">{stat.note}</p>}
            </motion.div>
          ))}
        </div>

        {/* FoET Line Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50 mb-8"
        >
          <div className="mb-5">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              FoET / Engineering (UG 4-Year) Students Placed
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              University of Lucknow (2020–2025)
            </p>
          </div>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={foetPlacementData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <YAxis
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  domain={[0, 450]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="hsl(var(--accent))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 8, fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">5-Year Growth (2020-2025)</span>
            <span className="text-base font-serif font-semibold text-accent">+242%</span>
          </div>
        </motion.div>

        {/* Year-wise Highest Package - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Year-wise Highest Package</h3>
            <div className="flex items-center gap-2 text-accent">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">+200% Growth</span>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {yearlyData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-lg p-4 border border-border/30 hover:border-accent/50 transition-all duration-300 h-full">
                  {/* Year Badge */}
                  <div className="inline-block px-2 py-0.5 bg-accent/10 rounded text-accent text-xs font-semibold mb-3">
                    {data.year}
                  </div>

                  {/* Package Amount */}
                  <div className="mb-3">
                    <span className="font-serif text-2xl font-bold text-foreground">₹{data.highestPackage}</span>
                    <span className="text-accent text-sm font-medium ml-1">LPA</span>
                  </div>

                  {/* Student Info */}
                  <div className="space-y-1">
                    <p className="text-foreground text-sm font-medium leading-tight">{data.studentName}</p>
                    <p className="text-accent text-xs font-semibold">{data.branch}</p>
                  </div>

                  {/* Growth Indicator for latest */}
                  {index === yearlyData.length - 1 && (
                    <div className="mt-3 pt-2 border-t border-accent/20">
                      <div className="flex items-center gap-1 text-accent">
                        <Award className="w-3 h-3" />
                        <span className="text-[10px] font-semibold uppercase tracking-wide">Current Record</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GATE Qualifiers 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-card rounded-md p-5 md:p-6 shadow-elevated-sm border border-border/50"
        >
          <h3 className="font-serif text-lg font-semibold text-foreground mb-5 text-center">GATE Qualifiers 2025</h3>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src={gateQualifiers2025}
              alt="GATE Qualifiers 2025"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default PlacementStats;
