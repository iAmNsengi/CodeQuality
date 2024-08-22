function calculateAverage(numbers) {
  // using reduce to get the addition of all the numbers and divide them the array length for the average
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
