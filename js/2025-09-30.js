// LC 2221 Find Triangular Sum of Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  let prev = nums;
  while (prev.length > 1) {
    const curr = [];
    for (let j = 1; j < prev.length; j++) {
      curr.push((prev[j] + prev[j - 1]) % 10);
    }
    prev = curr;
  }
  return prev[0];
};
