import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-common-subsequence`,
  title: `Longest Common Subsequence`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Return the length of the longest subsequence shared by two strings.`,
  points: [
    `Use a two-dimensional DP table over prefixes.`,
    `Matching characters extend the diagonal state.`,
  ],
  solutions: [
    {
      title: "Prefix DP table",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
