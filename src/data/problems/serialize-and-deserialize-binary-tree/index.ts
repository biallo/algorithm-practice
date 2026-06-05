import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/preorder-with-null-markers.js?raw';
import typescript from './solutions/preorder-with-null-markers.ts?raw';

const serializeAndDeserializeBinaryTree: PracticeProblem = {
  id: 'serialize-and-deserialize-binary-tree',
  title: 'Serialize and Deserialize Binary Tree',
  difficulty: 'Hard',
  category: 'Trees',
  description:
    'Design an algorithm to serialize and deserialize a binary tree.\n\nSerialization converts the tree into a string, and deserialization reconstructs the original tree structure from that string.',
  examples: [
    {
      input:
        'root = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } } }',
      output: 'serialize(root) = "1,2,#,#,3,4,#,#,5,#,#"',
      explanation:
        'Deserializing the serialized string rebuilds the same tree object structure.',
    },
  ],
  points: [
    'Null markers are required to preserve tree shape.',
    'Preorder traversal lets deserialize rebuild the tree in one pass.',
  ],
  solutions: [
    {
      title: 'Preorder with null markers',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default serializeAndDeserializeBinaryTree;
