import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Award, Compass, Globe2, Sparkles, Target, Users } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rackyweb Global Media" },
      { name: "description", content: "Independent business media trusted by 12M readers and 18,000 verified companies in 64 countries." },
      { property: "og:title", content: "About Rackyweb Global Media" },
      { property: "og:description", content: "Where Business Meets Innovation." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs tracking-[0.3em] text-emerald font-medium">EST. 2018</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[1.02] max-w-4xl">
            We cover the people <span className="italic text-gradient-gold">building the future</span> of global business.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Rackyweb Global Media is an independent newsroom, intelligence platform and verified
            marketplace serving founders, operators and investors across 64 countries.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 reveal">
          <div className="overflow-hidden rounded-3xl shadow-luxe">
            <img src={aboutImg} alt="The Rackyweb editorial team" className="w-full h-[520px] object-cover" loading="lazy" width={1600} height={1100} />
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <div className="text-xs tracking-[0.3em] text-emerald">OUR MISSION</div>
            <h2 className="mt-4 font-display text-4xl text-ink leading-tight">
              Journalism that respects your time and intelligence.
            </h2>
          </div>
          <div className="reveal text-lg text-muted-foreground space-y-5 leading-relaxed">
            <p>
              We were founded on a simple belief: the best business decisions come from clear,
              unbiased reporting — not noise. Every story is editorially independent. Every
              business in our marketplace is verified.
            </p>
            <p>
              Today our newsroom spans Lagos, London, Singapore, São Paulo and Dubai, producing
              a global perspective that no single market can offer alone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl text-ink reveal">What we stand for</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Compass, title: "Editorial independence", body: "No paid coverage. Ever. Sponsored content is clearly labeled and never written by our editors." },
              { icon: Target, title: "Operator-first", body: "We write for people who build, lead and invest — not for headlines." },
              { icon: Globe2, title: "Truly global", body: "Bureaus across five continents and reporting in four languages." },
              { icon: Users, title: "Verified network", body: "Every marketplace listing passes a multi-step verification process." },
              { icon: Award, title: "Award-winning", body: "Recognized by SOPA, SABEW and the European Press Prize since 2021." },
              { icon: Sparkles, title: "Premium craft", body: "Designed, edited and engineered with the standards of luxury publishing." },
            ].map((v, i) => (
              <div key={v.title} className="reveal group bg-card rounded-2xl p-7 shadow-card-luxe hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="h-12 w-12 rounded-xl gradient-luxury grid place-items-center text-gold">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-ink text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl reveal">Built by a team of <span className="text-gradient-gold italic">86 journalists</span> and engineers.</h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto reveal">From Pulitzer-winning reporters to ex-Stripe and Apple engineers, our team obsesses over both the story and the experience.</p>
          <div className="mt-10 reveal">
            <Link to="/partner" className="inline-flex rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold-glow hover:-translate-y-0.5 transition">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
