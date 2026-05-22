import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/clear-lowest-set-bit.js?raw';
import typescript from './solutions/clear-lowest-set-bit.ts?raw';

const numberOf1Bits: PracticeProblem = {
  id: 'number-of-1-bits',
  title: 'Number of 1 Bits',
  difficulty: 'Easy',
  category: 'Binary',
  description:
    'Given a 32-bit unsigned integer, return the number of 1 bits in its binary representation.\n\nThis count is also known as the Hamming weight.',
  examples: [
    {
      input: 'n = 11',
      output: '3',
      explanation: '11 is 1011 in binary, which has three set bits.',
    },
  ],
  points: [
    'Use n & (n - 1) to remove the lowest set bit.',
    'Convert to unsigned with >>> 0 for JavaScript number behavior.',
  ],
  solutions: [
    {
      title: 'Clear lowest set bit',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default numberOf1Bits;
