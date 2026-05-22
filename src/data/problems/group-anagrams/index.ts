import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/sorted-key-map.js?raw';
import typescript from './solutions/sorted-key-map.ts?raw';

const groupAnagrams: PracticeProblem = {
  id: 'group-anagrams',
  title: 'Group Anagrams',
  difficulty: 'Medium',
  category: 'Hashing',
  description:
    'Given an array of strings, group together the strings that are anagrams of each other.\n\nTwo strings are anagrams when they contain the same characters with the same frequencies.',
  examples: [
    {
      input: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
      output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]',
      explanation: 'Words with the same character counts are grouped together.',
    },
  ],
  points: [
    'Sorted characters form a stable key for each anagram group.',
    'Append each string into the group for its key.',
  ],
  solutions: [
    {
      title: 'Sorted key map',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default groupAnagrams;
