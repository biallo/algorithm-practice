import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/dp-from-right-shift.js?raw";
import typescript from "./solutions/dp-from-right-shift.ts?raw";

export const problem: PracticeProblem = {
  id: `counting-bits`,
  title: `Counting Bits`,
  difficulty: `Easy`,
  category: `Binary`,
  description: `Given an integer n, return an array answer where answer[i] is the number of 1 bits in the binary representation of i for every i from 0 through n.`,
  examples: [
    {
      input: "n = 5",
      output: "[0,1,1,2,1,2]",
      explanation: "The set bit counts for 0 through 5 are returned.",
    },
  ],
  points: [`Reuse the answer for i >> 1.`, `The lowest bit contributes i & 1.`],
  solutions: [
    {
      title: "DP from right shift",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
