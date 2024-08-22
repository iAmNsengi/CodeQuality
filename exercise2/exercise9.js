function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (acc, row) => acc + row.reduce((rowSum, value) => rowSum + value, 0),
    0
  );
}