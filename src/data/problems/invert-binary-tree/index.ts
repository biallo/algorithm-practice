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
      input: 'root = [4,2,7,1,3,6,9]',
      output: '[4,7,2,9,6,3,1]',
      explanation: 'Every left child and right child pair is swapped.',
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
