// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let numOfSheep = arrayOfSheep
    // New arr only from the sheeps
    .filter(sheep => sheep === true)
    // Turns every value to 1
    .map(sheep => (sheep = 1))
    // Sums all 1
    .reduce((acum, score) => acum + score, 0);
  return numOfSheep;
}

// or just use .filter(Boolean).length
