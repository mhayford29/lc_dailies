// LC 1143 Longest Common Subsequence

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length)
    .fill()
    .map(() => new Array(text2.length).fill(0));

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      const left = j - 1 >= 0 ? dp[i][j - 1] : 0;
      const up = i - 1 >= 0 ? dp[i - 1][j] : 0;
      const upLeft = j - 1 >= 0 && i - 1 >= 0 ? dp[i - 1][j - 1] : 0;
      if (text1[i] === text2[j]) {
        dp[i][j] = upLeft + 1;
      } else {
        dp[i][j] = Math.max(left, up);
      }
    }
  }
  return dp[text1.length - 1][text2.length - 1];
};
