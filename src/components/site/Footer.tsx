import { Link } from "@tanstack/react-router";
import { Globe2, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white/80 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full blur-3xl opacity-30 gradient-gold" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-2xl font-display text-white">
              Rackyweb <span className="text-gradient-gold">Global Media</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-sm">
              Where Business Meets Innovation. The premier destination for global business
              journalism, startup intelligence and a verified marketplace serving founders
              across 64 countries.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram, Youtube, Globe2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:border-gold hover:text-gold transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Platform",
              links: [
                ["/marketplace", "Marketplace"],
                ["/blog", "Editorial"],
                ["/pricing", "Pricing"],
                ["/partner", "Partner with us"],
              ],
            },
            {
              title: "Company",
              links: [
                ["/about", "About"],
                ["/contact", "Contact"],
                ["/dashboard", "Dashboard"],
                ["/admin", "Admin"],
              ],
            },
            {
              title: "Account",
              links: [
                ["/login", "Sign in"],
                ["/signup", "Create account"],
                ["/contact", "Support"],
                ["/contact", "Press"],
              ],
            },
          ].map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold/90 mb-4">{col.title}</div>
              <ul className="space-y-3 text-sm">
                {col.links.map(([to, label]) => (
                  <li key={label}>
                    <Link to={to} className="hover:text-white transition">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-gold/90 mb-4">Newsletter</div>
            <p className="text-sm text-white/65 mb-3">The Morning Brief, weekly.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="rounded-full bg-white/[0.06] border border-white/10 px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold"
              />
              <button className="rounded-full gradient-gold text-ink text-sm font-semibold py-2.5 hover:-translate-y-0.5 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Rackyweb Global Media. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <span className="text-white/30">EN · ES · FR · 中文</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
