import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Bell, ChevronRight, DollarSign, Eye, Heart, MessageSquare, Settings, TrendingUp, Users } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Rackyweb" },
      { name: "description", content: "Your business performance, audience and pipeline at a glance." },
    ],
  }),
  component: Dashboard,
});

const REVENUE = [
  { m: "Jan", v: 18 }, { m: "Feb", v: 26 }, { m: "Mar", v: 32 },
  { m: "Apr", v: 41 }, { m: "May", v: 38 }, { m: "Jun", v: 52 },
  { m: "Jul", v: 64 }, { m: "Aug", v: 71 }, { m: "Sep", v: 84 },
  { m: "Oct", v: 92 }, { m: "Nov", v: 108 }, { m: "Dec", v: 124 },
];

const TRAFFIC = [
  { m: "M", v: 4200 }, { m: "T", v: 5800 }, { m: "W", v: 6700 },
  { m: "T", v: 6100 }, { m: "F", v: 7900 }, { m: "S", v: 5200 }, { m: "S", v: 4800 },
];

function Dashboard() {
  return (
    <Layout>
      <div className="bg-cream min-h-[80vh]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs tracking-[0.3em] text-emerald font-medium">DASHBOARD</div>
              <h1 className="mt-2 font-display text-4xl text-ink">Good morning, Elena.</h1>
              <p className="mt-1 text-muted-foreground text-sm">Here's what's moving today.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border hover:border-gold transition relative">
                <Bell size={16} />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald" />
              </button>
              <Link to="/admin" className="rounded-full bg-ink text-white text-sm px-5 py-2.5 hover:-translate-y-0.5 transition">
                Admin view
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: DollarSign, label: "Revenue (MTD)", v: "$148,290", delta: "+18.4%", up: true },
              { icon: Eye, label: "Profile views", v: "62,840", delta: "+12.1%", up: true },
              { icon: Users, label: "New leads", v: "1,284", delta: "+24.0%", up: true },
              { icon: TrendingUp, label: "Conversion", v: "4.7%", delta: "-0.3%", up: false },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-2xl p-5 shadow-card-luxe">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl gradient-luxury grid place-items-center text-gold">
                    <s.icon size={16} />
                  </div>
                  <span className={`text-xs font-medium ${s.up ? "text-emerald" : "text-rose-500"}`}>{s.delta}</span>
                </div>
                <div className="mt-4 font-display text-3xl text-ink">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-card-luxe">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl text-ink">Revenue trajectory</h3>
                  <div className="text-xs text-muted-foreground">Last 12 months · USD thousands</div>
                </div>
                <select className="text-xs bg-secondary border border-border rounded-full px-3 py-1.5">
                  <option>2026</option><option>2025</option>
                </select>
              </div>
              <div className="h-72 mt-5">
                <ResponsiveContainer>
                  <AreaChart data={REVENUE}>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.78 0.14 85)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="oklch(0.78 0.14 85)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="oklch(0 0 0 / 0.06)" vertical={false} />
                    <XAxis dataKey="m" stroke="oklch(0.45 0.015 250)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis stroke="oklch(0.45 0.015 250)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "oklch(0.13 0.012 250)", border: "none", borderRadius: 12, color: "white" }} />
                    <Area type="monotone" dataKey="v" stroke="oklch(0.78 0.14 85)" strokeWidth={2.5} fill="url(#g)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-ink text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <h3 className="font-display text-xl">Audience this week</h3>
                <div className="text-xs text-white/60">Daily unique visitors</div>
                <div className="h-56 mt-5">
                  <ResponsiveContainer>
                    <BarChart data={TRAFFIC}>
                      <XAxis dataKey="m" stroke="oklch(1 0 0 / 0.5)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{ fill: "oklch(1 0 0 / 0.05)" }} contentStyle={{ background: "oklch(1 0 0 / 0.95)", border: "none", borderRadius: 12, color: "oklch(0.13 0.012 250)" }} />
                      <Bar dataKey="v" fill="oklch(0.55 0.14 158)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                  <div className="text-2xl font-display">40,720</div>
                  <div className="text-xs text-white/60">+18% vs. last week</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-card rounded-2xl shadow-card-luxe overflow-hidden">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-display text-xl text-ink">Recent activity</h3>
                <button className="text-xs text-emerald hover:underline">View all</button>
              </div>
              <ul className="divide-y divide-border">
                {[
                  { who: "Marcus Lee", act: "started following your business", time: "2m" },
                  { who: "Northwind Capital", act: "viewed your profile", time: "18m" },
                  { who: "Aïcha Bensalem", act: "left a 5★ review", time: "1h" },
                  { who: "Lumen Health", act: "requested a partnership", time: "3h" },
                  { who: "Hadi Mansour", act: "shared your latest article", time: "5h" },
                ].map((r, i) => (
                  <li key={i} className="p-4 flex items-center gap-4 hover:bg-secondary/40 transition">
                    <div className="h-10 w-10 rounded-full gradient-luxury grid place-items-center text-white text-xs font-semibold">
                      {r.who.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="font-medium text-ink">{r.who}</span>{" "}
                      <span className="text-muted-foreground">{r.act}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{r.time}</div>
                    <ChevronRight size={14} className="text-muted-foreground" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="bg-card rounded-2xl p-6 shadow-card-luxe">
                <h3 className="font-display text-lg text-ink">Profile</h3>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-ink font-semibold">EM</div>
                  <div>
                    <div className="text-sm font-medium text-ink">Elena Marchetti</div>
                    <div className="text-xs text-muted-foreground">CEO · Helix Bio</div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 text-center text-xs">
                  <Stat n="284" l="Followers" />
                  <Stat n="48" l="Posts" />
                  <Stat n="12" l="Reviews" />
                </div>
                <button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full border border-border py-2 text-sm hover:border-gold transition">
                  <Settings size={14} /> Manage profile
                </button>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card-luxe">
                <h3 className="font-display text-lg text-ink">Conversations</h3>
                <ul className="mt-3 space-y-3">
                  {["Northwind Capital", "Lumen Health", "Atlas Realty"].map((n) => (
                    <li key={n} className="flex items-center gap-3 text-sm">
                      <MessageSquare size={14} className="text-gold" />
                      <span className="flex-1 text-ink">{n}</span>
                      <span className="h-2 w-2 rounded-full bg-emerald" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-xl text-ink">{n}</div>
      <div className="text-muted-foreground">{l}</div>
    </div>
  );
}
