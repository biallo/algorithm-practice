function lengthOfLIS(nums) {
  const dp = Array(nums.length).fill(1);
  let best = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    best = Math.max(best, dp[i]);
  }

  return best;
}
