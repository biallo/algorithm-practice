import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/recursive-swap.js?raw';
import typescript from './solutions/recursive-swap.ts?raw';

const invertBinaryTree: PracticeProblem = {
  id: 'invert-binary-tree',
  title: 'Invert Binary Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, invert the tree and return its root.\n\nInverting a tree means every node swaps its left and right children.',
  examples: [
    {
      input:
        'root = { val: 4, left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: { val: 7, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null } } }',
      output:
        '{ val: 4, left: { val: 7, left: { val: 9, left: null, right: null }, right: { val: 6, left: null, right: null } }, right: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } } }',
      explanation:
        'The returned root is the same tree object after every left and right child pair is swapped.',
    },
  ],
  points: [
    'Swap the current node children.',
    'Recursively invert both subtrees after the swap.',
  ],
  solutions: [
    {
      title: 'Recursive swap',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default invertBinaryTree;
