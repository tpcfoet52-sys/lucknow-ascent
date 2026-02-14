import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { FileText } from "lucide-react";


const stats = [
  { label: "Highest Package (2023-24)", value: "₹26.0", unit: "LPA", icon: Award, note: "Kartikey Gupta (ECE)" },
  { label: "Average Package (Overall)", value: "₹9.0", unit: "LPA", icon: TrendingUp, note: "" },
  { label: "Jobs Offered (2024-25)", value: "548", unit: "+", icon: Users, note: "" },
  { label: "Partner Companies", value: "500", unit: "+", icon: Building2, note: "" },
];

interface PlacementData {
  year: string;
  students: number;
  estimated?: boolean;
}

// FoET / Engineering (UG 4-Year) Students Placed Data
const foetPlacementData: PlacementData[] = [
  { year: "2021", students: 300 },
  { year: "2022", students: 468 },
  { year: "2023", students: 543 },
  { year: "2024", students: 456 },
  { year: "2025", students: 548 },
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
    studentName: "Kartikey Gupta",
    branch: "ECE"
  },
  {
    year: "2024-25",
    highestPackage: 22,
    studentName: "Maria Khan",
    branch: "CSE"
  },
];

// Year-wise Companies Visited Data (Moved from CompaniesVisited.tsx)
const companiesVisitedData = [
  { year: "2024-25", companyCount: 71, pdfUrl: null },
  { year: "2023-24", companyCount: 56, pdfUrl: null },
  { year: "2022-23", companyCount: 71, pdfUrl: null },
  { year: "2021-22", companyCount: 69, pdfUrl: null },
  { year: "2020-21", companyCount: 68, pdfUrl: null },
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
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-300"
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

        {/* Graph and Companies Visited Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* FoET Line Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card rounded-xl p-5 md:p-6 shadow-elevated-sm border border-border/50 h-full flex flex-col"
          >
            <div className="mb-5">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Students Placed (UG 4-Year)
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                University of Lucknow (2020–2025)
              </p>
            </div>
            <div className="h-64 md:h-80 flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={foetPlacementData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    axisLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <YAxis
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    axisLine={{ stroke: 'hsl(var(--border))' }}
                    domain={[0, 600]}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.2)' }} />
                  <Bar
                    dataKey="students"
                    fill="hsl(var(--gold))"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                    animationDuration={1500}
                  >
                    <LabelList dataKey="students" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="bold" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm text-muted-foreground">5-Year Growth Trajectory</span>
            </div>
          </motion.div>

          {/* Year-wise Companies Visited (Sidebar) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 bg-card rounded-xl shadow-elevated-sm border border-border/50 overflow-hidden flex flex-col h-full"
          >
            <div className="p-5 border-b border-border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">Companies Visited</h3>
                  <p className="text-xs text-muted-foreground">Recruitment Partners</p>
                </div>
              </div>
            </div>

            <div className="p-0 flex-grow overflow-y-auto">
              <div className="divide-y divide-border/50">
                {companiesVisitedData.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-muted/10 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{item.year}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                        {item.companyCount}+
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Recruiting Partners</span>
                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[10px] text-accent font-medium hover:underline"
                          title="Download List"
                        >
                          <FileText className="w-3 h-3" /> PDF
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Year-wise Highest Package */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl p-5 md:p-6 shadow-elevated-sm border border-border/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Year-wise Highest Package</h3>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {yearlyData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative group h-full"
              >
                <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-lg p-5 border border-border/30 hover:border-accent/50 hover:shadow-md transition-all duration-300 h-full">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default PlacementStats;
