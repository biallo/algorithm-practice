import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/recursive-depth.js?raw';
import typescript from './solutions/recursive-depth.ts?raw';

const maximumDepthOfBinaryTree: PracticeProblem = {
  id: 'maximum-depth-of-binary-tree',
  title: 'Maximum Depth of Binary Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, return its maximum depth.\n\nThe maximum depth is the number of nodes along the longest path from the root node down to a leaf node.',
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '3',
      explanation: 'The longest root-to-leaf path has 3 nodes.',
    },
  ],
  points: [
    'An empty tree has depth 0.',
    'The depth of a node is 1 plus the deeper depth of its children.',
  ],
  solutions: [
    {
      title: 'Recursive depth',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default maximumDepthOfBinaryTree;
