import type { PracticeProblem } from '../../problemTypes';
import {
  formatTreeAssignment,
  formatTreeNode,
  treeNode,
} from '../../treeExamples';
import javascript from './solutions/recursive-swap.js?raw';
import typescript from './solutions/recursive-swap.ts?raw';

const exampleRoot = treeNode(
  4,
  treeNode(2, treeNode(1), treeNode(3)),
  treeNode(7, treeNode(6), treeNode(9)),
);
const exampleInvertedRoot = treeNode(
  4,
  treeNode(7, treeNode(9), treeNode(6)),
  treeNode(2, treeNode(3), treeNode(1)),
);

const invertBinaryTree: PracticeProblem = {
  id: 'invert-binary-tree',
  title: 'Invert Binary Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, invert the tree and return its root.\n\nInverting a tree means every node swaps its left and right children.',
  examples: [
    {
      input: formatTreeAssignment('root', exampleRoot),
      output: formatTreeNode(exampleInvertedRoot),
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
