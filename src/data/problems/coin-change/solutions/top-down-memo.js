function coinChange(coins, amount) {
  const memo = new Map();

  function dfs(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return Infinity;
    if (memo.has(remaining)) return memo.get(remaining);

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
