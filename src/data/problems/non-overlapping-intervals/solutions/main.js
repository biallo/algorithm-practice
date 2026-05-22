function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let removals = 0;
  let end = -Infinity;

  for (const [start, finish] of intervals) {
    if (start >= end) {
      end = finish;
    } else {
      removals += 1;
    }
  }

  return removals;
}
