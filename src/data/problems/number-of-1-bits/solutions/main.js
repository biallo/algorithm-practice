function hammingWeight(n) {
  let count = 0;
  let value = n >>> 0;

  while (value !== 0) {
    value &= value - 1;
    count += 1;
  }

  return count;
}
