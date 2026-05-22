import type { PracticeProblem } from '../../problemTypes';
import bfsJavascript from './solutions/bfs.js?raw';
import bfsTypescript from './solutions/bfs.ts?raw';
import javascript from './solutions/flood-fill.js?raw';
import typescript from './solutions/flood-fill.ts?raw';

const numberOfIslands: PracticeProblem = {
  id: 'number-of-islands',
  title: 'Number of Islands',
  difficulty: 'Medium',
  category: 'Matrix',
  description:
    'Given a `grid` of land and water cells, count the number of islands.\n\nAn island is a group of horizontally or vertically connected land cells surrounded by water or `grid` boundaries.',
  examples: [
    {
      input: 'grid = [["1","1","0"],["0","1","0"],["1","0","1"]]',
      output: '3',
      explanation: 'There are three disconnected groups of land cells.',
    },
  ],
  points: [
    'Each DFS marks one whole island.',
    'Mutating visited land to water avoids a separate visited set.',
  ],
  solutions: [
    {
      title: 'Flood fill',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
    {
      title: 'Breadth-first search',
      javascript: bfsJavascript.trim(),
      typescript: bfsTypescript.trim(),
    },
  ],
};

export default numberOfIslands;
