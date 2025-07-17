// LC 70 Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */

// Functionally correct recursive approach that times out for larger inputs
// Time Complexity: O(2^n)
// Space Complexity: O(n) due to recursion stack
var climbStairs = function (n) {
  let result = 0;
  const recurse = (curr) => {
    if (curr > n) return;
    if (curr === n) result++;
    for (let i = 1; i < 3; i++) {
      curr += i;
      recurse(curr);
      curr -= i;
    }
  };
  recurse(0);
  return result;
};

// DP Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[dp.length - 1];
};
