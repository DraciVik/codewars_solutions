// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function missingLetter(arr) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newArr;
    if (arr[0] === arr[0].toLowerCase()) {
        newArr = arr.map(value => value.toLowerCase());
    } else {
        newArr = arr.map(value => value.toUpperCase());
        alphabet = alphabet.toUpperCase();
    }

    let startingIndex = alphabet.indexOf(newArr[0]);

    for (let i = 1; i < newArr.length; i += 1) {
        if (newArr[i] !== alphabet[startingIndex + 1]) return alphabet[startingIndex + 1];
        startingIndex += 1;
    }

}
