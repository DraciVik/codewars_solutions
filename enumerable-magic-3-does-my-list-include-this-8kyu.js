// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  // If it's part of the array it will return the index number of it. If it's not it'll return -1
  return arr.indexOf(item) >= 0;
}