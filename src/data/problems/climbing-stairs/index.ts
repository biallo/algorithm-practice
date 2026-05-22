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
  description: `You are climbing a staircase with n steps.\nEach move can climb either 1 step or 2 steps. Return the number of distinct ways to reach the top.`,
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
