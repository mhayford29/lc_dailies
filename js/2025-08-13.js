// LC 215 Kth Largest Element in an Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minQueue = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    minQueue.enqueue(nums[i]);
    if (minQueue.size() > k) minQueue.dequeue();
  }
  return minQueue.front();
};
