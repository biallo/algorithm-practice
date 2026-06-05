import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/recursive-postorder.js?raw';
import typescript from './solutions/recursive-postorder.ts?raw';

const lowestCommonAncestorOfABinaryTree: PracticeProblem = {
  id: 'lowest-common-ancestor-of-a-binary-tree',
  title: 'Lowest Common Ancestor of a Binary Tree',
  difficulty: 'Medium',
  category: 'Trees',
  description:
    'Given the `root` of a binary tree and two nodes `p` and `q`, return their lowest common ancestor.\n\nThe lowest common ancestor is the deepest node that has both `p` and `q` as descendants, where a node can be a descendant of itself.',
  examples: [
    {
      input:
        'root = { val: 3, left: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: { val: 7, left: null, right: null }, right: { val: 4, left: null, right: null } } }, right: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 8, left: null, right: null } } }, p = root.left, q = root.right',
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
