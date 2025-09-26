// LC 15 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;
    const target = -sorted[i];
    let l = i + 1;
    let r = sorted.length - 1;
    while (l < r) {
      if (sorted[l] + sorted[r] > target) {
        r--;
      } else if (sorted[l] + sorted[r] < target) {
        l++;
      } else {
        const sortedSet = [sorted[l], sorted[r], sorted[i]].sort(
          (a, b) => a - b
        );
        result[sortedSet] = sortedSet;
        r--;
        l++;
      }
    }
  }
  return Object.values(result);
};
