function maxProduct(nums: number[]): number {
  let maxEnding = nums[0];
  let minEnding = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];

    if (num < 0) {
      [maxEnding, minEnding] = [minEnding, maxEnding];
    }

    maxEnding = Math.max(num, maxEnding * num);
    minEnding = Math.min(num, minEnding * num);
    best = Math.max(best, maxEnding);
  }

  return best;
}
