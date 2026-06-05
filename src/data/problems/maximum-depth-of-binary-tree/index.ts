import type { PracticeProblem } from '../../problemTypes';
import { formatTreeAssignment, treeNode } from '../../treeExamples';
import javascript from './solutions/recursive-depth.js?raw';
import typescript from './solutions/recursive-depth.ts?raw';

const exampleRoot = treeNode(
  3,
  treeNode(9),
  treeNode(20, treeNode(15), treeNode(7)),
);

const maximumDepthOfBinaryTree: PracticeProblem = {
  id: 'maximum-depth-of-binary-tree',
  title: 'Maximum Depth of Binary Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree, return its maximum depth.\n\nThe maximum depth is the number of nodes along the longest path from the root node down to a leaf node.',
  examples: [
    {
      input: formatTreeAssignment('root', exampleRoot),
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
