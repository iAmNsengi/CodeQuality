// Write a JavaScript function to check if a given number is prime or not.
const checkPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  // Create an array from 2 to the square root of num
  const factors = Array.from(
    { length: Math.floor(Math.sqrt(num)) - 1 },
    (el, i) => i + 2
  );
  return factors.every((i) => num % i !== 0);
};
