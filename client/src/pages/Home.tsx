// Political Fact-Checker Dashboard — Civic Transparency Portal design
// Colors: warm white bg (#FAFAF8), deep navy brand (#1E3A5F), verdict spectrum green→red
// Fonts: Sora (display) + Inter (body)
// Layout: Asymmetric hero → stats bar → charts + feed → full report table

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart, Bar, PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Legend
} from "recharts";
import { reports, metrics, VERDICT_COLORS, CATEGORY_COLORS, type Verdict, type Category } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import { ExternalLink, ChevronDown, ChevronUp, AlertCircle, RefreshCw, Filter } from "lucide-react";

// ---- Verdict Badge ----
function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const c = VERDICT_COLORS[verdict];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.bg} ${c.text} border ${c.border}`}>
      {verdict}
    </span>
  );
}

// ---- Animated Stat Card ----
function StatCard({ label, value, suffix = "", delay = 0, accent = "#1E3A5F", isPercent = false }: {
  label: string; value: number; suffix?: string; delay?: number; accent?: string; isPercent?: boolean;
}) {
  const count = useCountUp(value, 1400, delay);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col gap-1"
    >
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>
      <span className="text-3xl font-bold" style={{ color: accent, fontFamily: "'Sora', sans-serif" }}>
        {count}{suffix}
      </span>
    </motion.div>
  );
}

// ---- Report Card ----
function ReportCard({ report, index }: { report: typeof reports[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const vc = VERDICT_COLORS[report.verdict];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`bg-white rounded-xl shadow-sm border-l-4 border border-slate-100 overflow-hidden`}
      style={{ borderLeftColor: vc.hex }}
    >
      <div
        className="p-4 cursor-pointer hover:bg-slate-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <VerdictBadge verdict={report.verdict} />
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                {report.category}
              </span>
              {report.followUpRequired && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium flex items-center gap-1">
                  <AlertCircle size={10} /> Follow-Up
                </span>
              )}
            </div>
            <h3 className="text-sm font-semibold text-slate-800 leading-snug">{report.title}</h3>
            <div className="flex items-center gap-3 mt-1.5">
              {report.keyFigures.map(f => (
                <span key={f} className="text-xs text-slate-500">{f}</span>
              ))}
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400">{report.reportDate}</span>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 flex-shrink-0 mt-1">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-slate-100 pt-3">
              <p className="text-sm text-slate-600 leading-relaxed">{report.fullDetails}</p>
              <a
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors"
              >
                View in Notion <ExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ---- Main Dashboard ----
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedVerdict, setSelectedVerdict] = useState<Verdict | "All">("All");

  const filteredReports = reports.filter(r => {
    const catMatch = selectedCategory === "All" || r.category === selectedCategory;
    const verdictMatch = selectedVerdict === "All" || r.verdict === selectedVerdict;
    return catMatch && verdictMatch;
  });

  const verdictChartData = Object.entries(metrics.verdictDistribution)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value, fill: VERDICT_COLORS[name as Verdict]?.hex || "#6B7280" }));

  const categoryChartData = Object.entries(metrics.categoryDistribution)
    .map(([name, value]) => ({ name, value, fill: CATEGORY_COLORS[name] || "#6B7280" }));

  const falseCount = useCountUp(metrics.falseRate, 1400, 200);
  const totalCount = useCountUp(metrics.totalReports, 1200, 0);
  const followUpCount = useCountUp(metrics.followUpRequired, 1200, 400);

  const categories = ["All", ...Array.from(new Set(reports.map(r => r.category)))] as (Category | "All")[];
  const verdicts: (Verdict | "All")[] = ["All", "True", "Mostly True", "Mixed", "Mostly False", "False"];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF8", fontFamily: "'Inter', sans-serif" }}>
      {/* ---- HERO HEADER ---- */}
      <header
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F2240 0%, #1E3A5F 60%, #1a4a7a 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/86197964/67NcppCEmQeWAV64GcUAW6/hero-bg-4q9kEtJtsBV4FncSdjKyhb.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left: Title */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/80 font-medium">Live from Notion · Updated {metrics.lastUpdated}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Political<br />Fact-Checker
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/70 text-base leading-relaxed max-w-lg"
              >
                A public transparency dashboard tracking political claims, verdicts, and accountability metrics — sourced directly from our Notion research log.
              </motion.p>
            </div>

            {/* Right: Hero Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 lg:gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {totalCount}
                </div>
                <div className="text-xs text-white/60 mt-1 font-medium">Reports</div>
              </div>
              <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-red-400/30">
                <div className="text-3xl font-bold text-red-300" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {falseCount}%
                </div>
                <div className="text-xs text-red-300/80 mt-1 font-medium">False/Mostly False</div>
              </div>
              <div className="bg-amber-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-amber-400/30">
                <div className="text-3xl font-bold text-amber-300" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {followUpCount}
                </div>
                <div className="text-xs text-amber-300/80 mt-1 font-medium">Need Follow-Up</div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ---- STATS BAR ---- */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(metrics.verdictDistribution).map(([verdict, count], i) => {
              const vc = VERDICT_COLORS[verdict as Verdict];
              const pct = Math.round((count / metrics.totalReports) * 100);
              return (
                <motion.div
                  key={verdict}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">{verdict}</span>
                    <span className="text-xs font-bold" style={{ color: vc.hex }}>{count}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: vc.hex }}
                    />
                  </div>
                  <span className="text-xs text-slate-400">{pct}%</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- MAIN CONTENT ---- */}
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ---- LEFT: Charts ---- */}
          <div className="lg:col-span-1 flex flex-col gap-6">

            {/* Verdict Donut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-5"
            >
              <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Verdict Distribution</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={verdictChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {verdictChartData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`${value} reports`, ""]}
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-1.5 mt-2">
                {verdictChartData.map(d => (
                  <div key={d.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.fill }} />
                      <span className="text-slate-600">{d.name}</span>
                    </div>
                    <span className="font-semibold text-slate-700">{d.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-5"
            >
              <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Claims by Category</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={categoryChartData} layout="vertical" margin={{ left: 0, right: 20 }}>
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={110} />
                  <Tooltip
                    formatter={(value: number) => [`${value} reports`, ""]}
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {categoryChartData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Key Figures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-5"
            >
              <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Key Figures</h2>
              <div className="flex flex-col gap-3">
                {Object.entries(metrics.figureStats).map(([fig, stats]) => {
                  const falseRate = Math.round((stats.falseCount / stats.total) * 100);
                  return (
                    <div key={fig} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-700">{fig}</span>
                        <span className="text-slate-500">{stats.total} claims · <span className="text-red-600 font-semibold">{falseRate}% false</span></span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${falseRate}%` }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="h-full rounded-full bg-red-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ---- RIGHT: Reports Feed ---- */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Filter size={14} className="text-slate-500" />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Filter Reports</span>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-xs text-slate-500 mb-1.5 block">Category</span>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedCategory === cat
                            ? "text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                        style={selectedCategory === cat ? { backgroundColor: cat === "All" ? "#1E3A5F" : CATEGORY_COLORS[cat] || "#1E3A5F" } : {}}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-500 mb-1.5 block">Verdict</span>
                  <div className="flex flex-wrap gap-1.5">
                    {verdicts.map(v => (
                      <button
                        key={v}
                        onClick={() => setSelectedVerdict(v)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedVerdict === v
                            ? "text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                        style={selectedVerdict === v ? { backgroundColor: v === "All" ? "#1E3A5F" : VERDICT_COLORS[v as Verdict]?.hex || "#1E3A5F" } : {}}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results count */}
            <div className="flex items-center justify-between px-1">
              <span className="text-sm text-slate-500">
                Showing <strong className="text-slate-700">{filteredReports.length}</strong> of {reports.length} reports
              </span>
              {(selectedCategory !== "All" || selectedVerdict !== "All") && (
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedVerdict("All"); }}
                  className="text-xs text-blue-700 hover:text-blue-900 font-medium flex items-center gap-1"
                >
                  <RefreshCw size={11} /> Clear filters
                </button>
              )}
            </div>

            {/* Report Cards */}
            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {filteredReports.map((report, i) => (
                  <ReportCard key={report.id} report={report} index={i} />
                ))}
              </AnimatePresence>
              {filteredReports.length === 0 && (
                <div className="bg-white rounded-xl border border-slate-100 p-8 text-center text-slate-400 text-sm">
                  No reports match the selected filters.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ---- FULL DATA TABLE ---- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800" style={{ fontFamily: "'Sora', sans-serif" }}>
              All Reports
            </h2>
            <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
              {reports.length} total entries
            </span>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Claim</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">Verdict</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Category</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">Key Figures</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((r, i) => (
                    <tr
                      key={r.id}
                      className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i % 2 === 0 ? "" : "bg-slate-50/30"}`}
                    >
                      <td className="px-4 py-3">
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-800 hover:text-blue-700 transition-colors line-clamp-2 flex items-start gap-1 group"
                        >
                          {r.title}
                          <ExternalLink size={11} className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <VerdictBadge verdict={r.verdict} />
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-slate-600">{r.category}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {r.keyFigures.map(f => (
                            <span key={f} className="text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{f}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-xs text-slate-500">{r.reportDate}</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          r.status === "Initial Coverage" ? "bg-blue-50 text-blue-700" :
                          r.status === "Follow-Up Pending" ? "bg-amber-50 text-amber-700" :
                          r.status === "Follow-Up Complete" ? "bg-emerald-50 text-emerald-700" :
                          "bg-slate-100 text-slate-500"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-700" style={{ fontFamily: "'Sora', sans-serif" }}>
              Political Fact-Checker
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">Data sourced from Notion</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Last updated: {metrics.lastUpdated}</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
