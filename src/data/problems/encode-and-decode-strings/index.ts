import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `encode-and-decode-strings`,
  title: `Encode and Decode Strings`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Design a reversible way to encode an array of strings into one string and decode it back.`,
  points: [
    `Prefix every string with its length and a delimiter.`,
    `During decode, read the length first, then slice exactly that many characters.`,
  ],
  solutions: [
    {
      title: "Length-prefixed serialization",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
