import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/need-and-window-counts.js?raw";
import typescript from "./solutions/need-and-window-counts.ts?raw";

export const problem: PracticeProblem = {
  id: `minimum-window-substring`,
  title: `Minimum Window Substring`,
  difficulty: `Hard`,
  category: `Strings`,
  description: `Return the smallest substring of s that contains every character from t, including duplicates.`,
  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation: '"BANC" is the shortest substring containing A, B, and C.',
    },
  ],
  points: [
    `Track how many required characters are fully satisfied.`,
    `Shrink the left side while the window remains valid.`,
  ],
  solutions: [
    {
      title: "Need and window counts",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
