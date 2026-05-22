function numIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let islands = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] !== "1") continue;

      islands += 1;
      grid[row][col] = "0";
      const queue = [[row, col]];

      for (let i = 0; i < queue.length; i += 1) {
        const [currentRow, currentCol] = queue[i];

        for (const [dr, dc] of directions) {
          const nextRow = currentRow + dr;
          const nextCol = currentCol + dc;

          if (
            nextRow < 0 ||
            nextRow >= rows ||
            nextCol < 0 ||
            nextCol >= cols ||
            grid[nextRow][nextCol] !== "1"
          ) {
            continue;
          }

          grid[nextRow][nextCol] = "0";
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }

  return islands;
}
