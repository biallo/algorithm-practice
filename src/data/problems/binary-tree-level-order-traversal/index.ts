import type { PracticeProblem } from '../../problemTypes';
import { formatTreeAssignment, treeNode } from '../../treeExamples';
import javascript from './solutions/bfs-by-level.js?raw';
import typescript from './solutions/bfs-by-level.ts?raw';

const exampleRoot = treeNode(
  3,
  treeNode(9),
  treeNode(20, treeNode(15), treeNode(7)),
);

const binaryTreeLevelOrderTraversal: PracticeProblem = {
  id: 'binary-tree-level-order-traversal',
  title: 'Binary Tree Level Order Traversal',
  difficulty: 'Medium',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, return the level order traversal of its node values.\n\nLevel order traversal visits nodes from left to right, one depth level at a time.',
  examples: [
    {
      input: formatTreeAssignment('root', exampleRoot),
      output: '[[3],[9,20],[15,7]]',
      explanation: 'The output groups nodes by depth.',
    },
  ],
  points: [
    'Use a queue to process nodes breadth-first.',
    'Track the current queue length to separate levels.',
  ],
  solutions: [
    {
      title: 'BFS by level',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default binaryTreeLevelOrderTraversal;
