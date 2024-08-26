// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

const fibonacciSequence = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return Array.from({ length: n }, (el, i) => i)
    .reduce(
      (sequence) => {
        const nextValue =
          sequence.length < 2
            ? sequence.length
            : sequence[sequence.length - 1] + sequence[sequence.length - 2];
        return nextValue > n ? sequence : [...sequence, nextValue];
      },
      [0, 1]
    )
    .filter((num) => num <= n);
};