import { createFileRoute } from "@tanstack/react-router";
import { Flower2, Thermometer, Layers, Link2, ShieldCheck } from "lucide-react";
import processImg from "@/assets/process.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — SOPI Two-Stage Rose Extraction" },
      {
        name: "description",
        content: "How SOPI recovers antioxidants from spent rose petals and verifies every soap batch.",
      },
      { property: "og:title", content: "SOPI Process — Zero-Waste Rose Extraction" },
      { property: "og:description", content: "Two-stage extraction and batch-level quality checks." },
    ],
  }),
  component: Process,
});

const steps = [
  {
    icon: Flower2,
    stage: "Step 01 · Cold-Extracted Botanicals",
    title: "Zero-Waste Petal Sourcing",
    body: "We collect fresh Damask rose petals and spent botanical biomass. Using low-temperature hydro-distillation and natural extraction, we capture active antioxidants, rose hydrosols, and rich plant pigments without adding synthetic dyes or harsh chemicals.",
  },
  {
    icon: Thermometer,
    stage: "Step 02 · Thermal Preserved Actives",
    title: "Low-Heat Artisanal Blending",
    body: "Our sulfate-free organic plant glycerin base is gently melted at controlled temperatures. Once cooled below 50°C, we fold in cold-pressed rosehip oil, therapeutic essential oils, and our natural botanical pigments — protecting delicate plant nutrients from heat damage.",
  },
  {
    icon: Layers,
    stage: "Step 03 · Precision Mold Crafting",
    title: "Hand-Poured Two-Stage Layering",
    body: "The liquid soap is hand-poured in two distinct stages. The first layer sets the foundation, creating a smooth, bubble-free surface before the second layer locks in the natural botanical texture.",
  },
  {
    icon: Link2,
    stage: "Step 04 · Hand-Knotted Zero-Waste Loop",
    title: "Organic Jute Cord Anchoring",
    body: "Before the soap fully sets, an unbleached, 100% organic jute cord — tied with a double-knot anchor — is manually embedded into the centre. This lets your bar hang dry 360°, preventing soggy sludge and eliminating plastic loofahs.",
  },
  {
    icon: ShieldCheck,
    stage: "Step 05 · 100% Plastic-Free Finish",
    title: "Ambient Cure & QC Clearance",
    body: "Bars cure naturally at room temperature for 6 hours. After passing our rope pull-strength test (≥5.0 kgf) and a visual check, each bar is wrapped in biodegradable cellulose film with a QR-linked digital Certificate of Analysis.",
  },
];

function Process() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <p className="eyebrow">Our process</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
          How we handcraft every SOPI bar.
        </h1>
        <img
          src={processImg}
          alt="Rose hydrosol, spent petals and jute on the SOPI workbench"
          width={1536}
          height={1024}
          className="mt-14 aspect-[16/8] w-full rounded-2xl object-cover shadow-soft"
        />
      </section>

      <section className="container-page">
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 [&>li:last-child]:md:col-span-2">
          {steps.map((s) => (
            <li key={s.title} className="bg-card p-8 md:p-10">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="eyebrow">{s.stage}</span>
              </div>
              <h2 className="mt-4 text-3xl">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page grid gap-10 py-24 md:grid-cols-3">
        {[
          ["95%+", "of the rose biomass is used"],
          ["TRL 4", "validated in handmade lab batches"],
          ["IS 2888", "Grade 1 toilet soap standard"],
        ].map(([v, l]) => (
          <div key={v} className="border-t-2 border-primary pt-6">
            <p className="font-display text-5xl">{v}</p>
            <p className="mt-2 text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>
    </>
  );
}
