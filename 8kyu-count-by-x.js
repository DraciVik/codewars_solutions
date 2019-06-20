// Create a function with two arguments that will return a list of length (n) with multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
        const z = [];
        let num = x;
        for (let i = 0; i < n; i += 1) {
                z.push(num);
                num += x;
        }

        return z;
}
