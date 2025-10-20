// LC 2011 Final Value of Variable After Performing Operations

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].startsWith("++") || operations[i].endsWith("++")) {
      result++;
    }
    if (operations[i].startsWith("--") || operations[i].endsWith("--")) {
      result--;
    }
  }
  return result;
};
