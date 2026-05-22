import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/binary-search-on-rotation-point.js?raw";
import typescript from "./solutions/binary-search-on-rotation-point.ts?raw";

export const problem: PracticeProblem = {
  id: `find-minimum-in-rotated-sorted-array`,
  title: `Find Minimum in Rotated Sorted Array`,
  difficulty: `Medium`,
  category: `Binary`,
  description: `Given a sorted array of unique numbers that has been rotated at an unknown pivot, return the minimum element.\nThe algorithm should take advantage of the rotated sorted structure instead of scanning every value.`,
  examples: [
    {
      input: "nums = [3,4,5,1,2]",
      output: "1",
      explanation: "The sorted array was rotated, and 1 is the smallest value.",
    },
  ],
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
