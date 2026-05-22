import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `pacific-atlantic-water-flow`,
  title: `Pacific Atlantic Water Flow`,
  difficulty: `Medium`,
  category: `Matrix`,
  description: `Return cells from which water can flow to both the Pacific and Atlantic oceans.`,
  points: [
    `Instead of starting from every cell, start from each ocean boundary.`,
    `Traverse uphill or flat when walking in reverse.`,
  ],
  solutions: [
    {
      title: "Reverse DFS from both oceans",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
