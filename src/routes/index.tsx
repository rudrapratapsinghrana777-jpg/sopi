import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Feather, RefreshCw, ShieldCheck } from "lucide-react";
import roseSoap from "@/assets/rose-soap.jpg";
import mintSoap from "@/assets/mint-soap.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOPI — One Flower. Two Products. Zero Waste." },
      {
        name: "description",
        content:
          "SOPI turns discarded rose petals into premium handmade soap-on-a-rope. Seeking ₹80,000 prototype funding.",
      },
      { property: "og:title", content: "SOPI — One Flower. Two Products. Zero Waste." },
      {
        property: "og:description",
        content: "Handmade zero-waste botanical soaps from recovered rose biomass.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "80.8%", label: "Gross margin per bar" },
  { value: "₹250", label: "Retail price · 100 g" },
  { value: "> 60%", label: "TFM · Grade 1 soap" },
  { value: "0 g", label: "Plastic in packaging" },
];

const pillars = [
  {
    icon: RefreshCw,
    title: "Zero-waste circularity",
    body: "Rose distillation throws away up to 80% of the flower. We recover the antioxidant pigments from those spent petals and put them into every bar.",
  },
  {
    icon: ShieldCheck,
    title: "Lab-verified quality",
    body: "Every batch is fingerprinted with thin-layer chromatography. A QR code on each box links to that batch's certificate of analysis.",
  },
  {
    icon: Feather,
    title: "Soap-on-a-rope",
    body: "An organic jute cord anchored inside the bar lets it hang and dry — no soggy dish, a longer-lasting bar, and no plastic.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow">Valorosa Labs · Prototype stage</p>
            <h1 className="mt-6 text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              One flower.
              <br />
              Two products.
              <br />
              <em className="text-primary">Zero waste.</em>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              SOPI makes handmade botanical soap from the rose petals the perfume industry throws
              away — turning free waste into a premium, plastic-free product.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/funding"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                View funding brief <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                See the soaps
              </Link>
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <img
              src={roseSoap}
              alt="SOPI Rose Valorosa handmade soap hanging on a jute rope"
              width={1280}
              height={1536}
              className="aspect-[5/6] w-full rounded-2xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -left-4 rounded-xl bg-card p-5 shadow-card sm:-left-8">
              <p className="eyebrow text-sage">Batch #42 · validated</p>
              <p className="mt-1 font-display text-2xl">Rose Valorosa</p>
              <p className="text-xs text-muted-foreground">₹48 to make · ₹250 to buy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container-page grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-10 text-center">
              <p className="font-display text-4xl text-primary md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="container-page grid gap-12 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            80% of every rose harvest ends up as waste.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Rose oil is one of the most valuable ingredients in beauty — yet once the oil is
            distilled, the spent petals are dumped, along with the antioxidants still inside them.
          </p>
          <p>
            SOPI uses a two-stage process: first we collect rose water and oil, then we recover the
            natural pigments from the leftover petals. Our key active ingredient costs us{" "}
            <strong className="text-foreground">almost nothing</strong>.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="container-page pt-24">
        <p className="eyebrow">Why SOPI</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Built to hang, built to last</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {[
            ["No soggy sludge", "Hanging storage allows complete airflow, extending soap life by up to 2x."],
            ["100% plastic-free", "Replaces plastic body washes, synthetic loofahs and plastic packaging."],
          ].map(([t, d]) => (
            <div key={t} className="border-t-2 border-primary pt-6">
              <h3 className="text-3xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products teaser */}
      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The range</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Two launch bars</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Full specifications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { img: roseSoap, name: "Rose Valorosa", note: "Hero bar · spent-petal antioxidants" },
            { img: mintSoap, name: "Eucalyptus & Mint", note: "Active line · cooling & deodorising" },
          ].map((p) => (
            <Link key={p.name} to="/products" className="group block overflow-hidden rounded-2xl bg-card shadow-card">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.note}</p>
                </div>
                <p className="font-display text-2xl text-primary">₹250</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Funding CTA */}
      <section className="container-page">
        <div className="grid gap-8 rounded-3xl bg-primary p-10 text-primary-foreground md:grid-cols-[2fr_1fr] md:items-center md:p-16">
          <div>
            <p className="eyebrow text-gold">Funding round</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Seeking ₹80,000 prototype capital</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              ₹30,000 for production, ₹35,000 held in reserve, and ₹15,000 for the market launch.
            </p>
          </div>
          <Link
            to="/funding"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-4 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Read the funding brief <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
