// LC 152 Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, -Infinity);
  let max = 1;
  let min = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = 1;
      min = 1;
      continue;
    }
    const temp = nums[i] * max;
    max = Math.max(nums[i] * max, nums[i] * min, nums[i]);
    min = Math.min(temp, nums[i] * min, nums[i]);
    result = Math.max(result, max);
  }
  return result;
};
