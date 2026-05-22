import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `combination-sum`,
  title: `Combination Sum`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return all unique combinations where candidate numbers sum to a target. Each candidate can be used more than once.`,
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
