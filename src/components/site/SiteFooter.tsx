import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl">SOPI</p>
          <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">
            Handmade zero-waste botanical soaps from Valorosa Labs. SOPI — here for a wash!
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow text-gold">Explore</p>
          <Link to="/products" className="block text-ink-foreground/80 hover:text-ink-foreground">
            Products
          </Link>
          <Link to="/process" className="block text-ink-foreground/80 hover:text-ink-foreground">
            Our Process
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow text-gold">Invest</p>
          <Link to="/funding" className="block text-ink-foreground/80 hover:text-ink-foreground">
            Funding brief
          </Link>
          <p className="text-ink-foreground/60">Graphic Era B.Pharm · Incubator E-Cell</p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="container-page py-6 text-xs text-ink-foreground/50">
          © {new Date().getFullYear()} Valorosa Labs. Prototype stage — figures are lab and pilot
          estimates.
        </p>
      </div>
    </footer>
  );
}
