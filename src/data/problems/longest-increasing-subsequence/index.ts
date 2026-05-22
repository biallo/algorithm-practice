import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-increasing-subsequence`,
  title: `Longest Increasing Subsequence`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return the length of the longest strictly increasing subsequence.`,
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
  ],
};
