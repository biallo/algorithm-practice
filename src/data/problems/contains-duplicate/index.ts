import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/set-membership.js?raw';
import typescript from './solutions/set-membership.ts?raw';

const containsDuplicate: PracticeProblem = {
  id: 'contains-duplicate',
  title: 'Contains Duplicate',
  difficulty: 'Easy',
  category: 'Hashing',
  description:
    'Given an integer array, return true if any value appears at least twice.\n\nReturn false when every value in the array is unique.',
  examples: [
    {
      input: 'nums = [1,2,3,1]',
      output: 'true',
      explanation: 'The value 1 appears more than once.',
    },
  ],
  points: [
    'The answer only depends on whether a duplicate exists.',
    'A set gives constant-time membership checks.',
  ],
  solutions: [
    {
      title: 'Set membership',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default containsDuplicate;
