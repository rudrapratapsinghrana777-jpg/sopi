import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import roseSoap from "@/assets/rose-soap.jpg";
import mintSoap from "@/assets/mint-soap.jpg";
import { products, inr } from "@/lib/sopi";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — SOPI Handmade Soap-on-a-Rope" },
      {
        name: "description",
        content: "Rose Valorosa and Eucalyptus & Mint: handmade 100 g botanical soap bars on organic jute rope.",
      },
      { property: "og:title", content: "SOPI Products — Rose Valorosa & Eucalyptus Mint" },
      { property: "og:description", content: "Two handmade, plastic-free botanical soap bars." },
    ],
  }),
  component: Products,
});

const images = { rose: roseSoap, mint: mintSoap } as const;

function Products() {
  return (
    <div className="container-page py-16 md:py-24">
      <p className="eyebrow">The range</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
        Handmade bars, built to hang and last.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Each 100 g bar is poured by hand, coloured only by plants, and anchored on a 3.5 mm organic
        jute cord.
      </p>

      <div className="mt-20 space-y-28">
        {products.map((p, i) => (
          <article key={p.id} className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={images[p.id]}
              alt={`SOPI ${p.name} soap`}
              loading={i === 0 ? undefined : "lazy"}
              width={1280}
              height={1280}
              className={`aspect-square w-full rounded-2xl object-cover shadow-soft ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div>
              <p className="eyebrow text-sage">{p.line}</p>
              <h2 className="mt-3 text-5xl">{p.name}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="bg-card p-4">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl">Key ingredients</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {p.actives.map((a) => (
                      <li key={a}>— {a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl">Benefits</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-border pt-6">
                <p className="font-display text-4xl text-primary">{inr(p.price)}</p>
                <p className="text-sm text-muted-foreground">
                  Costs {inr(p.cogs)} to make ·{" "}
                  {(((p.price - p.cogs) / p.price) * 100).toFixed(1)}% margin
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 text-center">
        <Link
          to="/process"
          className="inline-flex rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:bg-foreground/5"
        >
          How we make them →
        </Link>
      </div>
    </div>
  );
}
