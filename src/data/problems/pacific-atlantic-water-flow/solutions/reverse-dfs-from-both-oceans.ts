function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(row: number, col: number, ocean: boolean[][]): void {
    ocean[row][col] = true;

    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;

      if (
        nextRow < 0 ||
        nextRow >= rows ||
        nextCol < 0 ||
        nextCol >= cols ||
        ocean[nextRow][nextCol] ||
        heights[nextRow][nextCol] < heights[row][col]
      ) {
        continue;
      }

      dfs(nextRow, nextCol, ocean);
    }
  }

  for (let row = 0; row < rows; row += 1) {
    dfs(row, 0, pacific);
    dfs(row, cols - 1, atlantic);
  }

  for (let col = 0; col < cols; col += 1) {
    dfs(0, col, pacific);
    dfs(rows - 1, col, atlantic);
  }

  const result: number[][] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
}
