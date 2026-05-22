import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `missing-number`,
  title: `Missing Number`,
  difficulty: `Easy`,
  category: `Binary`,
  description: `Given n distinct numbers from the range 0..n, find the missing number.`,
  points: [
    `The expected sum of 0..n is n * (n + 1) / 2.`,
    `Subtract the actual sum.`,
  ],
  solutions: [
    {
      title: "Expected sum",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
