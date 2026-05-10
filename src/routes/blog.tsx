import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ARTICLES, CATEGORIES } from "@/lib/blogData";
import { Search, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Editorial — Rackyweb Global Media" },
      { name: "description", content: "Long-form business journalism, market intelligence and startup reporting from 64 countries." },
      { property: "og:title", content: "Rackyweb Editorial" },
      { property: "og:description", content: "Independent business journalism." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => (cat === "All" || a.category === cat) &&
      (q === "" || (a.title + a.excerpt).toLowerCase().includes(q.toLowerCase())));
  }, [cat, q]);

  return (
    <Layout>
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs tracking-[0.3em] text-emerald font-medium">EDITORIAL</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-ink">The Brief.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Independent business journalism, updated daily. Read by 12M operators worldwide.
          </p>

          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-5">
            <div className="relative flex-1 max-w-lg">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles, authors, topics…"
                className="w-full rounded-full bg-card border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition ${
                    cat === c
                      ? "bg-ink text-white"
                      : "bg-secondary text-foreground/70 hover:bg-ink hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] text-gold mb-6">
            <TrendingUp size={14} /> TRENDING NOW
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a, i) => (
              <Link
                to="/blog/$slug"
                params={{ slug: a.slug }}
                key={a.slug}
                className="group reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs">
                  <span className="text-emerald font-semibold tracking-widest">
                    {a.category.toUpperCase()}
                  </span>
                  <span className="text-muted-foreground">· {a.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink leading-snug group-hover:text-emerald transition">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  By <span className="text-ink font-medium">{a.author}</span> · {a.date}
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No articles match your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
