import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `maximum-product-subarray`,
  title: `Maximum Product Subarray`,
  difficulty: `Medium`,
  category: `Dynamic Programming`,
  description: `Find the contiguous subarray with the largest product.`,
  points: [
    `Track both max and min products because a negative can flip them.`,
    `Start from the first number to handle all-negative inputs.`,
  ],
  solutions: [
    {
      title: "Track maximum and minimum products",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
