import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/kadanes-algorithm.js?raw";
import typescript from "./solutions/kadanes-algorithm.ts?raw";

export const problem: PracticeProblem = {
  id: `maximum-subarray`,
  title: `Maximum Subarray`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Find the contiguous non-empty subarray with the largest sum.`,
  examples: [
    {
      input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
      output: "6",
      explanation: "The subarray [4,-1,2,1] has sum 6.",
    },
  ],
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
