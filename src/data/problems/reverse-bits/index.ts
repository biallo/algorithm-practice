import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `reverse-bits`,
  title: `Reverse Bits`,
  difficulty: `Easy`,
  category: `Binary`,
  description: `Reverse the bits of a 32-bit unsigned integer.`,
  points: [
    `Shift the result left before appending the next bit.`,
    `Use unsigned shifts to avoid sign extension.`,
  ],
  solutions: [
    {
      title: "Shift and append",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
