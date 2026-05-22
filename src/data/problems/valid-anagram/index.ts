import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `valid-anagram`,
  title: `Valid Anagram`,
  difficulty: `Easy`,
  category: `Strings`,
  description: `Return true if two strings contain the same characters with the same frequencies.`,
  points: [
    `Different lengths cannot be anagrams.`,
    `Increment counts for one string and decrement for the other.`,
  ],
  solutions: [
    {
      title: "Character frequency counts",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
