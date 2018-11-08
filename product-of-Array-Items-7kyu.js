// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

/*
  Returns product of all numbers in a numeric array.
  Returns null if param is null or array is empty.
  @param {Array} values - The array containing the items.
 */

function product(values) {
  // checking if the array is null or if it's empty
  if (values === null || values.length == 0) {
    return null;
  } else {
    let hello = values.reduce((x, y) => x * y); // Multiplies each item in an array and returns the product of that multiplication
    return hello;
  }
}
