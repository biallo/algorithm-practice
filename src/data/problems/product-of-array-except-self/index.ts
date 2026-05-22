import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `product-of-array-except-self`,
  title: `Product of Array Except Self`,
  difficulty: `Medium`,
  category: `Arrays`,
  description: `Return an array where each value is the product of every number except the number at that index.`,
  points: [
    `Do not use division.`,
    `Build prefix products first, then multiply by suffix products.`,
  ],
  solutions: [
    {
      title: "Prefix and suffix scan",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
