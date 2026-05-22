import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/sliding-window-with-last-seen-index.js?raw";
import typescript from "./solutions/sliding-window-with-last-seen-index.ts?raw";

export const problem: PracticeProblem = {
  id: `longest-substring-without-repeating-characters`,
  title: `Longest Substring Without Repeating Characters`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Given a string, return the length of the longest contiguous substring that contains no repeated characters.\nThe substring must preserve the original order and cannot skip characters.`,
  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: 'The longest substring without repeats is "abc".',
    },
  ],
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
