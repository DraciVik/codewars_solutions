// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.If you have an empty array, you need to return it.

//   Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  // Return a sorted array.
  // First it checks if the array is emtpy and returns it if it is
  if (array.length === 0) {
    return array;
  }
  // Saves the pair numbers in this array
  let arrOfPair = [];
  // Saves the odd numbers in this array
  let arrOfOdds = [];
  for (let i = 0; i < array.length; i++) {
    // if the value is not an odd number it pushes the index number at the arrOfPair
    if (array[i] % 2 === 0) {
      arrOfPair.push(i);
      // if the value is an odd number it pushes the index number at the arrOfOdd
    } else if (array[i] % 2 !== 0) {
      arrOfOdds.push(array[i]);
    }
  }
  // Sorts the items in arrOfOdd
  arrOfOdds.sort(function (a, b) { return a - b });
  for (let i = 0; i < arrOfPair.length; i++) {
    // Inserts the even numbers at the appropriate index in the arrOfOdds
    arrOfOdds.splice(arrOfPair[i], 0, array[arrOfPair[i]]);
  }
  return arrOfOdds;
}