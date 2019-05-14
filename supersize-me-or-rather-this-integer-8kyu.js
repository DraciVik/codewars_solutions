// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21

// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(num) {
        // Converts the number to a string and splits it into an array
        const numStringArray = num.toString().split('');
        // Converts each string number to an array
        const numArray = numStringArray.map(number => Number(number));
        // Sorts the numbers from lowest to highest
        const sortedArray = numArray.sort((a, b) => a - b);
        // Reverses the array, concatenates it and turns it into a number
        return Number(sortedArray.reverse().join(''));
}
