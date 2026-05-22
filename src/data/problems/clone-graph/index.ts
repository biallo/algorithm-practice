import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `clone-graph`,
  title: `Clone Graph`,
  difficulty: `Medium`,
  category: `Graphs`,
  description: `Deep clone an undirected graph where each node has a value and a list of neighbors.`,
  points: [
    `Use a map from original node to cloned node.`,
    `DFS or BFS works as long as cycles are memoized.`,
  ],
  solutions: [
    {
      title: "DFS with memoization",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
