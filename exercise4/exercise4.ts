/**
 *In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
 */

const reverseVowelsOnly = (text: string): string => {
  const vowelsFromText = [...text].filter((el) =>"aeiou".includes(el.toLowerCase()));
  return [...text].map((el) =>
      "aeiou".includes(el.toLowerCase()) ? vowelsFromText.shift() : el).join("");
};
