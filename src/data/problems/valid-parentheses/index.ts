import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `valid-parentheses`,
  title: `Valid Parentheses`,
  difficulty: `Easy`,
  category: `Stack`,
  description: `Return true if every opening bracket is closed by the same type of bracket in the correct order.`,
  points: [
    `Push opening brackets onto a stack.`,
    `For closing brackets, compare against the last opening bracket.`,
  ],
  solutions: [
    {
      title: "Stack of expected closers",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
