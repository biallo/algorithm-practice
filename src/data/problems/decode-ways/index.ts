import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `decode-ways`,
  title: `Decode Ways`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Count how many ways a digit string can be decoded where A=1 through Z=26.`,
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
