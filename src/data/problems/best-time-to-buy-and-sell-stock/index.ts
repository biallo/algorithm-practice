import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/track-lowest-price.js?raw";
import typescript from "./solutions/track-lowest-price.ts?raw";

export const problem: PracticeProblem = {
  id: `best-time-to-buy-and-sell-stock`,
  title: `Best Time to Buy and Sell Stock`,
  difficulty: `Easy`,
  category: `Arrays`,
  description: `Given daily stock prices, return the maximum profit from one buy followed by one sell.`,
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy at 1 and sell at 6 for a profit of 5.",
    },
  ],
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
