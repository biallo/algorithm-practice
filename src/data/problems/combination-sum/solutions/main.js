function combinationSum(candidates, target) {
  const result = [];
  const path = [];

  function dfs(start, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i += 1) {
      const candidate = candidates[i];

      if (candidate > remaining) continue;

      path.push(candidate);
      dfs(i, remaining - candidate);
      path.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  dfs(0, target);
  return result;
}
