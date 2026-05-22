import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/binary-search-by-sorted-side.js?raw";
import typescript from "./solutions/binary-search-by-sorted-side.ts?raw";

export const problem: PracticeProblem = {
  id: `search-in-rotated-sorted-array`,
  title: `Search in Rotated Sorted Array`,
  difficulty: `Medium`,
  category: `Binary`,
  description: `Return the index of a target in a rotated sorted array, or -1 if it is not present.`,
  examples: [
    {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4",
      explanation: "The target 0 is found at index 4.",
    },
  ],
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
