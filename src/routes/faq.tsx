import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "SOPI FAQ — Soap-on-a-Rope Questions Answered" },
      { name: "description", content: "How the jute rope works, how long a bar lasts, natural colours and plastic-free packaging." },
      { property: "og:title", content: "SOPI — Frequently Asked Questions" },
      { property: "og:description", content: "Everything about SOPI's zero-waste soap-on-a-rope." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "How does the 'Soap-on-a-Rope' design prevent soggy sludge?",
    a: "Standard soap bars sit in wet soap dishes, absorbing water and dissolving into messy sludge. SOPI features an embedded, hand-knotted organic jute cord that lets you hang the bar directly in your shower. This provides 360° airflow, allowing the soap to dry completely between uses and extending its life by up to 2x.",
  },
  {
    q: "How do I use the jute rope when the soap bar gets small?",
    a: "The organic jute cord is anchored inside with a specialized double-knot that stays firmly in place throughout the bar's lifetime. As the soap wears down, you can continue using the loop for grip or rub the remaining soap directly against your skin. When the soap is fully used, the remaining jute cord is 100% biodegradable and compostable.",
  },
  {
    q: "Are SOPI bars colored with synthetic dyes or artificial scents?",
    a: "No. Every SOPI bar is 100% free from synthetic dyes, artificial fragrances, parabens, and sulfates (SLS/SLES). Our rich colors come entirely from natural sources—like zero-waste rose extracts, French green clay, activated bamboo charcoal, and sun-dried orange peel—while our scents are powered by pure essential oils.",
  },
  {
    q: "How long does a single 100g SOPI bar typically last?",
    a: "Because our hanging design allows full 360° drying and prevents premature dissolving, a single 100g SOPI bar typically lasts 3 to 4 weeks with daily shower use—significantly longer than traditional soap bars kept in dish holders.",
  },
  {
    q: "Is SOPI packaging completely plastic-free?",
    a: "Yes! SOPI is committed to zero-waste, plastic-free living. Each bar is hand-wrapped in 100% biodegradable paper sleeves printed with plant-based inks, eliminating single-use plastic bottles, synthetic loofahs, and plastic wrapping entirely.",
  },
];

function Faq() {
  return (
    <main>
      <section className="bg-hero">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-tight md:text-6xl">
            Questions, <em className="text-primary">answered.</em>
          </h1>
        </div>
      </section>
      <section className="container-page max-w-3xl py-20">
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-2xl">
                {f.q}
                <Plus className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
