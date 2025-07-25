// LC 417 Pacific Atlantic Water Flow

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const memo = {};
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length; j++) {
      if (bfs(i, j, heights, memo)) {
        memo[`${i},${j}`] = [i, j];
      }
    }
  }
  return Object.values(memo);
};

const bfs = (i, j, heights, memo) => {
  const visited = {};
  let pacific = false;
  let atlantic = false;
  const neighbors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = new Queue();
  queue.enqueue([i, j]);
  while (queue.size()) {
    const [currRow, currCol] = queue.pop();
    if (memo[`${currRow},${currCol}`]) return true;
    visited[`${currRow},${currCol}`] = true;

    for (const neighbor of neighbors) {
      const newRow = currRow + neighbor[0];
      const newCol = currCol + neighbor[1];
      if (visited[`${newRow},${newCol}`]) continue;

      if (newRow < 0 || newCol < 0) {
        pacific = true;
        if (pacific && atlantic) return true;
        continue;
      }

      if (newRow >= heights.length || newCol >= heights[0].length) {
        atlantic = true;
        if (pacific && atlantic) return true;
        continue;
      }

      if (heights[newRow][newCol] > heights[currRow][currCol]) continue;

      queue.enqueue([newRow, newCol]);
    }
  }
  return false;
};
