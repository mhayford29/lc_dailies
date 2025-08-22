// LC 1046 Last Stone Weight

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxQueue = PriorityQueue.fromArray(stones, (a, b) => b - a);
  while (maxQueue.size() > 1) {
    const large = maxQueue.dequeue();
    const small = maxQueue.dequeue();
    maxQueue.enqueue(large - small);
  }
  return maxQueue.front();
};
