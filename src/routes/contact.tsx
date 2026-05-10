import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Calendar, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rackyweb Global Media" },
      { name: "description", content: "Reach our newsroom, marketplace team or book an appointment with Rackyweb." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs tracking-[0.3em] text-emerald">CONTACT</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[1.05]">
            We'd love to <span className="italic text-gradient-gold">hear from you.</span>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-card rounded-3xl shadow-card-luxe p-8 md:p-10">
            <h2 className="font-display text-2xl text-ink">Send a message</h2>
            <form className="mt-6 grid md:grid-cols-2 gap-5">
              {[
                ["Full name", "text"],
                ["Email", "email"],
                ["Company", "text"],
                ["Phone", "tel"],
              ].map(([l, t]) => (
                <label key={l} className="block">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{l}</div>
                  <input type={t} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" />
                </label>
              ))}
              <label className="md:col-span-2 block">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Reason</div>
                <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold">
                  <option>General inquiry</option>
                  <option>Newsroom tip</option>
                  <option>Marketplace support</option>
                  <option>Press</option>
                </select>
              </label>
              <label className="md:col-span-2 block">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Message</div>
                <textarea rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:border-gold" />
              </label>
              <div className="md:col-span-2 flex justify-end">
                <button type="button" className="rounded-full gradient-gold text-ink text-sm font-semibold px-7 py-3 shadow-gold-glow hover:-translate-y-0.5 transition">
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-5">
            <div className="bg-ink text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <Calendar className="text-gold" size={22} />
                <h3 className="mt-4 font-display text-2xl">Book an appointment</h3>
                <p className="mt-2 text-sm text-white/70">15-min intro call with our team.</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Mon 10:00", "Tue 14:00", "Wed 09:00", "Thu 16:00", "Fri 11:00", "Mon 13:00"].map((s) => (
                    <button key={s} className="rounded-lg border border-white/15 hover:border-gold py-2 text-xs">{s}</button>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-full gradient-gold text-ink text-sm font-semibold py-2.5">Confirm</button>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-7 shadow-card-luxe space-y-4 text-sm">
              <Row icon={Mail} label="Email" value="hello@rackyweb.com" />
              <Row icon={Phone} label="Phone" value="+1 (415) 555-0123" />
              <Row icon={MessageSquare} label="WhatsApp" value="Always-on chat" />
              <Row icon={MapPin} label="HQ" value="London · Singapore · NY" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Row({ icon: I, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl gradient-luxury grid place-items-center text-gold shrink-0">
        <I size={16} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-ink font-medium">{value}</div>
      </div>
    </div>
  );
}
