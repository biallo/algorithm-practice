import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `contains-duplicate`,
  title: `Contains Duplicate`,
  difficulty: `Easy`,
  category: `Hashing`,
  description: `Return true when any value appears at least twice in the array.`,
  points: [
    `The answer only depends on whether a duplicate exists.`,
    `A set gives constant-time membership checks.`,
  ],
  solutions: [
    {
      title: "Set membership",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
