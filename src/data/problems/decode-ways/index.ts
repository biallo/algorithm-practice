import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/rolling-decode-count.js?raw";
import typescript from "./solutions/rolling-decode-count.ts?raw";

export const problem: PracticeProblem = {
  id: `decode-ways`,
  title: `Decode Ways`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Given a string of digits, count how many ways it can be decoded using the mapping A=1 through Z=26.\nDigits must be grouped into valid one-digit or two-digit codes, and invalid encodings involving 0 should not count.`,
  examples: [
    {
      input: 's = "226"',
      output: "3",
      explanation: "It can decode as BZ, VF, or BBF.",
    },
  ],
  points: [
    `A single digit is valid when it is not 0.`,
    `A two-digit code is valid when it is between 10 and 26.`,
  ],
  solutions: [
    {
      title: "Rolling decode count",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
