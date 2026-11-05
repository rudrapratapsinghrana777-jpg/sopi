// Business data and calculations for the SOPI pitch site.

export const FUNDING_ASK = 80000;

export const budget = [
  {
    key: "production",
    label: "Handmade production & raw materials",
    amount: 30000,
    detail:
      "Organic glycerin bases, rose biomass, cold-pressed oils, unbleached jute rope and silicone mould tooling for pilot batches.",
    tone: "bg-primary",
  },
  {
    key: "reserve",
    label: "Reserved capital & contingency",
    amount: 35000,
    detail:
      "Safety capital for post-pilot batch expansion, raw-material price swings and operational emergencies.",
    tone: "bg-sage",
  },
  {
    key: "marketing",
    label: "Marketing, branding & sales launch",
    amount: 15000,
    detail:
      "Kraft sleeve box design, QR certificate infrastructure, boutique pop-up trials and the first direct-to-customer social campaign.",
    tone: "bg-gold",
  },
] as const;

export type Economics = {
  monthlyRevenue: number;
  monthlyCost: number;
  monthlyGrossProfit: number;
  grossMarginPercent: number;
  annualNetProjection: number;
  biomassSavedKg: number;
};

/** Overhead / marketing / tax cushion applied to annual gross profit. */
export const OVERHEAD_SHARE = 0.3;
/** Spent rose biomass recovered per 100 g bar, in kg. */
export const BIOMASS_PER_BAR_KG = 0.08;

export function calcEconomics(units: number, price: number, cogs: number): Economics {
  const monthlyRevenue = units * price;
  const monthlyCost = units * cogs;
  const monthlyGrossProfit = monthlyRevenue - monthlyCost;
  const grossMarginPercent =
    monthlyRevenue > 0 ? Math.round((monthlyGrossProfit / monthlyRevenue) * 1000) / 10 : 0;
  const annualNetProjection = Math.round(monthlyGrossProfit * 12 * (1 - OVERHEAD_SHARE));
  const biomassSavedKg = Math.round(units * BIOMASS_PER_BAR_KG * 10) / 10;
  return {
    monthlyRevenue,
    monthlyCost,
    monthlyGrossProfit,
    grossMarginPercent,
    annualNetProjection,
    biomassSavedKg,
  };
}

export const inr = (n: number) =>
  "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

export const products = [
  {
    id: "rose",
    name: "Rose Valorosa",
    line: "Hero bar · Zero-waste circular",
    tagline:
      "Recovered spent-petal anthocyanins and Stage 1 Damask rose hydrosol, coloured only by the flower itself.",
    price: 250,
    cogs: 48,
    specs: [
      ["Total fatty matter", "> 60% · Grade 1"],
      ["pH", "8.8 ± 0.3"],
      ["Rope hold strength", "> 5.2 kgf"],
      ["Net weight", "100 g"],
    ],
    actives: [
      "Spent-petal anthocyanin extract",
      "Damask rose hydrosol",
      "Cold-pressed rosehip seed oil",
      "Rosa damascena essential oil (1.5%)",
    ],
    benefits: [
      "No synthetic dyes — natural mauve hue",
      "High antioxidant density (DPPH scavenging > 84%)",
      "Hangs to dry on organic jute — no soggy soap dish",
    ],
  },
  {
    id: "mint",
    name: "Eucalyptus & Mint",
    line: "Active line · Cooling & deodorising",
    tagline:
      "Eucalyptus and peppermint oils with French green clay for a cooling, post-workout cleanse.",
    price: 250,
    cogs: 46,
    specs: [
      ["Total fatty matter", "> 62% · Grade 1"],
      ["pH", "8.9 ± 0.3"],
      ["Rope hold strength", "> 5.5 kgf"],
      ["Net weight", "100 g"],
    ],
    actives: [
      "Eucalyptus globulus oil (1.5%)",
      "Peppermint essential oil (3.0%)",
      "French green clay",
      "Jojoba & sweet almond oil base",
    ],
    benefits: [
      "Cooling sensation after exercise",
      "Natural antibacterial body cleanse",
      "Absorbs excess oil without stripping skin",
    ],
  },
  {
    id: "charcoal",
    name: "Activated Charcoal & Tea Tree",
    line: "Detox line · Purify & unclog",
    tagline:
      "A deeply cleansing bar with activated bamboo charcoal and pure tea tree oil — absorbs excess sebum, draws out impurities and gives natural antibacterial protection.",
    price: 250,
    cogs: 48,
    specs: [
      ["Variant", "Detoxifying soap-on-a-rope"],
      ["Net weight", "100 g"],
    ],
    actives: [
      "Activated bamboo charcoal powder",
      "Pure tea tree essential oil (Melaleuca alternifolia)",
      "Cold-pressed jojoba oil",
      "SLS/SLES-free organic glycerin base",
      "Unbleached organic jute cord",
    ],
    benefits: [
      "Deep pore detoxification",
      "Natural plant charcoal colour — zero synthetic dyes",
      "Hanging loop prevents soggy sludge",
    ],
  },
  {
    id: "orange",
    name: "Sweet Orange & Cinnamon",
    line: "Radiance line · Brighten & energize",
    tagline:
      "An invigorating botanical bar infused with cold-pressed sweet orange peel oil and sun-dried orange zest. Natural vitamin C and a touch of warm cinnamon gently exfoliate dead skin, promote cell turnover and restore natural radiance.",
    price: 250,
    cogs: 48,
    specs: [
      ["Variant", "Radiance & exfoliating soap-on-a-rope"],
      ["Net weight", "100 g"],
    ],
    actives: [
      "Cold-pressed sweet orange essential oil (Citrus sinensis)",
      "Sun-dried orange peel powder (natural exfoliant)",
      "Pure cinnamon bark essential oil (Cinnamomum verum)",
      "Cold-pressed rosehip seed oil",
      "SLS/SLES-free organic glycerin base",
      "Unbleached organic jute cord",
    ],
    benefits: [
      "Natural vitamin C radiance boost",
      "Zero-plastic biodegradable exfoliating particles",
      "360° airflow hang-dry design",
    ],
  },
] as const;
