import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SOPI — Our Story, Mission & Founder" },
      { name: "description", content: "Why SOPI exists: turning botanical waste into luxurious, plastic-free soap-on-a-rope. Meet founder Rudra." },
      { property: "og:title", content: "About SOPI by Valorosa Labs" },
      { property: "og:description", content: "Our origin, mission and the founder behind SOPI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <section className="bg-hero">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow">About SOPI</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-tight md:text-6xl">
            Luxury that leaves <em className="text-primary">nothing behind.</em>
          </h1>
        </div>
      </section>

      <section className="container-page grid gap-8 py-20 md:grid-cols-2">
        <div className="rounded-2xl bg-card p-10 shadow-card">
          <p className="eyebrow">Our origin</p>
          <p className="mt-5 font-display text-2xl leading-snug">
            SOPI was born to transform botanical agricultural waste into luxurious, zero-plastic skincare through circular artisanal science.
          </p>
        </div>
        <div className="rounded-2xl bg-card p-10 shadow-card">
          <p className="eyebrow">Our mission</p>
          <p className="mt-5 font-display text-2xl leading-snug">
            We exist to eliminate single-use plastic bottles and soggy shower sludge, proving that sustainable living never requires sacrificing luxury.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <p className="eyebrow">The team</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Founder</h2>
        <div className="mt-10 flex max-w-xl items-center gap-6 rounded-2xl bg-card p-8 shadow-card">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary font-display text-3xl text-primary-foreground">
            R
          </div>
          <div>
            <h3 className="text-2xl">Rudra</h3>
            <p className="text-sm text-muted-foreground">Founder, SOPI by Valorosa Labs</p>
            <a
              href="mailto:rudrapratapsinghrana777@gmail.com"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Mail className="h-4 w-4" /> rudrapratapsinghrana777@gmail.com
            </a>
          </div>
        </div>
        <Link
          to="/funding"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          View funding brief <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
