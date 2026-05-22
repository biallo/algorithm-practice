import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/sort-and-detect-overlap.js?raw';
import typescript from './solutions/sort-and-detect-overlap.ts?raw';

export const problem: PracticeProblem = {
  id: 'meeting-rooms',
  title: 'Meeting Rooms',
  difficulty: 'Easy',
  category: 'Intervals',
  description:
    'Given an array of meeting time `intervals`, determine whether one person can attend every meeting.\n\nMeetings conflict when one starts before the previous one has ended.',
  examples: [
    {
      input: 'intervals = [[0,30],[5,10],[15,20]]',
      output: 'false',
      explanation: 'The meeting [5,10] overlaps with [0,30].',
    },
  ],
  points: [
    'Sort meetings by start time.',
    'Any start before the previous end means a conflict.',
  ],
  solutions: [
    {
      title: 'Sort and detect overlap',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
