import type { PracticeProblem } from '../../problemTypes';
import {
  formatExampleParts,
  formatTreeAssignment,
  treeNode,
} from '../../treeExamples';
import javascript from './solutions/recursive-postorder.js?raw';
import typescript from './solutions/recursive-postorder.ts?raw';

const exampleRoot = treeNode(
  3,
  treeNode(
    5,
    treeNode(6),
    treeNode(2, treeNode(7), treeNode(4)),
  ),
  treeNode(1, treeNode(0), treeNode(8)),
);

const lowestCommonAncestorOfABinaryTree: PracticeProblem = {
  id: 'lowest-common-ancestor-of-a-binary-tree',
  title: 'Lowest Common Ancestor of a Binary Tree',
  difficulty: 'Medium',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree and two nodes `p` and `q`, return their lowest common ancestor.\n\nThe lowest common ancestor is the deepest node that has both `p` and `q` as descendants, where a node can be a descendant of itself.',
  examples: [
    {
      input: formatExampleParts(
        formatTreeAssignment('root', exampleRoot),
        'p = root.left',
        'q = root.right',
      ),
      output: 'root',
      explanation:
        'The returned node is `root`, whose value is 3, because it is the lowest node that contains both 5 and 1.',
    },
  ],
  points: [
    'Return the current node when it matches either target.',
    'If both subtrees return a match, the current node is the ancestor.',
  ],
  solutions: [
    {
      title: 'Recursive postorder',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default lowestCommonAncestorOfABinaryTree;
