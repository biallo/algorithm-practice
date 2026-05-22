import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/binary-search-by-sorted-side.js?raw';
import typescript from './solutions/binary-search-by-sorted-side.ts?raw';

export const problem: PracticeProblem = {
  id: 'search-in-rotated-sorted-array',
  title: 'Search in Rotated Sorted Array',
  difficulty: 'Medium',
  category: 'Binary',
  description:
    'Given a sorted array of unique numbers that has been rotated and a `target` value, return the index of the `target`.\n\nReturn -1 if the `target` is not present.',
  examples: [
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 0',
      output: '4',
      explanation: 'The target 0 is found at index 4.',
    },
  ],
  points: [
    'At least one side of the midpoint is sorted.',
    'Use the sorted side to decide which half to discard.',
  ],
  solutions: [
    {
      title: 'Binary search by sorted side',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
