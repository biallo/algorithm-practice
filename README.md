# Algorithm Practice

A collection of javascript algorithm practices.

## Preview

[https://biallo.github.io/algorithm-practice/](https://biallo.github.io/algorithm-practice/)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Adding Problems

Add each problem as its own folder under `src/data/problems`.

```text
src/data/problems/two-sum/
  index.ts
  solutions/
    one-pass-hash-map.ts
    one-pass-hash-map.js
    brute-force.ts
    brute-force.js
```

Import solution files with `?raw` so the code can be shown in the UI.

```ts
import type { PracticeProblem } from '../../problemTypes';
import javascript from './solutions/one-pass-hash-map.js?raw';
import typescript from './solutions/one-pass-hash-map.ts?raw';

const twoSum: PracticeProblem = {
  id: 'two-sum',
  title: 'Two Sum',
  difficulty: 'Easy',
  category: 'Hashing',
  description:
    'Given an array of integers and a `target` value, return the indexes of two different elements whose values add up to the `target`.\n\nEach input has exactly one valid answer, and the same element cannot be used twice.',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] equals 9.',
    },
  ],
  points: ['Return the first valid pair you find.'],
  solutions: [
    {
      title: 'One-pass hash map',
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};

export default twoSum;
```

After creating the folder, import the problem in `src/data/problems/index.ts`
and add it to the exported `problems` array.

```ts
import twoSum from './two-sum/index';
```

Prompt formatting:

* Wrap identifiers in backticks, for example `func`, to render inline code.
* Use `\n` for a line break inside a paragraph.
* Use `\n\n` to start a new paragraph.
