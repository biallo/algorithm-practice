function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end += 1) {
    for (let start = 0; start < end; start += 1) {
      if (dp[start] && words.has(s.slice(start, end))) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[s.length];
}
