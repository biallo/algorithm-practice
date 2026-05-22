import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/need-and-window-counts.js?raw';
import typescript from './solutions/need-and-window-counts.ts?raw';

const minimumWindowSubstring: PracticeProblem = {
  id: 'minimum-window-substring',
  title: 'Minimum Window Substring',
  difficulty: 'Hard',
  category: 'Strings',
  description:
    'Given two strings `s` and `t`, return the shortest substring of `s` that contains every character from `t`, including duplicate characters.\n\nReturn an empty string if no such window exists.',
  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation: '"BANC" is the shortest substring containing A, B, and C.',
    },
  ],
  points: [
    'Track how many required characters are fully satisfied.',
    'Shrink the left side while the window remains valid.',
  ],
  solutions: [
    {
      title: 'Need and window counts',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default minimumWindowSubstring;
