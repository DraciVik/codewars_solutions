// You will receive a string consisting of lowercase letters, uppercase letters and digits as input. Your task is to return this string as blocks separated by dashes ("-"). The elements of a block should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple instances of the same character.

// The hierarchy is:

//     lowercase letters (a - z), in alphabetic order
//     uppercase letters (A - Z), in alphabetic order
//     digits (0 - 9), in ascending order

// Examples

//     "21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
//     "abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
//     "" -> "" - an empty input should result in an empty output

function blocks(s) {
  if (s === "" || typeof s !== "string") {
    return "";
  }
  let sArr = s.split("");
  let lowerCase = sArr
    .filter(value => {
      if (isNaN(Number(value))) {
        return value === value.toLowerCase();
      }
    })
    .sort();
  let upperCase = sArr
    .filter(value => {
      if (isNaN(Number(value))) {
        return value === value.toUpperCase();
      }
    })
    .sort();
  let nums = sArr.filter(value => value == Number(value)).sort();
  return [...lowerCase, ...upperCase, ...nums].join("");
}

// TODO - Finish
