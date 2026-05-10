import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ARTICLES } from "@/lib/blogData";
import { ArrowLeft, Bookmark, Heart, MessageSquare, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const a = ARTICLES.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Rackyweb` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.image },
        ]
      : [{ title: "Article — Rackyweb" }],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="py-32 text-center">
        <h1 className="font-display text-4xl">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-emerald">Back to editorial →</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="py-32 text-center">
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: Article,
});

function Article() {
  const a = Route.useLoaderData();
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <Layout>
      <article>
        <header className="relative pt-12 pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition">
              <ArrowLeft size={14} /> All articles
            </Link>
            <div className="mt-8 text-xs tracking-[0.3em] text-emerald font-semibold">{a.category.toUpperCase()}</div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-ink">{a.title}</h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">{a.excerpt}</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-11 w-11 rounded-full gradient-luxury grid place-items-center text-white text-xs font-semibold">
                {a.author.split(" ").map((p) => p[0]).join("")}
              </div>
              <div className="text-sm">
                <div className="font-medium text-ink">{a.author}</div>
                <div className="text-muted-foreground">{a.role} · {a.date} · {a.readTime} read</div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img src={a.image} alt={a.title} className="w-full h-[520px] object-cover" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-gold">
              In every business cycle there is a moment when the consensus narrative quietly comes
              undone. The signs are subtle at first — a regulatory filing, a leadership change, a
              hiring spike in a city that wasn't on anyone's map.
            </p>
            <p>
              Then, almost overnight, the picture sharpens. That is the moment we find ourselves in
              today. Capital is moving in directions few were tracking, and the operators behind it
              are reshaping markets that, until recently, looked stable.
            </p>
            <h2 className="font-display text-3xl text-ink mt-12">A new center of gravity</h2>
            <p>
              The story is not a single market. It is the connective tissue between markets — the
              cross-border flows, the regulatory bridges, the talent corridors that didn't exist
              five years ago. We spent six months mapping these channels with three sovereign
              funds and four leading family offices.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 italic text-2xl font-display text-ink">
              "What we are seeing is not a rotation. It is a reordering."
            </blockquote>
            <p>
              Read the full report inside this issue. The patterns are clear. The implications,
              significant.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-border pt-6">
            {[Heart, Bookmark, Share2, MessageSquare].map((I, i) => (
              <button key={i} className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition">
                <I size={16} />
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">12.4k reads · 286 comments</span>
          </div>
        </div>

        {/* Comments */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h3 className="font-display text-3xl text-ink">Discussion</h3>
            <form className="mt-6 bg-card rounded-2xl border border-border p-5">
              <textarea
                placeholder="Add your perspective…"
                rows={3}
                className="w-full bg-transparent resize-none focus:outline-none text-sm"
              />
              <div className="flex justify-end">
                <button className="rounded-full gradient-gold text-ink text-sm font-semibold px-5 py-2 hover:-translate-y-0.5 transition">
                  Post comment
                </button>
              </div>
            </form>

            <div className="mt-8 space-y-6">
              {[
                { who: "Marcus Lee", role: "Partner, Tessera Capital", text: "Excellent piece. The mapping of cross-border corridors is something I haven't seen done this rigorously elsewhere." },
                { who: "Aïcha Bensalem", role: "CFO, Sahel Robotics", text: "From an operator perspective, this matches what we're experiencing on the ground in three regions." },
              ].map((c) => (
                <div key={c.who} className="bg-card rounded-2xl border border-border p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-luxury grid place-items-center text-white text-xs font-semibold">
                      {c.who.split(" ").map((p) => p[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink">{c.who}</div>
                      <div className="text-xs text-muted-foreground">{c.role}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/85">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="font-display text-3xl text-ink mb-10">Continue reading</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={r.image} alt={r.title} loading="lazy" className="h-48 w-full object-cover transition group-hover:scale-110 duration-700" />
                  </div>
                  <h4 className="mt-4 font-display text-xl text-ink group-hover:text-emerald transition">{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
