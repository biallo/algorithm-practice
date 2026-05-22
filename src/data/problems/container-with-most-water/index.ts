import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `container-with-most-water`,
  title: `Container With Most Water`,
  difficulty: `Medium`,
  category: `Arrays`,
  description: `Choose two vertical lines that hold the most water.`,
  points: [
    `Area is limited by the shorter line.`,
    `Move the pointer at the shorter line inward.`,
  ],
  solutions: [
    {
      title: "Two pointers",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
