// Definition

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     Number passed is always Positive .

//     Return the result as String .

//     The difference between ‘9’ and ‘0’ is not considered as 1 .

//     All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples

// 1- jumpingNumber(9) ==> return "Jumping!!"

// Explanation:

//     It's single-digit number

// 2- jumpingNumber(79) ==> return "Not!!"

// Explanation:

//     Adjacent digits don't differ by 1

// 3- jumpingNumber(23) ==> return "Jumping!!"

// Explanation:

//     Adjacent digits differ by 1

// 4- jumpingNumber(556847) ==> return "Not!!"

// Explanation:

//     Adjacent digits don't differ by 1

// 5- jumpingNumber(4343456) ==> return "Jumping!!"

// Explanation:

//     Adjacent digits differ by 1

// 6- jumpingNumber(89098) ==> return "Not!!"

// Explanation:

//     Adjacent digits don't differ by 1

// 7- jumpingNumber(32) ==> return "Jumping!!"

// Explanation:

//     Adjacent digits differ by 1

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
function jumpingNumber(n) {
        const nArrayString = String(n).split('');
        const nArray = nArrayString.map(value => Number(value));
        if (nArray.length === 1) {
                return 'Jumping!!';
        }
        if (nArray.length === 2) {
                if (Math.abs(nArray[0] - nArray[1]) !== 1) {
                        return 'Not!!';
                }
                return 'Jumping!!';
        }
        for (let i = 1; i < nArray.length; i += 1) {
                if (Math.abs(nArray[i] - nArray[i - 1]) !== 1) {
                        return 'Not!!';
                }
        }
        return 'Jumping!!';
}
