import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/length-prefixed-serialization.js?raw';
import typescript from './solutions/length-prefixed-serialization.ts?raw';

const encodeAndDecodeStrings: PracticeProblem = {
  id: 'encode-and-decode-strings',
  title: 'Encode and Decode Strings',
  difficulty: 'Medium',
  category: 'Strings',
  description:
    'Design two functions that encode an array of strings into a single string and decode that string back to the original array.\n\nThe encoding must preserve empty strings, delimiters, and arbitrary characters inside the strings.',
  examples: [
    {
      input: 'strs = ["lint", "code", "love", "you"]',
      output:
        'encode(strs) = "4#lint4#code4#love3#you"\ndecode("4#lint4#code4#love3#you") = ["lint", "code", "love", "you"]',
      explanation:
        'Each string is stored as length + "#" + content, so decode can read the next length before slicing the exact string.',
    },
    {
      input: 'strs = ["", "a#b", "12"]',
      output:
        'encode(strs) = "0#3#a#b2#12"\ndecode("0#3#a#b2#12") = ["", "a#b", "12"]',
      explanation:
        'The length prefix keeps empty strings and delimiter characters inside a string unambiguous.',
    },
  ],
  points: [
    'Prefix every string with its length and a delimiter.',
    'During decode, read the length first, then slice exactly that many characters.',
  ],
  solutions: [
    {
      title: 'Length-prefixed serialization',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default encodeAndDecodeStrings;
