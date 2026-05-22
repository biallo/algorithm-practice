import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `number-of-islands`,
  title: `Number of Islands`,
  difficulty: `Medium`,
  category: `Matrix`,
  description: `Count connected groups of land cells in a grid of water and land.`,
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
  ],
};
