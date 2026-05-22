import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `find-minimum-in-rotated-sorted-array`,
  title: `Find Minimum in Rotated Sorted Array`,
  difficulty: `Medium`,
  category: `Binary`,
  description: `Given a rotated sorted array with unique values, return the smallest value.`,
  points: [
    `Compare the middle value with the right boundary.`,
    `The minimum is in the unsorted half.`,
  ],
  solutions: [
    {
      title: "Binary search on rotation point",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
