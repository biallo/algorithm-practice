import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/length-prefixed-serialization.js?raw";
import typescript from "./solutions/length-prefixed-serialization.ts?raw";

export const problem: PracticeProblem = {
  id: `encode-and-decode-strings`,
  title: `Encode and Decode Strings`,
  difficulty: `Medium`,
  category: `Strings`,
  description: `Design a reversible way to encode an array of strings into one string and decode it back.`,
  examples: [
    {
      input: 'strs = ["lint","code","love","you"]',
      output: '["lint","code","love","you"]',
      explanation:
        "Decoding the encoded string restores the original array exactly.",
    },
  ],
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
