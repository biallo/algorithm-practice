import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/three-phase-insert.js?raw";
import typescript from "./solutions/three-phase-insert.ts?raw";

export const problem: PracticeProblem = {
  id: `insert-interval`,
  title: `Insert Interval`,
  difficulty: `Medium`,
  category: `Intervals`,
  description: `Insert a new interval into sorted non-overlapping intervals and merge if needed.`,
  examples: [
    {
      input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
      output: "[[1,5],[6,9]]",
      explanation: "The new interval overlaps [1,3] and merges with it.",
    },
  ],
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
