// LC 48 Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const depth = Math.floor(matrix.length / 2);
  for (let i = 0; i < depth; i++) {
    const size = matrix.length - i;
    for (let j = i; j < size - 1; j++) {
      const one = matrix[i][j];
      const two = matrix[j][size - 1];
      const three = matrix[size - 1][matrix.length - 1 - j];
      const four = matrix[matrix.length - 1 - j][i];
      matrix[i][j] = four;
      matrix[j][size - 1] = one;
      matrix[size - 1][matrix.length - 1 - j] = two;
      matrix[matrix.length - 1 - j][i] = three;
    }
  }
};
