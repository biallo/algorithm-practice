function rob(nums: number[]): number {
  let skip = 0;
  let take = 0;

  for (const amount of nums) {
    const nextTake = skip + amount;
    skip = Math.max(skip, take);
    take = nextTake;
  }

  return Math.max(skip, take);
}
