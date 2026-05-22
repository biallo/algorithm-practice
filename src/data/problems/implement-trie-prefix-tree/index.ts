import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/map-backed-trie.js?raw';
import typescript from './solutions/map-backed-trie.ts?raw';

const implementTriePrefixTree: PracticeProblem = {
  id: 'implement-trie-prefix-tree',
  title: 'Implement Trie Prefix Tree',
  difficulty: 'Medium',
  category: 'Trees',
  description:
    'Implement a `Trie` class with `insert`, `search`, and `startsWith` methods.\n\nA trie stores strings by sharing common prefixes, which makes prefix checks efficient.',
  examples: [
    {
      input:
        'insert("apple"), search("apple"), search("app"), startsWith("app")',
      output: 'true, false, true',
      explanation:
        '"app" is a prefix after inserting "apple", but it is not a complete word yet.',
    },
  ],
  points: [
    'Each node maps a character to the next node.',
    'Store a word-ending flag separately from the prefix path.',
  ],
  solutions: [
    {
      title: 'Map-backed trie',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default implementTriePrefixTree;
