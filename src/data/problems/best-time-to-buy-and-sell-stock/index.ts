import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `best-time-to-buy-and-sell-stock`,
  title: `Best Time to Buy and Sell Stock`,
  difficulty: `Easy`,
  category: `Arrays`,
  description: `Given daily stock prices, return the maximum profit from one buy followed by one sell.`,
  points: [
    `You must buy before you sell.`,
    `Return 0 when no profitable trade exists.`,
  ],
  solutions: [
    {
      title: "Track lowest price",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
