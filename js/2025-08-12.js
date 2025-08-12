// LC 703 Kth Largest Element in a Stream

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  const queue = PriorityQueue.fromArray(nums, (a, b) => a - b);
  while (queue.size() > this.k) {
    queue.dequeue();
  }
  this.minQueue = queue;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minQueue.enqueue(val);
  if (this.minQueue.size() > this.k) {
    this.minQueue.dequeue();
  }
  return this.minQueue.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
