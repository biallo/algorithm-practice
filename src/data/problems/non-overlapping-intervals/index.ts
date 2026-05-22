import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `non-overlapping-intervals`,
  title: `Non-overlapping Intervals`,
  difficulty: `Medium`,
  category: `Intervals`,
  description: `Return the minimum number of intervals to remove so the rest do not overlap.`,
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
