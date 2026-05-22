function missingNumber(nums: number[]): number {
  const expected = (nums.length * (nums.length + 1)) / 2;
  const actual = nums.reduce((sum, num) => sum + num, 0);

  return expected - actual;
}
