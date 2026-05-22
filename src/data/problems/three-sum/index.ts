import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/sort-and-sweep.js?raw';
import typescript from './solutions/sort-and-sweep.ts?raw';

export const problem: PracticeProblem = {
  id: 'three-sum',
  title: '3Sum',
  difficulty: 'Medium',
  category: 'Arrays',
  description:
    'Given an integer array, return all unique triplets whose values sum to zero.\n\nThe same element cannot be reused within a triplet, and duplicate triplets should not appear in the result.',
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'These are the unique triplets that sum to zero.',
    },
  ],
  points: [
    'Sort first so duplicates are easy to skip.',
    'Fix one value, then use two pointers for the remaining pair.',
  ],
  solutions: [
    {
      title: 'Sort and sweep',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
