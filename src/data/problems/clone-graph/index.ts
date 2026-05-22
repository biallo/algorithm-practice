import type { PracticeProblem } from '../../problemTypes';
import bfsJavascript from './solutions/bfs.js?raw';
import bfsTypescript from './solutions/bfs.ts?raw';
import javascript from './solutions/dfs-with-memoization.js?raw';
import typescript from './solutions/dfs-with-memoization.ts?raw';

export const problem: PracticeProblem = {
  id: 'clone-graph',
  title: 'Clone Graph',
  difficulty: 'Medium',
  category: 'Graphs',
  description:
    'Given a reference to a node in a connected undirected graph, return a deep copy of the entire graph.\n\nEach node contains a value and a list of neighbor nodes, and the cloned graph must not reuse any original nodes.',
  examples: [
    {
      input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
      output: 'A deep copy of the same graph',
      explanation:
        'Each cloned node has the same value and neighbor structure, but no original node is reused.',
    },
  ],
  points: [
    'Use a map from original node to cloned node.',
    'DFS or BFS works as long as cycles are memoized.',
  ],
  solutions: [
    {
      title: 'DFS with memoization',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: 'BFS with queue',
      javascript: bfsJavascript.trim(),
      typescript: bfsTypescript.trim(),
    },
  ],
};
