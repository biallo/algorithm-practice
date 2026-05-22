import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `counting-bits`,
  title: `Counting Bits`,
  difficulty: `Easy`,
  category: `Binary`,
  description: `For every number from 0 to n, return the count of set bits.`,
  points: [`Reuse the answer for i >> 1.`, `The lowest bit contributes i & 1.`],
  solutions: [
    {
      title: "DP from right shift",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
