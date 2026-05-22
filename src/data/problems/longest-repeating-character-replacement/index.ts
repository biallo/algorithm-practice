import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-repeating-character-replacement`,
  title: `Longest Repeating Character Replacement`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Return the length of the longest substring that can become all one character after at most k replacements.`,
  points: [
    `Window length minus the most frequent character count is the replacements needed.`,
    `Shrink the window when replacements exceed k.`,
  ],
  solutions: [
    {
      title: "Sliding window by dominant count",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
