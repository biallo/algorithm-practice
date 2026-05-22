import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/stack-of-expected-closers.js?raw";
import typescript from "./solutions/stack-of-expected-closers.ts?raw";

export const problem: PracticeProblem = {
  id: `valid-parentheses`,
  title: `Valid Parentheses`,
  difficulty: `Easy`,
  category: `Stack`,
  description: `Given a string containing only bracket characters, determine whether the brackets are valid.\nEvery opening bracket must be closed by the same type of bracket and in the correct order.`,
  examples: [
    {
      input: 's = "()[]{}"',
      output: "true",
      explanation: "Every opening bracket is closed in the correct order.",
    },
  ],
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
