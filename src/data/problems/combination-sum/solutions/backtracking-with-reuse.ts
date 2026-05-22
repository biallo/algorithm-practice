function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function dfs(start: number, remaining: number): void {
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
