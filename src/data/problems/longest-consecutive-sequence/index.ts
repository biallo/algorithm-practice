import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-consecutive-sequence`,
  title: `Longest Consecutive Sequence`,
  difficulty: `Medium`,
  category: `Hashing`,
  description: `Return the length of the longest consecutive integer sequence.`,
  points: [
    `Only start counting at numbers that have no predecessor.`,
    `A set gives constant-time membership checks.`,
  ],
  solutions: [
    {
      title: "Start from sequence heads",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
