function coinChange(coins: number[], amount: number): number {
  const memo = new Map<number, number>();

  function dfs(remaining: number): number {
    if (remaining === 0) return 0;
    if (remaining < 0) return Infinity;
    if (memo.has(remaining)) return memo.get(remaining)!;

    let best = Infinity;
    for (const coin of coins) {
      best = Math.min(best, dfs(remaining - coin) + 1);
    }

    memo.set(remaining, best);
    return best;
  }

  const result = dfs(amount);
  return result === Infinity ? -1 : result;
}
