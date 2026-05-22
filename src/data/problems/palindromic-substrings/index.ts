import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `palindromic-substrings`,
  title: `Palindromic Substrings`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Count all substrings of a string that are palindromes.`,
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
