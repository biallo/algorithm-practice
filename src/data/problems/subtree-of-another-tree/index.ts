import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/dfs-with-tree-compare.js?raw';
import typescript from './solutions/dfs-with-tree-compare.ts?raw';

const subtreeOfAnotherTree: PracticeProblem = {
  id: 'subtree-of-another-tree',
  title: 'Subtree of Another Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the roots of two binary trees `root` and `subRoot`, return whether `subRoot` is a subtree of `root`.\n\nA subtree must match a node in `root` and include all descendants below that node.',
  examples: [
    {
      input:
        'root = { val: 3, left: { val: 4, left: { val: 1, left: null, right: null }, right: { val: 2, left: null, right: null } }, right: { val: 5, left: null, right: null } }, subRoot = { val: 4, left: { val: 1, left: null, right: null }, right: { val: 2, left: null, right: null } }',
      output: 'true',
      explanation: 'The subtree rooted at value 4 matches `subRoot`.',
    },
  ],
  points: [
    'At each node, check whether the two trees are identical.',
    'If not, keep searching the left and right subtrees.',
  ],
  solutions: [
    {
      title: 'DFS with tree compare',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default subtreeOfAnotherTree;
