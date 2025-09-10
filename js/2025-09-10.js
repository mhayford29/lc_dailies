// LC 62 Unique Paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = 1;
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
