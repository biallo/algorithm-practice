import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/expected-sum.js?raw';
import typescript from './solutions/expected-sum.ts?raw';
import xorJavascript from './solutions/xor.js?raw';
import xorTypescript from './solutions/xor.ts?raw';

const missingNumber: PracticeProblem = {
  id: 'missing-number',
  title: 'Missing Number',
  difficulty: 'Easy',
  category: 'Binary',
  description:
    'Given an array containing `n` distinct numbers from the range 0 through `n`, return the one number in that range that is missing from the array.',
  examples: [
    {
      input: 'nums = [3,0,1]',
      output: '2',
      explanation: 'The range is 0 through 3, and 2 is absent.',
    },
  ],
  points: [
    'The expected sum of 0..n is n * (n + 1) / 2.',
    'Subtract the actual sum.',
  ],
  solutions: [
    {
      title: 'Expected sum',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: 'XOR cancellation',
      javascript: xorJavascript.trim(),
      typescript: xorTypescript.trim(),
    },
  ],
};

export default missingNumber;
