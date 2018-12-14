// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  let numberArr = [];
  for (let i = 0; i < l.length; i++) {
    // Checks if the value is a positive integer
    if (l[i] >= 0) {
      // checks if the value is not a string
      if (typeof l[i] !== "string") {
        numberArr.push(l[i]);
      }
    }
  }
  return numberArr;
}

function filter_list(l) {
  return l.filter(a => {
    //filters values that are not positive integers and are strings
    return a >= 0 && typeof a !== "string";
  });
}

function getUsersIds(str) {
  let newArr = str.toLowerCase().split(", ");
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] === "#") {
        newArr[i].splice(j, 1);
      }
    }
    newArr[i].splice(0, 2);
  }
  return newArr;
}
