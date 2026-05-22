import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/bottom-up-amount-dp.js?raw";
import typescript from "./solutions/bottom-up-amount-dp.ts?raw";
import topDownMemoJavascript from "./solutions/top-down-memo.js?raw";
import topDownMemoTypescript from "./solutions/top-down-memo.ts?raw";

export const problem: PracticeProblem = {
  id: `coin-change`,
  title: `Coin Change`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return the fewest coins needed to make the amount, or -1 if it cannot be made.`,
  examples: [
    {
      input: "coins = [1,2,5], amount = 11",
      output: "3",
      explanation: "11 can be made with 5 + 5 + 1.",
    },
  ],
  points: [
    `Let dp[x] be the fewest coins needed for amount x.`,
    `Initialize unknown states with Infinity.`,
  ],
  solutions: [
    {
      title: "Bottom-up amount DP",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: "Top-down memoization",
      javascript: topDownMemoJavascript.trim(),
      typescript: topDownMemoTypescript.trim(),
    },
  ],
};
