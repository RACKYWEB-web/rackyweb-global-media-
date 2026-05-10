import { createFileRoute, Link } from "@tanstack/react-router";
import { Apple, Check, Github } from "lucide-react";
import logo from "@/assets/logo.png";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [{ title: "Create account — Rackyweb" }, { name: "description", content: "Create your Rackyweb account." }],
  }),
  component: Signup,
});

function Signup() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="flex items-center justify-center p-8 md:p-16 order-2 lg:order-1">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-10 flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 object-contain" />
            <div>
              <div className="text-sm tracking-[0.18em] font-semibold text-ink">RACKYWEB</div>
              <div className="text-[10px] tracking-[0.32em] text-emerald">GLOBAL MEDIA</div>
            </div>
          </Link>

          <h1 className="font-display text-4xl text-ink">Create your account.</h1>
          <p className="mt-2 text-muted-foreground">Free forever for individual readers.</p>

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

          <form className="grid grid-cols-2 gap-4">
            <Input label="First name" />
            <Input label="Last name" />
            <div className="col-span-2"><Input label="Work email" type="email" /></div>
            <div className="col-span-2"><Input label="Password" type="password" /></div>
            <div className="col-span-2 text-xs text-muted-foreground">
              By creating an account you agree to our <a className="text-emerald hover:underline" href="#">Terms</a> and <a className="text-emerald hover:underline" href="#">Privacy Policy</a>.
            </div>
            <button type="button" className="col-span-2 rounded-full gradient-gold text-ink font-semibold py-3 shadow-gold-glow hover:-translate-y-0.5 transition">
              Create account
            </button>
          </form>

          <div className="mt-8 text-sm text-center text-muted-foreground">
            Already have an account? <Link to="/login" className="text-ink font-medium hover:text-emerald">Sign in</Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden order-1 lg:order-2 min-h-[40vh] lg:min-h-screen">
        <img src={aboutImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tl from-ink/90 via-ink/60 to-emerald-deep/30" />
        <div className="relative h-full flex flex-col justify-end p-12 text-white">
          <h2 className="font-display text-3xl md:text-4xl max-w-md leading-tight">
            Join 12 million readers and 18,000 businesses.
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            {["Daily Morning Brief — free", "Verified marketplace access", "Save and bookmark articles"].map((b) => (
              <li key={b} className="flex items-center gap-2"><Check size={16} className="text-gold" /> {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</div>
      <input type={type} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold" />
    </label>
  );
}
