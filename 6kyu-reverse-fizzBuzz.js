// FizzBuzz is often one of the first programming puzzle people learn. Now undo it with reverse FizzBuzz!

// Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

// Notes:

//     If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
//     All numbers in the sequence will be greater than zero.
//     You will never receive an empty sequence.

// Examples

// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

function reverseFizzBuzz(s) {
        // 1. split string
        const sToArr = s.split(' ');
        // 2. check if the entry is a number or a string and act accordingly
        for (let i = 0; i < sToArr.length; i += 1) {
                if (isNaN(sToArr[i])) {
                        if (sToArr[i] === 'Fizz' && sToArr[i + 1] === 'Buzz') {
                                if (sToArr.length > 2) {
                                        if (sToArr.length - i === 2) {
                                                sToArr[i] = sToArr[i - 1] + 1;
                                                sToArr[i + 1] = sToArr[i - 1] + 2;
                                                continue;
                                        } else {
                                                sToArr[i] = sToArr[i + 2] - 2;
                                                sToArr[i + 1] = sToArr[i + 2] - 1;
                                                continue;
                                        }
                                }
                                sToArr[i] = 9;
                                sToArr[i + 1] = 10;
                                continue;
                        } else if (sToArr[i] == 'Buzz' && sToArr[i + 1] == 'Fizz') {
                                if (sToArr.length > 2) {
                                        if (sToArr.length - i === 2) {
                                                sToArr[i] = sToArr[i - 1] + 1;
                                                sToArr[i + 1] = sToArr[i - 1] + 2;
                                                continue;
                                        } else {
                                                sToArr[i] = sToArr[i + 2] - 2;
                                                sToArr[i + 1] = sToArr[i + 2] - 1;
                                                continue;
                                        }
                                }
                                sToArr[i] = 5;
                                sToArr[i + 1] = 6;
                                continue;
                        } else if (sToArr[i] === 'Fizz' && sToArr.length === 1) {
                                sToArr[i] = 3;
                                continue;
                        } else if (sToArr[i] === 'Buzz' && sToArr.length === 1) {
                                sToArr[i] = 5;
                                continue;
                        } else if (sToArr[i] === 'FizzBuzz' && sToArr.length === 1) {
                                sToArr[i] = 15;
                                continue;
                        } else if (i === 0) {
                                sToArr[i] = Number(sToArr[i + 1]) - 1;
                                continue;
                        } else {
                                sToArr[i] = Number(sToArr[i - 1]) + 1;
                        }
                }
                sToArr[i] = Number(sToArr[i]);
        }
        return sToArr;
}
