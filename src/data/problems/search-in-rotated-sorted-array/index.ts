import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `search-in-rotated-sorted-array`,
  title: `Search in Rotated Sorted Array`,
  difficulty: `Medium`,
  category: `Binary`,
  description: `Return the index of a target in a rotated sorted array, or -1 if it is not present.`,
  points: [
    `At least one side of the midpoint is sorted.`,
    `Use the sorted side to decide which half to discard.`,
  ],
  solutions: [
    {
      title: "Binary search by sorted side",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
