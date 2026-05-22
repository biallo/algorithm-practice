import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/sort-and-sweep.js?raw";
import typescript from "./solutions/sort-and-sweep.ts?raw";

export const problem: PracticeProblem = {
  id: `three-sum`,
  title: `3Sum`,
  difficulty: `Medium`,
  category: `Arrays`,
  description: `Return all unique triplets whose values sum to zero.`,
  examples: [
    {
      input: "nums = [-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]",
      explanation: "These are the unique triplets that sum to zero.",
    },
  ],
  points: [
    `Sort first so duplicates are easy to skip.`,
    `Fix one value, then use two pointers for the remaining pair.`,
  ],
  solutions: [
    {
      title: "Sort and sweep",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
