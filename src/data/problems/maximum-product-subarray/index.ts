import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/track-maximum-and-minimum-products.js?raw';
import typescript from './solutions/track-maximum-and-minimum-products.ts?raw';

const maximumProductSubarray: PracticeProblem = {
  id: 'maximum-product-subarray',
  title: 'Maximum Product Subarray',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'Given an integer array, return the largest product of any non-empty contiguous subarray.\n\nThe array can contain negative numbers, which may turn a small product into a large positive product.',
  examples: [
    {
      input: 'nums = [2,3,-2,4]',
      output: '6',
      explanation: 'The subarray [2,3] has the largest product.',
    },
  ],
  points: [
    'Track both max and min products because a negative can flip them.',
    'Start from the first number to handle all-negative inputs.',
  ],
  solutions: [
    {
      title: 'Track maximum and minimum products',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default maximumProductSubarray;
