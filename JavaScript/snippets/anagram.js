// Given two strings, return true if they are anagrams of one another

let firstWord = "Mary";
let secondWord = "Army";


function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  console.log(a, b);

  return a === b;
}

console.log(isAnagram(firstWord, secondWord)); // true