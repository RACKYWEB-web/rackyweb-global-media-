import { createFileRoute, Link } from "@tanstack/react-router";
import { Apple, Github, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Sign in — Rackyweb" }, { name: "description", content: "Sign in to Rackyweb Global Media." }],
  }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:block relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/70 to-emerald-deep/40" />
        <div className="relative h-full flex flex-col justify-between p-12 text-white">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 object-contain" />
            <div>
              <div className="text-sm tracking-[0.18em] font-semibold">RACKYWEB</div>
              <div className="text-[10px] tracking-[0.32em] text-gold">GLOBAL MEDIA</div>
            </div>
          </Link>
          <div>
            <h2 className="font-display text-4xl leading-tight max-w-md">
              "Reading Rackyweb is the best 20 minutes of my morning."
            </h2>
            <div className="mt-6 text-sm text-white/70">— Marcus Lee, Partner at Tessera Capital</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden mb-10 flex items-center gap-2 text-sm text-muted-foreground">← Back</Link>
          <h1 className="font-display text-4xl text-ink">Welcome back.</h1>
          <p className="mt-2 text-muted-foreground">Sign in to continue.</p>

          <div className="mt-8 space-y-3">
            <button className="w-full rounded-xl border border-border py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-gold transition">
              <Apple size={16} /> Continue with Apple
            </button>
            <button className="w-full rounded-xl border border-border py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-gold transition">
              <Github size={16} /> Continue with Google
            </button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> OR <div className="flex-1 h-px bg-border" />
          </div>

          <form className="space-y-4">
            <label className="block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Email</div>
              <div className="relative">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="email" className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold" />
              </div>
            </label>
            <label className="block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Password</div>
              <input type="password" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold" />
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> Remember me</label>
              <a href="#" className="text-emerald hover:underline">Forgot password?</a>
            </div>
            <button type="button" className="w-full rounded-full gradient-gold text-ink font-semibold py-3 shadow-gold-glow hover:-translate-y-0.5 transition">
              Sign in
            </button>
          </form>

          <div className="mt-8 text-sm text-center text-muted-foreground">
            New here? <Link to="/signup" className="text-ink font-medium hover:text-emerald">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
