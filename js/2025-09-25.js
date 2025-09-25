// LC 120 Triangle

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = [[triangle[0][0]]];
  for (let i = 1; i < triangle.length; i++) {
    const currLevel = [];
    for (let j = 0; j < triangle[i].length; j++) {
      let newVal;
      if (j === 0) {
        // Left edge
        newVal = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        // Right edge
        newVal = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        newVal = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      }
      currLevel.push(newVal);
    }
    dp.push(currLevel);
  }

  return dp[dp.length - 1].reduce(
    (curr, acc) => (curr < acc ? curr : acc),
    Infinity
  );
};
