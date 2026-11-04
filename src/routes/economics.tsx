import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { calcEconomics, inr } from "@/lib/sopi";

export const Route = createFileRoute("/economics")({
  head: () => ({
    meta: [
      { title: "Unit Economics — SOPI Margin & Revenue Model" },
      {
        name: "description",
        content: "Interactive SOPI revenue model: ₹48 cost, ₹250 price, ~81% gross margin per handmade bar.",
      },
      { property: "og:title", content: "SOPI Unit Economics" },
      { property: "og:description", content: "Explore SOPI's margins and revenue projections." },
    ],
  }),
  component: Economics,
});

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{props.label}</span>
        <span className="font-display text-2xl text-primary">{props.format(props.value)}</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="range-sopi mt-3"
      />
    </label>
  );
}

function Economics() {
  const [units, setUnits] = useState(2500);
  const [price, setPrice] = useState(250);
  const [cogs, setCogs] = useState(48);
  const m = useMemo(() => calcEconomics(units, price, cogs), [units, price, cogs]);

  const costShare = m.monthlyRevenue > 0 ? (m.monthlyCost / m.monthlyRevenue) * 100 : 0;

  return (
    <div className="container-page py-16 md:py-24">
      <p className="eyebrow">Unit economics</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
        Free raw material. Premium margins.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Our main active ingredient comes from waste, so each bar costs about ₹48 to make. Adjust
        the numbers to see how the business scales.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8 self-start rounded-2xl border border-border bg-card p-8 shadow-card">
          <Slider label="Bars sold per month" value={units} min={250} max={10000} step={250} onChange={setUnits} format={(v) => v.toLocaleString("en-IN")} />
          <Slider label="Retail price per bar" value={price} min={150} max={500} step={10} onChange={setPrice} format={inr} />
          <Slider label="Cost to make per bar" value={cogs} min={30} max={120} step={1} onChange={setCogs} format={inr} />
          <p className="text-xs text-muted-foreground">
            Annual projection keeps 70% of gross profit after a 30% cushion for overheads,
            marketing and tax.
          </p>
        </div>

        <div className="rounded-2xl bg-ink p-8 text-ink-foreground md:p-10">
          <p className="eyebrow text-gold">Gross margin</p>
          <p className="mt-2 font-display text-7xl">{m.grossMarginPercent}%</p>
          <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-ink-foreground/10">
            <div className="bg-gold" style={{ width: `${costShare}%` }} />
            <div className="flex-1 bg-sage" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-ink-foreground/60">
            <span>Cost</span>
            <span>Profit</span>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            {[
              ["Monthly revenue", inr(m.monthlyRevenue)],
              ["Monthly cost", inr(m.monthlyCost)],
              ["Monthly gross profit", inr(m.monthlyGrossProfit)],
              ["Annual net projection", inr(m.annualNetProjection)],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-ink-foreground/15 pt-4">
                <dt className="text-xs uppercase tracking-wider text-ink-foreground/60">{k}</dt>
                <dd className="mt-1 font-display text-3xl">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 rounded-xl bg-ink-foreground/5 p-4 text-sm text-ink-foreground/80">
            🌹 <strong className="text-ink-foreground">{m.biomassSavedKg} kg</strong> of spent rose
            petals saved from landfill each month.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/funding"
          className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          See how the ₹80,000 will be used →
        </Link>
      </div>
    </div>
  );
}
