import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `group-anagrams`,
  title: `Group Anagrams`,
  difficulty: `Medium`,
  category: `Hashing`,
  description: `Group strings that are anagrams of each other.`,
  points: [
    `Sorted characters form a stable key for each anagram group.`,
    `Append each string into the group for its key.`,
  ],
  solutions: [
    {
      title: "Sorted key map",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
