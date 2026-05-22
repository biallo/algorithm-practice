import type { PracticeProblem } from '../../problemTypes';
import bruteForceJavascript from './solutions/brute-force.js?raw';
import bruteForceTypescript from './solutions/brute-force.ts?raw';
import javascript from './solutions/one-pass-hash-map.js?raw';
import typescript from './solutions/one-pass-hash-map.ts?raw';

export const problem: PracticeProblem = {
  id: 'two-sum',
  title: 'Two Sum',
  difficulty: 'Easy',
  category: 'Hashing',
  description:
    'Given an array of integers and a `target` value, return the indexes of two different elements whose values add up to the `target`.\n\nEach input has exactly one valid answer, and the same element cannot be used twice.',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] equals 9.',
    },
  ],
  points: [
    'Return the first valid pair you find.',
    'Each input has exactly one answer.',
    'You may not use the same element twice.',
  ],
  solutions: [
    {
      title: 'One-pass hash map',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: 'Brute force',
      javascript: bruteForceJavascript.trim(),
      typescript: bruteForceTypescript.trim(),
    },
  ],
};
