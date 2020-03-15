// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

//     Example:

// "hel2!lo" -- > 6

// "wicked .. !" -- > 6

// "!?..A" -- > 1

function countLettersAndDigits(input) {
  const digits = /[0-9]/gi;
  const letters = /[a-zA-Z]/gi;

  const foundDigits = input.match(digits);
  const foundLetters = input.match(letters);

  console.log(foundDigits, foundLetters);

  let digitsLength = 0;
  let lettersLength = 0;

  if (foundDigits) {
    digitsLength = foundDigits.length;
  }
  if (foundLetters) {
    lettersLength = foundLetters.length;
  }

  return digitsLength + lettersLength;
}
