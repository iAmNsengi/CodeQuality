// Implement a JavaScript function to find the sum of all elements in an array recursively.
const sumArray = (arr) =>
  arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));
