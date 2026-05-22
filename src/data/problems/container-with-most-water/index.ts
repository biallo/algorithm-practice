import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/two-pointers.js?raw";
import typescript from "./solutions/two-pointers.ts?raw";

export const problem: PracticeProblem = {
  id: `container-with-most-water`,
  title: `Container With Most Water`,
  difficulty: `Medium`,
  category: `Arrays`,
  description: `Given an array of line heights, choose two lines that form a container with the x-axis.\nReturn the maximum amount of water the container can hold, where area is width times the shorter line height.`,
  examples: [
    {
      input: "height = [1,8,6,2,5,4,8,3,7]",
      output: "49",
      explanation: "The lines at indexes 1 and 8 hold width 7 and height 7.",
    },
  ],
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
