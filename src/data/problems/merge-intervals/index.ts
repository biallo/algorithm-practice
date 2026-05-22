import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/sort-then-merge.js?raw";
import typescript from "./solutions/sort-then-merge.ts?raw";

export const problem: PracticeProblem = {
  id: `merge-intervals`,
  title: `Merge Intervals`,
  difficulty: `Medium`,
  category: `Intervals`,
  description: `Merge all overlapping intervals and return the non-overlapping result.`,
  examples: [
    {
      input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      output: "[[1,6],[8,10],[15,18]]",
      explanation: "[1,3] and [2,6] overlap and merge.",
    },
  ],
  points: [
    `Sort intervals by start time.`,
    `If the next start is within the current end, extend the current interval.`,
  ],
  solutions: [
    {
      title: "Sort then merge",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
