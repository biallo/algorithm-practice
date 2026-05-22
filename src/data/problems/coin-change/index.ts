import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `coin-change`,
  title: `Coin Change`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return the fewest coins needed to make the amount, or -1 if it cannot be made.`,
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
  ],
};
