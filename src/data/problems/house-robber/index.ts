import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/take-or-skip-dp.js?raw';
import typescript from './solutions/take-or-skip-dp.ts?raw';

export const problem: PracticeProblem = {
  id: 'house-robber',
  title: 'House Robber',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'Given an array where each value is the `amount` of money in a house, return the maximum `amount` you can rob.\n\nAdjacent houses cannot both be robbed because doing so triggers the security system.',
  examples: [
    {
      input: 'nums = [2,7,9,3,1]',
      output: '12',
      explanation: 'Rob houses with amounts 2, 9, and 1.',
    },
  ],
  points: [
    'At each house, choose between skipping it and robbing it.',
    'Only two previous states are needed.',
  ],
  solutions: [
    {
      title: 'Take or skip DP',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
