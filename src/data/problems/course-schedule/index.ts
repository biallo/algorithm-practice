import type { PracticeProblem } from "../../problemTypes";
import dfsCycleDetectionJavascript from "./solutions/dfs-cycle-detection.js?raw";
import dfsCycleDetectionTypescript from "./solutions/dfs-cycle-detection.ts?raw";
import javascript from "./solutions/kahns-algorithm.js?raw";
import typescript from "./solutions/kahns-algorithm.ts?raw";

export const problem: PracticeProblem = {
  id: `course-schedule`,
  title: `Course Schedule`,
  difficulty: `Medium`,
  category: `Graphs`,
  description: `Return true if every course can be completed given prerequisite pairs.`,
  examples: [
    {
      input: "numCourses = 2, prerequisites = [[1,0]]",
      output: "true",
      explanation: "Take course 0 before course 1.",
    },
  ],
  points: [
    `This is cycle detection in a directed graph.`,
    `Kahn queue removes nodes with zero incoming edges.`,
  ],
  solutions: [
    {
      title: "Kahn's algorithm",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: "DFS cycle detection",
      javascript: dfsCycleDetectionJavascript.trim(),
      typescript: dfsCycleDetectionTypescript.trim(),
    },
  ],
};
