import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/kadanes-algorithm.js?raw';
import typescript from './solutions/kadanes-algorithm.ts?raw';

const maximumSubarray: PracticeProblem = {
  id: 'maximum-subarray',
  title: 'Maximum Subarray',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'Given an integer array, return the largest sum of any non-empty contiguous subarray.\n\nThe subarray must use adjacent elements from the original array.',
  examples: [
    {
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'The subarray [4,-1,2,1] has sum 6.',
    },
  ],
  points: [
    'Keep the best sum ending at the current index.',
    'Restart the window when the previous sum hurts the result.',
  ],
  solutions: [
    {
      title: 'Kadane\'s algorithm',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default maximumSubarray;
