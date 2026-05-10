import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Rackyweb Global Media" },
      { name: "description", content: "Simple plans for readers, operators and global enterprises." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const [yearly, setYearly] = useState(true);

  const plans = [
    {
      name: "Reader",
      price: 0,
      tag: "Free forever",
      desc: "For individuals who want the daily edge.",
      features: ["Morning Brief newsletter", "5 articles / month", "Basic marketplace access"],
      cta: "Start free",
    },
    {
      name: "Pro",
      price: yearly ? 18 : 24,
      tag: "Most popular",
      featured: true,
      desc: "For operators, founders and investors.",
      features: ["Unlimited articles", "Full marketplace + analytics", "Save & bookmark", "Weekly intelligence reports"],
      cta: "Start 14-day trial",
    },
    {
      name: "Enterprise",
      price: null,
      tag: "Custom",
      desc: "For teams of 10+ and global brands.",
      features: ["Unlimited seats & SSO", "Dedicated success manager", "Custom research & reports", "Sponsored placements"],
      cta: "Contact sales",
    },
  ];

  return (
    <Layout>
      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-xs tracking-[0.3em] text-emerald">PRICING</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[1.05]">
            Simple plans. <span className="italic text-gradient-gold">Serious value.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            One subscription unlocks editorial, intelligence and the marketplace.
          </p>

          <div className="mt-10 inline-flex items-center gap-1 rounded-full bg-secondary p-1">
            {[
              ["Monthly", false],
              ["Yearly · save 25%", true],
            ].map(([l, v]) => (
              <button
                key={l as string}
                onClick={() => setYearly(v as boolean)}
                className={`px-5 py-2 rounded-full text-sm transition ${
                  yearly === v ? "bg-ink text-white" : "text-foreground/70"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 transition reveal ${
                p.featured
                  ? "bg-ink text-white shadow-luxe scale-[1.02]"
                  : "bg-card text-ink shadow-card-luxe"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold text-ink text-[10px] font-bold tracking-[0.2em] px-3 py-1">
                  MOST POPULAR
                </div>
              )}
              <div className={`text-xs uppercase tracking-wider ${p.featured ? "text-gold" : "text-emerald"}`}>{p.tag}</div>
              <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                {p.price === null ? (
                  <span className="font-display text-5xl">Let's talk</span>
                ) : (
                  <>
                    <span className="font-display text-6xl">${p.price}</span>
                    <span className={`text-sm ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>/mo</span>
                  </>
                )}
              </div>
              <p className={`mt-3 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-7 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className={p.featured ? "text-gold mt-0.5" : "text-emerald mt-0.5"} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to={p.name === "Enterprise" ? "/contact" : "/signup"}
                className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "gradient-gold text-ink shadow-gold-glow hover:-translate-y-0.5"
                    : "bg-ink text-white hover:-translate-y-0.5"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl px-6 text-center mt-20 reveal">
          <Sparkles size={24} className="mx-auto text-gold" />
          <p className="mt-4 text-muted-foreground">
            All paid plans include a 14-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </section>
    </Layout>
  );
}
