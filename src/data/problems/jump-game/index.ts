import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `jump-game`,
  title: `Jump Game`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return true if you can reach the final index when each value is the maximum jump length from that position.`,
  points: [
    `Track the farthest reachable index.`,
    `If the current index is beyond the farthest reach, the end is impossible.`,
  ],
  solutions: [
    {
      title: "Greedy farthest reach",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
