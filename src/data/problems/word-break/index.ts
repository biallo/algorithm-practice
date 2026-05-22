import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `word-break`,
  title: `Word Break`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return true if a string can be segmented into words from the dictionary.`,
  points: [
    `dp[i] means the prefix ending at i can be segmented.`,
    `For each valid prefix, try every dictionary word as the next suffix.`,
  ],
  solutions: [
    {
      title: "Reachable prefix DP",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
