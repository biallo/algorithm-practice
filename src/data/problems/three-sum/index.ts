import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `three-sum`,
  title: `3Sum`,
  difficulty: `Medium`,
  category: `Arrays`,
  description: `Return all unique triplets whose values sum to zero.`,
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
