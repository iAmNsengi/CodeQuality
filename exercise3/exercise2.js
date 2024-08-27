// Write a JavaScript function to check if a given number is prime or not.
const checkPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  return [...new Array(Math.floor(Math.sqrt(num)) - 1)].map((el, i) => i + 2)
    .every((i) => num % i !== 0);
};