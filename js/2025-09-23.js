// LC 165 Compare Version Numbers

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const numArr1 = version1.split(".").map((numStr) => {
    return Number(numStr);
  });
  const numArr2 = version2.split(".").map((numStr) => {
    return Number(numStr);
  });

  let i = 0;
  while (i < numArr1.length || i < numArr2.length) {
    if (!numArr1[i] && numArr2[i] > 0) return -1;
    if (numArr1[i] > 0 && !numArr2[i]) return 1;
    if (numArr1[i] > numArr2[i]) return 1;
    if (numArr1[i] < numArr2[i]) return -1;
    i++;
  }

  return 0;
};
