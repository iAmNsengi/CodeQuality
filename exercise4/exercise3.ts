/**
 * Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

In Roman numerals:

1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.
Example:

   1 -->       "I"
1000 -->       "M"
1666 --> "MDCLXVI"
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
 */
const integerToRoman = (num: number): string => {
  if (num < 1 || num > 3999) {
    return "Input must be between 1 and 3999";
  }

  const romanNumerals: { value: number; toRoman: string }[] = [
    { value: 1000, toRoman: "M" },
    { value: 900, toRoman: "CM" },
    { value: 500, toRoman: "D" },
    { value: 400, toRoman: "CD" },
    { value: 100, toRoman: "C" },
    { value: 90, toRoman: "XC" },
    { value: 50, toRoman: "L" },
    { value: 40, toRoman: "XL" },
    { value: 10, toRoman: "X" },
    { value: 9, toRoman: "IX" },
    { value: 5, toRoman: "V" },
    { value: 4, toRoman: "IV" },
    { value: 1, toRoman: "I" },
  ];

  return romanNumerals
    .map(({ value, toRoman }) => {
      const count = Math.floor(num / value);
      num %= value;
      return toRoman.repeat(count);
    })
    .join("");
};

console.log(integerToRoman(499));

