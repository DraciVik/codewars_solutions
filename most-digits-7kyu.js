// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  // Creates a new array of the length of the digits;
  let arrOfLengths = array.map(value => {
    return value.toString().split("").length;
  });

  let index = 0;
  let length = arrOfLengths[0];
  // if the current value of arrOfLengths has a bigger count of digits the index is applied a new value so we know the order of it in the original array
  for (let i = 0; i < arrOfLengths.length; i++) {
    if (arrOfLengths[i] > length) {
      length = arrOfLengths[i];
      index = i;
    }
  }
  return array[index];
}
