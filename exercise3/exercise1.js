// Write a function(s) that checks the level of nesting of an array.
// Then, use that function to flatten the array into a single - dimensional array.
const getNestingLevel = (arr) =>
  !Array.isArray(arr) ? 0 : 1 + Math.max(0, ...arr.map(getNestingLevel));

const flattenArray = (arr) => arr.flat(Infinity);