import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/start-from-sequence-heads.js?raw";
import typescript from "./solutions/start-from-sequence-heads.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-consecutive-sequence`,
  title: `Longest Consecutive Sequence`,
  difficulty: `Medium`,
  category: `Hashing`,
  description: `Given an unsorted array of integers, return the length of the longest sequence of consecutive values.\nThe sequence does not need to appear contiguously in the original array.`,
  examples: [
    {
      input: "nums = [100,4,200,1,3,2]",
      output: "4",
      explanation: "The longest sequence is 1, 2, 3, 4.",
    },
  ],
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
