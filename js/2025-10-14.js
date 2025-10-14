// LC 3349 Adjacent Increasing Subarrays Detection I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
  let curr = 0;
  const lengths = [1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      lengths[curr]++;
    } else {
      lengths.push(1);
      curr++;
    }
  }
  if (lengths[0] >= k * 2) return true;
  for (let i = 1; i < lengths.length; i++) {
    if (lengths[i] >= k * 2) return true;
    if (lengths[i - 1] >= k && lengths[i] >= k) return true;
  }
  return false;
};
