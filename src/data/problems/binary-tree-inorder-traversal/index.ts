import type { PracticeProblem } from '../../problemTypes';
import { formatTreeAssignment, treeNode } from '../../treeExamples';
import javascript from './solutions/iterative-stack.js?raw';
import typescript from './solutions/iterative-stack.ts?raw';

const exampleRoot = treeNode(1, null, treeNode(2, treeNode(3)));

const binaryTreeInorderTraversal: PracticeProblem = {
  id: 'binary-tree-inorder-traversal',
  title: 'Binary Tree Inorder Traversal',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, return the inorder traversal of its node values.\n\nInorder traversal visits the left subtree, then the current node, then the right subtree.',
  examples: [
    {
      input: formatTreeAssignment('root', exampleRoot),
      output: '[1,3,2]',
      explanation: 'Visit 1, then the left child of 2, then 2.',
    },
  ],
  points: [
    'Use a stack to simulate the recursive call stack.',
    'Walk left as far as possible before visiting a node.',
  ],
  solutions: [
    {
      title: 'Iterative stack',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default binaryTreeInorderTraversal;
