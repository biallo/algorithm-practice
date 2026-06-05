import type { PracticeProblem } from '../../problemTypes';
import { formatTreeAssignment, treeNode } from '../../treeExamples';
import javascript from './solutions/recursive-bounds.js?raw';
import typescript from './solutions/recursive-bounds.ts?raw';

const exampleRoot = treeNode(2, treeNode(1), treeNode(3));

const validateBinarySearchTree: PracticeProblem = {
  id: 'validate-binary-search-tree',
  title: 'Validate Binary Search Tree',
  difficulty: 'Medium',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, determine whether it is a valid binary search tree.\n\nEvery node in the left subtree must be strictly smaller than the current node, and every node in the right subtree must be strictly larger.',
  examples: [
    {
      input: formatTreeAssignment('root', exampleRoot),
      output: 'true',
      explanation:
        'The left value is smaller than 2 and the right value is larger than 2.',
    },
  ],
  points: [
    'Carry lower and upper bounds down the recursion.',
    'A node must satisfy all ancestor bounds, not just its parent value.',
  ],
  solutions: [
    {
      title: 'Recursive bounds',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default validateBinarySearchTree;
