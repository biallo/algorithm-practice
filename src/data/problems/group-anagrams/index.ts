import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/sorted-key-map.js?raw";
import typescript from "./solutions/sorted-key-map.ts?raw";

export const problem: PracticeProblem = {
  id: `group-anagrams`,
  title: `Group Anagrams`,
  difficulty: `Medium`,
  category: `Hashing`,
  description: `Group strings that are anagrams of each other.`,
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      explanation: "Words with the same character counts are grouped together.",
    },
  ],
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
