import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/shift-and-append.js?raw";
import typescript from "./solutions/shift-and-append.ts?raw";

export const problem: PracticeProblem = {
  id: `reverse-bits`,
  title: `Reverse Bits`,
  difficulty: `Easy`,
  category: `Binary`,
  description: `Given a 32-bit unsigned integer, reverse the order of all 32 binary bits and return the resulting unsigned integer.\nLeading zeros in the original value become trailing zeros after reversal.`,
  examples: [
    {
      input: "n = 43261596",
      output: "964176192",
      explanation: "The 32-bit binary representation is reversed.",
    },
  ],
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
