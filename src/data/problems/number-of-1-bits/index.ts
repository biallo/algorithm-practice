import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `number-of-1-bits`,
  title: `Number of 1 Bits`,
  difficulty: `Easy`,
  category: `Binary`,
  description: `Count how many set bits exist in the unsigned binary representation of a number.`,
  points: [
    `Use n & (n - 1) to remove the lowest set bit.`,
    `Convert to unsigned with >>> 0 for JavaScript number behavior.`,
  ],
  solutions: [
    {
      title: "Clear lowest set bit",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
