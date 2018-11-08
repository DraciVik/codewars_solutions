// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//   Notes:

// Only lower case letters will be used(a - z).No punctuation or digits will be included.
// Performance needs to be considered
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  // Splits the strings into an array of individual characters
  let firstArr = str1.split("");
  let secondArr = str2.split("");
  // Loops trough the entire firstArr
  for (let i = 0; i < firstArr.length; i++) {
    // Loops trough the entire secondArr
    for (let j = 0; j < secondArr.length; j++) {
      // Checks if the current character of the secondArray is a match to the firstArr character
      if (firstArr[i] === secondArr[j]) {
        // If true it removes it from both
        secondArr.splice(j, 1);
        firstArr.splice(i, 1);
        // Because an item in the array has been removed the count needs to go back once
        i--;
        j--;
      }
    }
  }
  // If all the items in the secondArr have been removed then it returns true
  return secondArr.length === 0;
}
// It works but it does not meet the speed criteria

function scramble(world, seed) {
  var obj = {};
  var i = 0;

  for (i = 0; i < world.length; i++) {
    obj[world[i]] = (obj[world[i]] || 0) + 1;
  }

  for (i = 0; i < seed.length; i++) {
    obj[seed[i]] = (obj[seed[i]] || 0) - 1;
    if (obj[seed[i]] < 0) {
      return false;
    }
  }

  return true;
}

//This one works and it meets the speed criteria
