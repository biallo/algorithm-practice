import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/backtracking-with-reuse.js?raw";
import typescript from "./solutions/backtracking-with-reuse.ts?raw";

export const problem: PracticeProblem = {
  id: `combination-sum`,
  title: `Combination Sum`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Given a list of distinct candidate numbers and a target, return all unique combinations where the chosen numbers sum to the target.\nA candidate may be chosen more than once, and combinations should not be duplicated.`,
  examples: [
    {
      input: "candidates = [2,3,6,7], target = 7",
      output: "[[2,2,3],[7]]",
      explanation: "Candidates can be reused any number of times.",
    },
  ],
  points: [
    `Keep a start index so combinations are generated in non-decreasing order.`,
    `Backtrack after every choice.`,
  ],
  solutions: [
    {
      title: "Backtracking with reuse",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
