// LC 153 Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid + 1] && nums[mid - 1]) {
      if (nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1])
        return nums[mid];
    }
    const leftSorted = nums[mid] >= nums[left];
    const rightSorted = nums[mid] <= nums[right];
    if (leftSorted && rightSorted) return nums[left];
    if (!leftSorted) right = mid - 1;
    if (!rightSorted) left = mid + 1;
  }
};
