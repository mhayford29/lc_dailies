/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumLength = function (nums) {
  let result = 0;
  const patterns = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  for (const pattern of patterns) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === pattern[count % 2]) {
        count++;
      }
    }
    result = Math.max(result, count);
  }
  return result;
};
