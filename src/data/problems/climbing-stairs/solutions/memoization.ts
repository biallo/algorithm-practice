function climbStairs(n: number): number {
  const memo = new Map<number, number>([
    [0, 1],
    [1, 1],
  ]);

  function count(step: number): number {
    if (memo.has(step)) {
      return memo.get(step)!;
    }

    const ways = count(step - 1) + count(step - 2);
    memo.set(step, ways);
    return ways;
  }

  return count(n);
}
