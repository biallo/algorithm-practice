import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `unique-paths`,
  title: `Unique Paths`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Count how many paths move from the top-left to bottom-right of an m by n grid when you can only move right or down.`,
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
