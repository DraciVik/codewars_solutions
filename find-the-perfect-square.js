// You might know some pretty large perfect squares.But what about the NEXT one ?

//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than - 1 should be returned.You may assume the parameter is positive.

//   Examples:

// findNextSquare(121)-- > returns 144
// findNextSquare(625)-- > returns 676
// findNextSquare(114)-- > returns - 1 since 114 is not a perfect

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  // Assign the value of the square root to a variable
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    //Check if the square root of a number is an integer
    sqrt++; //Increase the value of the squared root by 1
    return sqrt * sqrt; //multiply the square root by itself to get the next integral perfect square
  }
  return -1;
}
