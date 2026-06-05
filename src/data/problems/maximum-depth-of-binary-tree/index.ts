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
      input:
        'root = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }',
      output: '3',
      explanation:
        'This tree is commonly serialized as [3,9,20,null,null,15,7]. The longest root-to-leaf path has 3 nodes.',
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
