import { describe, expect, it } from "vitest";
import { budget, calcEconomics, FUNDING_ASK } from "./sopi";

describe("SOPI funding & economics", () => {
  it("budget lines add up to the ₹80,000 ask (30k + 35k + 15k)", () => {
    expect(budget.reduce((s, b) => s + b.amount, 0)).toBe(80000);
    expect(FUNDING_ASK).toBe(80000);
  });

  it("₹48 cost on a ₹250 bar gives an 80.8% gross margin", () => {
    expect(calcEconomics(2500, 250, 48).grossMarginPercent).toBe(80.8);
  });

  it("annual projection keeps 70% of yearly gross profit after a 30% cushion", () => {
    // 2500 × (250 − 48) = 505,000 / month → × 12 × 0.7
    expect(calcEconomics(2500, 250, 48).annualNetProjection).toBe(4242000);
  });

  it("each bar saves 80 g of spent rose biomass", () => {
    expect(calcEconomics(2500, 250, 48).biomassSavedKg).toBe(200);
  });
});
