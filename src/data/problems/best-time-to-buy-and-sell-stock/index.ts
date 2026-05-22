import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/track-lowest-price.js?raw';
import typescript from './solutions/track-lowest-price.ts?raw';

export const problem: PracticeProblem = {
  id: 'best-time-to-buy-and-sell-stock',
  title: 'Best Time to Buy and Sell Stock',
  difficulty: 'Easy',
  category: 'Arrays',
  description:
    'Given an array `prices` where `prices[i]` is the price of a stock on day `i`, choose one day to buy and a later day to sell.\n\nReturn the maximum profit you can make from exactly one transaction, or 0 if no profitable transaction exists.',
  examples: [
    {
      input: 'prices = [7,1,5,3,6,4]',
      output: '5',
      explanation: 'Buy at 1 and sell at 6 for a profit of 5.',
    },
  ],
  points: [
    'You must buy before you sell.',
    'Return 0 when no profitable trade exists.',
  ],
  solutions: [
    {
      title: 'Track lowest price',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
