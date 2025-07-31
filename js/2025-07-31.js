// LC 33 Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    const leftSorted = nums[left] <= nums[mid];
    const rightSorted = nums[right] >= nums[mid];

    if (leftSorted && rightSorted) {
      if (target < nums[mid]) right = mid - 1;
      if (target > nums[mid]) left = mid + 1;
    }
    if (leftSorted && target >= nums[left] && target < nums[mid])
      right = mid - 1;
    if (rightSorted && target <= nums[right] && target > nums[mid])
      left = mid + 1;
    if (!leftSorted) right = mid - 1;
    if (!rightSorted) left = mid + 1;
  }
  return -1;
};
