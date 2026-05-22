import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/sort-then-merge.js?raw';
import typescript from './solutions/sort-then-merge.ts?raw';

const mergeIntervals: PracticeProblem = {
  id: 'merge-intervals',
  title: 'Merge Intervals',
  difficulty: 'Medium',
  category: 'Intervals',
  description:
    'Given an array of `intervals`, merge all overlapping `intervals` and return a list of non-overlapping `intervals` that covers the same ranges.',
  examples: [
    {
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation: '[1,3] and [2,6] overlap and merge.',
    },
  ],
  points: [
    'Sort intervals by start time.',
    'If the next start is within the current end, extend the current interval.',
  ],
  solutions: [
    {
      title: 'Sort then merge',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default mergeIntervals;
