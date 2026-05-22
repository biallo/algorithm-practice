import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/two-pointers-with-skips.js?raw";
import typescript from "./solutions/two-pointers-with-skips.ts?raw";

export const problem: PracticeProblem = {
  id: `valid-palindrome`,
  title: `Valid Palindrome`,
  difficulty: `Easy`,
  category: `Strings`,
  description: `Given a string, determine whether it is a palindrome after removing all non-alphanumeric characters and ignoring case.\nCompare only letters and digits.`,
  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: "true",
      explanation:
        "After removing punctuation and ignoring case, it reads the same both ways.",
    },
  ],
  points: [
    `Use two pointers from both ends.`,
    `Skip characters that are not letters or digits.`,
  ],
  solutions: [
    {
      title: "Two pointers with skips",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
