import type { PracticeProblem } from '../../problemTypes';
import {
  formatExampleParts,
  formatTreeAssignment,
  treeNode,
} from '../../treeExamples';
import javascript from './solutions/recursive-compare.js?raw';
import typescript from './solutions/recursive-compare.ts?raw';

const exampleP = treeNode(1, treeNode(2), treeNode(3));
const exampleQ = treeNode(1, treeNode(2), treeNode(3));

const sameTree: PracticeProblem = {
  id: 'same-tree',
  title: 'Same Tree',
  difficulty: 'Easy',
  category: 'Trees',
  description:
    'Given the roots of two binary trees `p` and `q`, determine whether they are the same tree.\n\nTwo trees are the same when their structure is identical and every corresponding node has the same value.',
  examples: [
    {
      input: formatExampleParts(
        formatTreeAssignment('p', exampleP),
        formatTreeAssignment('q', exampleQ),
      ),
      output: 'true',
      explanation: 'Both trees have the same shape and values.',
    },
  ],
  points: [
    'Compare null states before comparing values.',
    'Both left subtrees and both right subtrees must match.',
  ],
  solutions: [
    {
      title: 'Recursive compare',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default sameTree;
