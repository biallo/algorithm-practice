import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/greedy-farthest-reach.js?raw";
import typescript from "./solutions/greedy-farthest-reach.ts?raw";

export const problem: PracticeProblem = {
  id: `jump-game`,
  title: `Jump Game`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Given an array where each value is the maximum jump length from that index, determine whether you can reach the last index starting from index 0.`,
  examples: [
    {
      input: "nums = [2,3,1,1,4]",
      output: "true",
      explanation:
        "Jump from index 0 to 1, then from index 1 to the last index.",
    },
  ],
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
