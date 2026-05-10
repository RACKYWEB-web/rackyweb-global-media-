import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Counter } from "@/components/site/Counter";
import { ARTICLES } from "@/lib/blogData";
import { BUSINESSES } from "@/lib/marketplaceData";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Globe2,
  PlayCircle,
  Quote,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import ctaImg from "@/assets/cta.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rackyweb Global Media — Where Business Meets Innovation" },
      {
        name: "description",
        content:
          "A premium global business media platform and verified marketplace for founders, operators and investors across 64 countries.",
      },
      { property: "og:title", content: "Rackyweb Global Media" },
      { property: "og:description", content: "Where Business Meets Innovation." },
    ],
  }),
  component: Home,
});

const PARTNERS = [
  "FORBES", "REUTERS", "BLOOMBERG", "STRIPE", "APPLE", "WIRED",
  "TECHCRUNCH", "SEQUOIA", "GOLDMAN", "MORGAN", "VISA", "MASTERCARD",
];

function Home() {
  const featured = ARTICLES.find((a) => a.featured)!;
  const trending = ARTICLES.filter((a) => a.trending).slice(0, 3);
  const sponsored = BUSINESSES.filter((b) => b.sponsored);

  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % 3), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-24 min-h-[100vh] flex items-end overflow-hidden bg-ink text-white">
        <img
          src={heroImg}
          alt="Global financial district at golden hour"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full blur-3xl gradient-gold opacity-25 float" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full blur-3xl gradient-emerald opacity-25" />

        <div className="relative mx-auto max-w-7xl w-full px-6 pb-24 pt-44">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.2em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
            ISSUE 47 · MAY 2026
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Where business meets{" "}
            <span className="text-gradient-gold italic">innovation.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
            Independent business journalism, verified startup intelligence and a global
            marketplace built for the operators who are shaping the next decade.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/marketplace"
              className="shimmer relative overflow-hidden rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold-glow hover:-translate-y-0.5 transition"
            >
              Explore Marketplace
            </Link>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              <PlayCircle size={18} className="text-gold" />
              Read the May Issue
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Floating stat card */}
          <div className="mt-16 max-w-md glass rounded-2xl p-5 shadow-glass">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-gold/90">
              <TrendingUp size={14} /> WORLD INDEX · LIVE
            </div>
            <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
              {[
                ["S&P 500", "+1.42%", true],
                ["FTSE 100", "+0.21%", true],
                ["Nikkei", "-0.84%", false],
              ].map(([k, v, up]) => (
                <div key={k as string}>
                  <div className="text-white/55">{k}</div>
                  <div className={`mt-1 font-semibold ${up ? "text-emerald" : "text-rose-300"}`}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-ink/60 backdrop-blur py-4 overflow-hidden">
          <div className="marquee whitespace-nowrap text-xs tracking-[0.4em] text-white/45">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={i}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 reveal">
            {[
              { v: 12400000, suffix: "+", label: "Monthly readers" },
              { v: 64, suffix: "", label: "Countries covered" },
              { v: 18000, suffix: "+", label: "Verified businesses" },
              { v: 92, suffix: "B", prefix: "$", label: "Capital tracked" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-ink">
                  <Counter end={s.v} suffix={s.suffix} prefix={s.prefix ?? ""} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EDITORIAL */}
      <section className="relative py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <div className="text-xs tracking-[0.3em] text-emerald font-medium">EDITORIAL</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">The Cover Story</h2>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald">
              All articles <ArrowUpRight size={16} />
            </Link>
          </div>

          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid lg:grid-cols-2 gap-10 items-center reveal"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 rounded-full glass px-3 py-1 text-xs tracking-widest text-white">
                {featured.category.toUpperCase()}
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-gold font-medium">COVER · MAY 2026</div>
              <h3 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-ink group-hover:text-emerald transition">
                {featured.title}
              </h3>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full gradient-luxury grid place-items-center text-white text-xs font-semibold">
                  {featured.author.split(" ").map((p) => p[0]).join("")}
                </div>
                <div className="text-sm">
                  <div className="font-medium text-ink">{featured.author}</div>
                  <div className="text-muted-foreground">{featured.role} · {featured.readTime} read</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Trending row */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {trending.map((a, i) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="group reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs">
                  <span className="text-emerald font-semibold tracking-widest">{a.category.toUpperCase()}</span>
                  <span className="text-muted-foreground">· {a.date}</span>
                </div>
                <h4 className="mt-3 font-display text-2xl text-ink leading-snug group-hover:text-emerald transition">
                  {a.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE TEASER (DARK SECTION) */}
      <section className="relative py-28 bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full blur-3xl gradient-gold opacity-20" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl gradient-emerald opacity-25" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-14 reveal">
            <div>
              <div className="text-xs tracking-[0.3em] text-gold font-medium">MARKETPLACE</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Verified businesses. <span className="text-gradient-gold italic">Global reach.</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                A hand-curated directory of growing companies — from venture-backed startups
                to established operators in 64 markets.
              </p>
            </div>
            <Link
              to="/marketplace"
              className="hidden md:inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Browse all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">
            {sponsored.map((b) => (
              <div key={b.id} className="group glass rounded-2xl p-6 hover:-translate-y-1 transition shadow-glass">
                <div className="flex items-start justify-between">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${b.accent} grid place-items-center text-lg font-display font-bold text-white shadow-luxe`}>
                    {b.initials}
                  </div>
                  {b.sponsored && (
                    <span className="text-[10px] tracking-[0.2em] text-gold/90 border border-gold/30 rounded-full px-2 py-0.5">
                      SPONSORED
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-display text-xl">{b.name}</h3>
                  {b.verified && <BadgeCheck size={16} className="text-emerald" />}
                </div>
                <p className="mt-2 text-sm text-white/65">{b.tagline}</p>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/55">
                  <span className="inline-flex items-center gap-1.5"><Globe2 size={12} /> {b.country}</span>
                  <span className="inline-flex items-center gap-1.5"><Building2 size={12} /> {b.employees} staff</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative py-28 bg-background">
        <div className="mx-auto max-w-5xl px-6 text-center reveal">
          <Quote className="mx-auto text-gold" size={36} />
          <p className="mt-8 font-display text-3xl md:text-4xl leading-snug text-ink">
            "Rackyweb is the only publication where I read every issue. The editorial standard is
            world-class — and the marketplace put us in front of three sovereign funds."
          </p>
          <div className="mt-10 inline-flex items-center gap-4">
            <div className="h-12 w-12 rounded-full gradient-luxury grid place-items-center text-white font-semibold">EM</div>
            <div className="text-left">
              <div className="font-medium text-ink">Elena Marchetti</div>
              <div className="text-sm text-muted-foreground">CEO, Helix Bio · Switzerland</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl gradient-luxury text-white p-10 md:p-16 shadow-luxe">
            <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
            <div className="relative max-w-2xl">
              <Sparkles className="text-gold" size={28} />
              <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight">
                Join the global business class.
              </h2>
              <p className="mt-5 text-lg text-white/80">
                Subscribe to The Morning Brief and receive 3 daily intelligence reports
                trusted by 12 million readers.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3.5 text-sm placeholder:text-white/45 focus:outline-none focus:border-gold"
                />
                <button className="rounded-full gradient-gold text-ink font-semibold px-6 py-3.5 text-sm hover:-translate-y-0.5 transition">
                  Subscribe — Free
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
