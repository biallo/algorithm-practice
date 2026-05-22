import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `merge-intervals`,
  title: `Merge Intervals`,
  difficulty: `Medium`,
  category: `Intervals`,
  description: `Merge all overlapping intervals and return the non-overlapping result.`,
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
