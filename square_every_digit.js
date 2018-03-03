/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
  //may the code be with you
  //Splits the number to individual itegers and assigns them as strings in an array
  let numArray = num.toString().split("");
  let result = "";
  //Changes every number that is stored as a string into an integer and returns the square of every digit and then stores it into the result variable as a string
  for (let i = 0; i < numArray.length; i++){
     result += parseInt(numArray[i]) * parseInt(numArray[i]);
}
//Changes the result variable into a number
    return Number(result);
}
