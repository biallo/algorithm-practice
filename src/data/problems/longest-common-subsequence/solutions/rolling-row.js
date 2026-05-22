function longestCommonSubsequence(text1, text2) {
  const previous = Array(text2.length + 1).fill(0);
  const current = Array(text2.length + 1).fill(0);

  for (let i = 1; i <= text1.length; i += 1) {
    for (let j = 1; j <= text2.length; j += 1) {
      if (text1[i - 1] === text2[j - 1]) {
        current[j] = previous[j - 1] + 1;
      } else {
        current[j] = Math.max(previous[j], current[j - 1]);
      }
    }

    for (let j = 0; j <= text2.length; j += 1) {
      previous[j] = current[j];
      current[j] = 0;
    }
  }

  return previous[text2.length];
}
