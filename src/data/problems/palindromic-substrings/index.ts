import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/center-expansion.js?raw';
import typescript from './solutions/center-expansion.ts?raw';

export const problem: PracticeProblem = {
  id: 'palindromic-substrings',
  title: 'Palindromic Substrings',
  difficulty: 'Medium',
  category: 'Strings',
  description: 'Given a string, return the total number of substrings that are palindromes.\n\nA substring is contiguous, and single-character substrings count as palindromes.',
  examples: [
    {
      input: 's = \'aaa\'',
      output: '6',
      explanation:
        'The palindromic substrings are \'a\', \'a\', \'a\', \'aa\', \'aa\', and \'aaa\'.',
    },
  ],
  points: [
    'Every palindrome has a center.',
    'Expand around each odd and even center.',
  ],
  solutions: [
    {
      title: 'Center expansion',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
