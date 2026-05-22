import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/prefix-dp-table.js?raw';
import typescript from './solutions/prefix-dp-table.ts?raw';
import rollingRowJavascript from './solutions/rolling-row.js?raw';
import rollingRowTypescript from './solutions/rolling-row.ts?raw';

export const problem: PracticeProblem = {
  id: 'longest-common-subsequence',
  title: 'Longest Common Subsequence',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description: 'Given two strings, return the length of their longest common subsequence.\n\nA subsequence keeps characters in relative order but does not need to be contiguous.',
  examples: [
    {
      input: 'text1 = \'abcde\', text2 = \'ace\'',
      output: '3',
      explanation: 'The longest common subsequence is \'ace\'.',
    },
  ],
  points: [
    'Use a two-dimensional DP table over prefixes.',
    'Matching characters extend the diagonal state.',
  ],
  solutions: [
    {
      title: 'Prefix DP table',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: 'Rolling row DP',
      javascript: rollingRowJavascript.trim(),
      typescript: rollingRowTypescript.trim(),
    },
  ],
};
