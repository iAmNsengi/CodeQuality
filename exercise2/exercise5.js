function calculateFactorial(n) {
  // using recursive method
  return n === 0 || n === 1 ? 1 : n * calculateFactorial(n - 1);
}
