import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/pricing", label: "Pricing" },
  { to: "/partner", label: "Partner" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-light shadow-card-luxe"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Rackyweb" className="h-9 w-9 object-contain" />
            <div className="leading-tight">
              <div className="text-[15px] font-semibold tracking-[0.18em] text-ink">RACKYWEB</div>
              <div className="text-[10px] tracking-[0.32em] text-emerald font-medium">GLOBAL MEDIA</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-ink transition-colors"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-ink transition"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="shimmer relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-ink gradient-gold shadow-gold-glow transition-transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-light shadow-card-luxe p-4 animate-fade-in">
            <div className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-foreground/80 hover:text-ink border-b border-border/60 last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-3">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center rounded-full border border-border px-4 py-2.5 text-sm font-medium"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center rounded-full gradient-gold px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
