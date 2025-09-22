// LC 3005 Count Elements With Maximum Frequency

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  const reduced = Object.entries(map).reduce((acc, curr) => {
    if (!acc.length) return [curr];
    if (acc[0][1] > curr[1]) return acc;
    if (acc[0][1] < curr[1]) return [curr];
    return [...acc, curr];
  }, []);

  return reduced.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);
};
