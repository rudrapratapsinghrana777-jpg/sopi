import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Droplets, Layers, QrCode } from "lucide-react";
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
    icon: Droplets,
    stage: "Stage 1",
    title: "Distil the rose",
    body: "Fresh Damask rose petals are steam-distilled to collect rose oil and rose water (hydrosol) — the classic, high-value outputs.",
  },
  {
    icon: FlaskConical,
    stage: "Stage 2",
    title: "Recover from the waste",
    body: "The spent petals, normally discarded, are extracted again to recover anthocyanins — natural antioxidant pigments that give our bar its mauve colour.",
  },
  {
    icon: Layers,
    stage: "Stage 3",
    title: "Hand-pour the bar",
    body: "Hydrosol, extract and cold-pressed oils are blended into a Grade 1 soap base and poured by hand around a double figure-8 jute anchor.",
  },
  {
    icon: QrCode,
    stage: "Stage 4",
    title: "Verify every batch",
    body: "Each batch is checked with thin-layer chromatography and given a QR-linked certificate of analysis, so customers can see exactly what's inside.",
  },
];

function Process() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <p className="eyebrow">Our process</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
          We get two products out of every flower.
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
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
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
