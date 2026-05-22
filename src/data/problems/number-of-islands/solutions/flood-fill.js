function numIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  function sink(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] !== "1"
    ) {
      return;
    }

    grid[row][col] = "0";
    sink(row + 1, col);
    sink(row - 1, col);
    sink(row, col + 1);
    sink(row, col - 1);
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === "1") {
        islands += 1;
        sink(row, col);
      }
    }
  }

  return islands;
}
