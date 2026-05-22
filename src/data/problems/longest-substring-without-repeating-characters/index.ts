import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-substring-without-repeating-characters`,
  title: `Longest Substring Without Repeating Characters`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Return the length of the longest substring that contains no repeated characters.`,
  points: [
    `Use a sliding window over the string.`,
    `When a duplicate appears inside the window, move the left boundary after its previous index.`,
  ],
  solutions: [
    {
      title: "Sliding window with last seen index",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
