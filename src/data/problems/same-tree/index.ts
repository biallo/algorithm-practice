import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/recursive-compare.js?raw';
import typescript from './solutions/recursive-compare.ts?raw';

const sameTree: PracticeProblem = {
  id: 'same-tree',
  title: 'Same Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the roots of two binary trees `p` and `q`, determine whether they are the same tree.\n\nTwo trees are the same when their structure is identical and every corresponding node has the same value.',
  examples: [
    {
      input:
        'p = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }, q = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }',
      output: 'true',
      explanation: 'Both trees have the same shape and values.',
    },
  ],
  points: [
    'Compare null states before comparing values.',
    'Both left subtrees and both right subtrees must match.',
  ],
  solutions: [
    {
      title: 'Recursive compare',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default sameTree;
