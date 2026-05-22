import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/rolling-dp.js?raw";
import memoizationJavascript from "./solutions/memoization.js?raw";
import memoizationTypescript from "./solutions/memoization.ts?raw";
import typescript from "./solutions/rolling-dp.ts?raw";

export const problem: PracticeProblem = {
  id: `climbing-stairs`,
  title: `Climbing Stairs`,
  difficulty: `Easy`,
  category: `Dynamic Programming`,
  description: `Count how many distinct ways there are to climb n stairs when each move is 1 or 2 steps.`,
  examples: [
    {
      input: "n = 3",
      output: "3",
      explanation: "The valid sequences are 1+1+1, 1+2, and 2+1.",
    },
  ],
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
    {
      title: "Top-down memoization",
      javascript: memoizationJavascript.trim(),
      typescript: memoizationTypescript.trim(),
    },
  ],
};
