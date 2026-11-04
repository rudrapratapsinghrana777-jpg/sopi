import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { budget, FUNDING_ASK, inr } from "@/lib/sopi";

export const Route = createFileRoute("/funding")({
  head: () => ({
    meta: [
      { title: "Funding Brief — SOPI ₹80,000 Prototype Grant" },
      {
        name: "description",
        content: "SOPI is seeking ₹80,000 prototype capital: ₹30k production, ₹35k reserve, ₹15k launch.",
      },
      { property: "og:title", content: "SOPI Funding Brief — ₹80,000 Prototype Grant" },
      { property: "og:description", content: "Budget, milestones and how to back SOPI." },
    ],
  }),
  component: Funding,
});

const milestones = [
  ["Month 1–2", "Pilot production", "Source raw materials and moulds; run validated pilot batches of both bars."],
  ["Month 3", "Packaging & quality", "Kraft sleeve boxes, QR certificates of analysis live for every batch."],
  ["Month 4–5", "Market trials", "Boutique pop-ups and campus sales; launch direct-to-customer social channels."],
  ["Month 6", "Scale decision", "Use sales data and the reserve to expand batch size or line-up."],
];

function Funding() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">Funding brief</p>
          <h1 className="mt-4 text-5xl leading-tight md:text-6xl">
            We're raising <em className="text-primary">{inr(FUNDING_ASK)}</em> to take SOPI from
            lab to market.
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Prepared for the Graphic Era × IIT Bombay E-Cell panels. The plan funds pilot production,
          protects the business with a reserve, and launches sales.
        </p>
      </div>

      {/* Allocation */}
      <section className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-card md:p-12">
        <div className="flex h-4 overflow-hidden rounded-full">
          {budget.map((b) => (
            <div key={b.key} className={b.tone} style={{ width: `${(b.amount / FUNDING_ASK) * 100}%` }} />
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {budget.map((b) => (
            <div key={b.key}>
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${b.tone}`} />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {((b.amount / FUNDING_ASK) * 100).toFixed(1)}%
                </span>
              </div>
              <p className="mt-3 font-display text-4xl">{inr(b.amount)}</p>
              <h3 className="mt-1 text-xl">{b.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="mt-24">
        <p className="eyebrow">Six-month roadmap</p>
        <h2 className="mt-4 text-4xl md:text-5xl">What the money delivers</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {milestones.map(([when, title, body], i) => (
            <li key={title} className="border-t-2 border-primary pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {when}
              </p>
              <h3 className="mt-2 text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why invest + form */}
      <section className="mt-24 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl bg-primary p-10 text-primary-foreground">
          <p className="eyebrow text-gold">Why back SOPI</p>
          <ul className="mt-6 space-y-5">
            {[
              "~81% gross margin — our key ingredient comes from waste",
              "Technology validated at TRL 4 in handmade lab batches",
              "Every batch is quality-checked and traceable by QR",
              "100% plastic-free, circular product story customers love",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-lg">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-sage" />
              <h3 className="mt-4 text-3xl">Thank you for your interest</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                The SOPI founding team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <h3 className="text-3xl">Get in touch</h3>
              <p className="text-sm text-muted-foreground">
                Investors, incubators and evaluators — request the full pitch deck.
              </p>
              {[
                { id: "name", label: "Name / organisation", type: "text", ph: "e.g. IIT Bombay E-Cell" },
                { id: "email", label: "Email", type: "email", ph: "you@organisation.com" },
              ].map((f) => (
                <label key={f.id} className="block">
                  <span className="text-sm font-medium">{f.label}</span>
                  <input
                    required
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-sm font-medium">Interest</span>
                <select className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                  <option>₹80,000 prototype grant</option>
                  <option>Incubation space & mentorship</option>
                  <option>Angel investment</option>
                </select>
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Request pitch deck
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
