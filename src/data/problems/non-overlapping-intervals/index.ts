import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/sort-by-end-time.js?raw";
import typescript from "./solutions/sort-by-end-time.ts?raw";

export const problem: PracticeProblem = {
  id: `non-overlapping-intervals`,
  title: `Non-overlapping Intervals`,
  difficulty: `Medium`,
  category: `Intervals`,
  description: `Given a list of intervals, return the minimum number of intervals that must be removed so that the remaining intervals do not overlap.`,
  examples: [
    {
      input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
      output: "1",
      explanation: "Remove [1,3] so the remaining intervals do not overlap.",
    },
  ],
  points: [
    `Keep intervals that finish earliest.`,
    `When an overlap occurs, removing the interval with the later end is optimal.`,
  ],
  solutions: [
    {
      title: "Sort by end time",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
