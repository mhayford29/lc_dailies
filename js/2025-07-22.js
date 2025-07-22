// LC 322 Coin Change

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    let curr = Infinity;
    for (let j = 0; j < coins.length; j++) {
      const dpIndex = i - coins[j];
      if (dpIndex < 0) continue;
      curr = Math.min(dp[dpIndex] + 1, curr);
    }
    dp.push(curr);
  }
  const result = dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
  return result;
};
