function reverseBits(n) {
  let result = 0;
  let value = n >>> 0;

  for (let i = 0; i < 32; i += 1) {
    result = (result << 1) | (value & 1);
    value >>>= 1;
  }

  return result >>> 0;
}
