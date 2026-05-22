import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `climbing-stairs`,
  title: `Climbing Stairs`,
  difficulty: `Easy`,
  category: `Dynamic Programming`,
  description: `Count how many distinct ways there are to climb n stairs when each move is 1 or 2 steps.`,
  points: [
    `The recurrence is the Fibonacci recurrence.`,
    `Only keep the previous two counts.`,
  ],
  solutions: [
    {
      title: "Rolling DP",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
