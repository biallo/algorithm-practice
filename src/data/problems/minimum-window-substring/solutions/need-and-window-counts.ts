function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();

  for (const char of t) {
    need.set(char, (need.get(char) ?? 0) + 1);
  }

  const window = new Map<string, number>();
  let have = 0;
  let left = 0;
  let bestStart = 0;
  let bestLength = Infinity;

  for (let right = 0; right < s.length; right += 1) {
    const char = s[right];
    window.set(char, (window.get(char) ?? 0) + 1);

    if (need.has(char) && window.get(char) === need.get(char)) {
      have += 1;
    }

    while (have === need.size) {
      if (right - left + 1 < bestLength) {
        bestStart = left;
        bestLength = right - left + 1;
      }

      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar)! - 1);

      if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
        have -= 1;
      }

      left += 1;
    }
  }

  return bestLength === Infinity
    ? ""
    : s.slice(bestStart, bestStart + bestLength);
}
