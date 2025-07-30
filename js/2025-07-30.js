// LC 55 Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goalIndex = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goalIndex) {
      goalIndex = i;
    }
  }
  return goalIndex === 0;
};
