import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { BUSINESSES, MARKET_CATEGORIES } from "@/lib/marketplaceData";
import { BadgeCheck, Building2, Globe2, Plus, Search, Star, Upload } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Rackyweb Global Media" },
      { name: "description", content: "A verified global directory of startups and growing businesses across 64 countries." },
      { property: "og:title", content: "Rackyweb Marketplace" },
      { property: "og:description", content: "Verified businesses. Global reach." },
    ],
  }),
  component: Marketplace,
});

function Marketplace() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () =>
      BUSINESSES.filter(
        (b) =>
          (cat === "All" || b.category === cat) &&
          (q === "" || b.name.toLowerCase().includes(q.toLowerCase()) || b.tagline.toLowerCase().includes(q.toLowerCase()))
      ),
    [cat, q]
  );

  return (
    <Layout>
      <section className="relative py-20 bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full blur-3xl gradient-gold opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs tracking-[0.3em] text-gold font-medium">MARKETPLACE</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05]">
            18,400 verified businesses. <span className="text-gradient-gold italic">One platform.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            From early-stage startups to established global operators — all rigorously verified, none paid to be listed.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="shimmer relative overflow-hidden inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold-glow hover:-translate-y-0.5 transition"
            >
              <Plus size={16} /> List your business
            </button>
            <a href="#listings" className="rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
              Browse the directory
            </a>
          </div>
        </div>
      </section>

      <section id="listings" className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, sector, geography…"
                className="w-full rounded-full bg-card border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {MARKET_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition ${
                    cat === c ? "bg-ink text-white" : "bg-card border border-border text-foreground/70 hover:bg-ink hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((b, i) => (
              <div
                key={b.id}
                className="group reveal bg-card rounded-2xl p-6 shadow-card-luxe hover:-translate-y-1 transition relative overflow-hidden"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {b.sponsored && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-gold border border-gold/40 rounded-full px-2 py-0.5">
                    SPONSORED
                  </span>
                )}
                <div className={`h-32 -mx-6 -mt-6 mb-5 bg-gradient-to-br ${b.accent} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute bottom-3 left-6 h-16 w-16 rounded-xl bg-card grid place-items-center font-display text-xl font-bold text-ink shadow-luxe">
                    {b.initials}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl text-ink">{b.name}</h3>
                  {b.verified && <BadgeCheck size={16} className="text-emerald" />}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{b.category}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.tagline}</p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Globe2 size={12} /> {b.country}</span>
                  <span className="inline-flex items-center gap-1.5"><Building2 size={12} /> {b.employees}</span>
                  <span className="inline-flex items-center gap-1.5 text-gold"><Star size={12} fill="currentColor" /> {b.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {open && <ListBusinessDialog onClose={() => setOpen(false)} />}
    </Layout>
  );
}

function ListBusinessDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-card rounded-3xl shadow-luxe overflow-hidden">
        <div className="p-7 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-display text-2xl text-ink">List your business</h3>
            <p className="text-sm text-muted-foreground mt-1">Free during beta. Verification typically takes 48 hours.</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-ink">×</button>
        </div>
        <form className="p-7 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Business name"><input className="input" placeholder="Acme Inc." /></Field>
            <Field label="Category">
              <select className="input">
                {MARKET_CATEGORIES.filter((c) => c !== "All").map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Country"><input className="input" placeholder="United Kingdom" /></Field>
            <Field label="Founded"><input className="input" placeholder="2021" /></Field>
          </div>
          <Field label="Description">
            <textarea rows={3} className="input resize-none" placeholder="What does your business do?" />
          </Field>
          <div className="grid md:grid-cols-2 gap-5">
            <Uploader label="Logo" />
            <Uploader label="Cover banner" />
          </div>
          <Field label="Contact email"><input type="email" className="input" placeholder="hello@company.com" /></Field>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-full border border-border text-sm">Cancel</button>
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-full gradient-gold text-ink text-sm font-semibold">
              Submit for review
            </button>
          </div>
        </form>
      </div>
      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);border-radius:0.75rem;padding:.7rem 1rem;font-size:.875rem}.input:focus{outline:none;border-color:var(--gold)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</div>
      {children}
    </label>
  );
}

function Uploader({ label }: { label: string }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</div>
      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-gold transition cursor-pointer">
        <Upload size={20} className="mx-auto text-muted-foreground" />
        <div className="mt-2 text-sm text-muted-foreground">Click or drop an image</div>
      </div>
    </label>
  );
}
