import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `insert-interval`,
  title: `Insert Interval`,
  difficulty: `Medium`,
  category: `Intervals`,
  description: `Insert a new interval into sorted non-overlapping intervals and merge if needed.`,
  points: [
    `Append intervals that end before the new interval.`,
    `Merge all intervals that overlap the new interval.`,
    `Append intervals that start after it.`,
  ],
  solutions: [
    {
      title: "Three-phase insert",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
