import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/character-frequency-counts.js?raw';
import typescript from './solutions/character-frequency-counts.ts?raw';
import sortJavascript from './solutions/sort.js?raw';
import sortTypescript from './solutions/sort.ts?raw';

export const problem: PracticeProblem = {
  id: 'valid-anagram',
  title: 'Valid Anagram',
  difficulty: 'Easy',
  category: 'Strings',
  description: 'Given two strings, determine whether one string is an anagram of the other.\n\nThe strings are anagrams when they contain exactly the same characters with the same frequencies.',
  examples: [
    {
      input: 's = \'anagram\', t = \'nagaram\'',
      output: 'true',
      explanation:
        'Both strings contain the same characters with the same counts.',
    },
  ],
  points: [
    'Different lengths cannot be anagrams.',
    'Increment counts for one string and decrement for the other.',
  ],
  solutions: [
    {
      title: 'Character frequency counts',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: 'Sort and compare',
      javascript: sortJavascript.trim(),
      typescript: sortTypescript.trim(),
    },
  ],
};
