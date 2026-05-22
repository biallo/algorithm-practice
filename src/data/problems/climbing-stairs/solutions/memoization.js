function climbStairs(n) {
  const memo = new Map([
    [0, 1],
    [1, 1],
  ]);

  function count(step) {
    if (memo.has(step)) {
      return memo.get(step);
    }

    const ways = count(step - 1) + count(step - 2);
    memo.set(step, ways);
    return ways;
  }

  return count(n);
}
