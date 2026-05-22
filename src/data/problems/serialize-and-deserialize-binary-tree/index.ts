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
      input: 'root = [1,2,3,null,null,4,5]',
      output: '[1,2,3,null,null,4,5]',
      explanation:
        'Deserializing the serialized string rebuilds the same tree.',
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
