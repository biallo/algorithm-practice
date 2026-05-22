import type { PracticeProblem } from "../../problemTypes";
import bfsJavascript from "./solutions/bfs.js?raw";
import bfsTypescript from "./solutions/bfs.ts?raw";
import javascript from "./solutions/flood-fill.js?raw";
import typescript from "./solutions/flood-fill.ts?raw";

export const problem: PracticeProblem = {
  id: `number-of-islands`,
  title: `Number of Islands`,
  difficulty: `Medium`,
  category: `Matrix`,
  description: `Count connected groups of land cells in a grid of water and land.`,
  examples: [
    {
      input: 'grid = [["1","1","0"],["0","1","0"],["1","0","1"]]',
      output: "3",
      explanation: "There are three disconnected groups of land cells.",
    },
  ],
  points: [
    `Each DFS marks one whole island.`,
    `Mutating visited land to water avoids a separate visited set.`,
  ],
  solutions: [
    {
      title: "Flood fill",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: "Breadth-first search",
      javascript: bfsJavascript.trim(),
      typescript: bfsTypescript.trim(),
    },
  ],
};
