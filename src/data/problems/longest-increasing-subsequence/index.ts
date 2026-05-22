import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/tails-with-binary-search.js?raw";
import typescript from "./solutions/tails-with-binary-search.ts?raw";
import quadraticDpJavascript from "./solutions/quadratic-dp.js?raw";
import quadraticDpTypescript from "./solutions/quadratic-dp.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-increasing-subsequence`,
  title: `Longest Increasing Subsequence`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return the length of the longest strictly increasing subsequence.`,
  examples: [
    {
      input: "nums = [10,9,2,5,3,7,101,18]",
      output: "4",
      explanation: "One longest increasing subsequence is [2,3,7,101].",
    },
  ],
  points: [
    `Maintain the smallest possible tail for each subsequence length.`,
    `Binary search finds the first tail greater than or equal to the number.`,
  ],
  solutions: [
    {
      title: "Tails with binary search",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: "Quadratic DP",
      javascript: quadraticDpJavascript.trim(),
      typescript: quadraticDpTypescript.trim(),
    },
  ],
};
