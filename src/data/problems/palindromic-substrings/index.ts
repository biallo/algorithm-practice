import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/center-expansion.js?raw";
import typescript from "./solutions/center-expansion.ts?raw";

export const problem: PracticeProblem = {
  id: `palindromic-substrings`,
  title: `Palindromic Substrings`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Count all substrings of a string that are palindromes.`,
  examples: [
    {
      input: 's = "aaa"',
      output: "6",
      explanation:
        'The palindromic substrings are "a", "a", "a", "aa", "aa", and "aaa".',
    },
  ],
  points: [
    `Every palindrome has a center.`,
    `Expand around each odd and even center.`,
  ],
  solutions: [
    {
      title: "Center expansion",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
