import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/reachable-prefix-dp.js?raw';
import typescript from './solutions/reachable-prefix-dp.ts?raw';

const wordBreak: PracticeProblem = {
  id: 'word-break',
  title: 'Word Break',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'Given a string and a dictionary of words, determine whether the string can be segmented into a space-separated sequence of one or more dictionary words.\n\nWords from the dictionary may be reused.',
  examples: [
    {
      input: 's = "leetcode", wordDict = ["leet", "code"]',
      output: 'true',
      explanation: 'The string can be segmented as "leet" + "code".',
    },
  ],
  points: [
    'dp[i] means the prefix ending at i can be segmented.',
    'For each valid prefix, try every dictionary word as the next suffix.',
  ],
  solutions: [
    {
      title: 'Reachable prefix DP',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default wordBreak;
