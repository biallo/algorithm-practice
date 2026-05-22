import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `maximum-subarray`,
  title: `Maximum Subarray`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Find the contiguous non-empty subarray with the largest sum.`,
  points: [
    `Keep the best sum ending at the current index.`,
    `Restart the window when the previous sum hurts the result.`,
  ],
  solutions: [
    {
      title: "Kadane's algorithm",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
