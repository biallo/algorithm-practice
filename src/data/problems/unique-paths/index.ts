import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/one-dimensional-grid-dp.js?raw";
import typescript from "./solutions/one-dimensional-grid-dp.ts?raw";

export const problem: PracticeProblem = {
  id: `unique-paths`,
  title: `Unique Paths`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Given an m by n grid, count how many unique paths move from the top-left corner to the bottom-right corner.\nYou may only move either down or right at any point.`,
  examples: [
    {
      input: "m = 3, n = 7",
      output: "28",
      explanation: "There are 28 ways to move from top-left to bottom-right.",
    },
  ],
  points: [
    `Each cell is reachable from the cell above and the cell to the left.`,
    `A one-dimensional DP row is enough.`,
  ],
  solutions: [
    {
      title: "One-dimensional grid DP",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
