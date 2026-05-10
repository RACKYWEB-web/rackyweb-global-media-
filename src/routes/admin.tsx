import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { BUSINESSES } from "@/lib/marketplaceData";
import {
  Activity,
  AlertCircle,
  BadgeCheck,
  Ban,
  Check,
  DollarSign,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Rackyweb" },
      { name: "description", content: "Platform administration: members, listings, articles and revenue." },
    ],
  }),
  component: Admin,
});

const SIGNUPS = [
  { d: "Mon", v: 124 }, { d: "Tue", v: 168 }, { d: "Wed", v: 192 },
  { d: "Thu", v: 220 }, { d: "Fri", v: 286 }, { d: "Sat", v: 184 }, { d: "Sun", v: 156 },
];
const PIE = [
  { name: "Pro", v: 48, fill: "oklch(0.78 0.14 85)" },
  { name: "Enterprise", v: 22, fill: "oklch(0.55 0.14 158)" },
  { name: "Free", v: 30, fill: "oklch(0.45 0.015 250)" },
];

function Admin() {
  return (
    <Layout>
      <div className="bg-ink min-h-[80vh] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs tracking-[0.3em] text-gold font-medium">CONTROL ROOM</div>
              <h1 className="mt-2 font-display text-4xl">Platform overview</h1>
            </div>
            <div className="relative">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <input placeholder="Search members, businesses, articles…" className="rounded-full bg-white/5 border border-white/10 pl-10 pr-4 py-2.5 text-sm w-80 focus:outline-none focus:border-gold" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: Users, l: "Total members", v: "284,612", d: "+1,284 today" },
              { i: ShieldCheck, l: "Verified businesses", v: "18,470", d: "+86 this week" },
              { i: DollarSign, l: "Platform GMV (MTD)", v: "$4.2M", d: "+12.4%" },
              { i: Activity, l: "Active now", v: "12,840", d: "Live" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl gradient-gold grid place-items-center text-ink">
                    <s.i size={16} />
                  </div>
                  <span className="text-xs text-emerald">{s.d}</span>
                </div>
                <div className="mt-4 font-display text-3xl">{s.v}</div>
                <div className="text-xs text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 glass rounded-2xl p-6">
              <h3 className="font-display text-xl">Signups · last 7 days</h3>
              <div className="h-64 mt-4">
                <ResponsiveContainer>
                  <BarChart data={SIGNUPS}>
                    <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                    <XAxis dataKey="d" stroke="oklch(1 0 0 / 0.5)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: "oklch(1 0 0 / 0.05)" }} contentStyle={{ background: "oklch(0.13 0.012 250)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                    <Bar dataKey="v" fill="oklch(0.78 0.14 85)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl">Revenue mix</h3>
              <div className="h-56 mt-4">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={PIE} dataKey="v" innerRadius={50} outerRadius={80} paddingAngle={4}>
                      {PIE.map((p, i) => <Cell key={i} fill={p.fill} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "oklch(0.13 0.012 250)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 text-xs">
                {PIE.map((p) => (
                  <div key={p.name} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: p.fill }} />
                    <span className="flex-1">{p.name}</span><span>{p.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 glass rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="font-display text-xl">Pending verification</h3>
              <span className="text-xs text-white/60">{BUSINESSES.length} requests</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs text-white/55 border-b border-white/10">
                  <tr>
                    <th className="text-left p-4 font-medium">Business</th>
                    <th className="text-left p-4 font-medium">Category</th>
                    <th className="text-left p-4 font-medium">Country</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-right p-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {BUSINESSES.map((b) => (
                    <tr key={b.id} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="p-4 flex items-center gap-3">
                        <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${b.accent} grid place-items-center text-xs font-bold`}>{b.initials}</div>
                        <div>
                          <div className="font-medium flex items-center gap-1.5">{b.name} {b.verified && <BadgeCheck size={12} className="text-emerald" />}</div>
                          <div className="text-xs text-white/50">{b.tagline.slice(0, 40)}…</div>
                        </div>
                      </td>
                      <td className="p-4 text-white/70">{b.category}</td>
                      <td className="p-4 text-white/70">{b.country}</td>
                      <td className="p-4">
                        <span className={`text-xs rounded-full px-2 py-0.5 ${b.verified ? "bg-emerald/15 text-emerald" : "bg-gold/15 text-gold"}`}>
                          {b.verified ? "Verified" : "Pending"}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="inline-flex gap-1">
                          <button className="h-8 w-8 grid place-items-center rounded-full bg-emerald/10 text-emerald hover:bg-emerald/20"><Check size={14} /></button>
                          <button className="h-8 w-8 grid place-items-center rounded-full bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"><Ban size={14} /></button>
                          <button className="h-8 w-8 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><AlertCircle size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
