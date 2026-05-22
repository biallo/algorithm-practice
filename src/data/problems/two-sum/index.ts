import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `two-sum`,
  title: `Two Sum`,
  difficulty: `Easy`,
  category: `Hashing`,
  description: `Given an array of integers and a target, return the indexes of the two numbers that add up to the target.`,
  points: [
    `Return the first valid pair you find.`,
    `Each input has exactly one answer.`,
    `You may not use the same element twice.`,
  ],
  solutions: [
    {
      title: "One-pass hash map",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
