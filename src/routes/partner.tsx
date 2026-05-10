import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Briefcase, Megaphone, Rocket, Sparkles } from "lucide-react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner with us — Rackyweb" },
      { name: "description", content: "Editorial partnerships, brand sponsorships and distribution deals with the world's premier business platform." },
    ],
  }),
  component: Partner,
});

function Partner() {
  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs tracking-[0.3em] text-emerald">PARTNERSHIPS</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl">
            Reach the world's <span className="text-gradient-gold italic">decision makers.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            12 million readers. 18,000 verified businesses. 64 countries. Build campaigns that
            actually move markets.
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Megaphone, t: "Brand sponsorships", d: "Cross-format placements across editorial and the marketplace." },
            { i: Briefcase, t: "Editorial partnerships", d: "Co-produced research, custom reports, branded series." },
            { i: Rocket, t: "Startup distribution", d: "Featured placement, newsletter shouts, deal-flow distribution." },
            { i: Sparkles, t: "Bespoke programs", d: "Events, dinners, premium custom content for global brands." },
          ].map((p) => (
            <div key={p.t} className="bg-card rounded-2xl p-6 shadow-card-luxe hover:-translate-y-1 transition">
              <div className="h-12 w-12 rounded-xl gradient-luxury grid place-items-center text-gold"><p.i size={18} /></div>
              <h3 className="mt-5 font-display text-xl text-ink">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl text-ink">Tell us about your goals</h2>
          <p className="mt-2 text-muted-foreground">A partnerships lead will be in touch within one business day.</p>
          <form className="mt-10 grid md:grid-cols-2 gap-5">
            <Input label="Full name" />
            <Input label="Work email" type="email" />
            <Input label="Company" />
            <Input label="Role" />
            <div className="md:col-span-2">
              <label className="block">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Partnership type</div>
                <select className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold">
                  <option>Brand sponsorship</option>
                  <option>Editorial partnership</option>
                  <option>Marketplace listing</option>
                  <option>Custom program</option>
                </select>
              </label>
            </div>
            <div className="md:col-span-2">
              <label className="block">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">What are you trying to achieve?</div>
                <textarea rows={5} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
              </label>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="button" className="rounded-full gradient-gold text-ink text-sm font-semibold px-7 py-3 shadow-gold-glow hover:-translate-y-0.5 transition">
                Request a call
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</div>
      <input type={type} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold" />
    </label>
  );
}
