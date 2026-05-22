import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/reverse-dfs-from-both-oceans.js?raw";
import typescript from "./solutions/reverse-dfs-from-both-oceans.ts?raw";

export const problem: PracticeProblem = {
  id: `pacific-atlantic-water-flow`,
  title: `Pacific Atlantic Water Flow`,
  difficulty: `Medium`,
  category: `Matrix`,
  description: `Given a matrix of heights, return all coordinates from which water can flow to both the Pacific and Atlantic oceans.\nWater can flow from a cell to neighboring cells with height less than or equal to the current cell.`,
  examples: [
    {
      input:
        "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
      output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      explanation:
        "These cells can reach both ocean borders by flowing downhill or flat.",
    },
  ],
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
