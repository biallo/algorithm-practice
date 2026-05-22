import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `course-schedule`,
  title: `Course Schedule`,
  difficulty: `Medium`,
  category: `Graphs`,
  description: `Return true if every course can be completed given prerequisite pairs.`,
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
  ],
};
