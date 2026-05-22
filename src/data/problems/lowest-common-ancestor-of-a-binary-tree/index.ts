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
      input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
      output: '3',
      explanation: 'Node 3 is the lowest node that contains both 5 and 1.',
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
