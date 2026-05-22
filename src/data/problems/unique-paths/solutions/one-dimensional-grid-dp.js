function uniquePaths(m, n) {
  const row = Array(n).fill(1);

  for (let r = 1; r < m; r += 1) {
    for (let c = 1; c < n; c += 1) {
      row[c] += row[c - 1];
    }
  }

  return row[n - 1];
}
