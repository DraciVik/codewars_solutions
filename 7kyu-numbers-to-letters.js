// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

function switcher(x) {
  let reversedAlphabet = "_zyxwvutsrqponmlkjihgfedcba!? ";
  let result = "";
  for (let letter of x) {
    result += reversedAlphabet[letter];
  }
  return result;
}
