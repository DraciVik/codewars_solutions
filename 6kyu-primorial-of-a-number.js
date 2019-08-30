// Definition (Primorial Of a Number)

// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P#.
// Task

// Given a number N , calculate its primorial. !alt !alt
// Notes

//     Only positive numbers will be passed (N > 0) .

// Input >> Output Examples:

// 1- numPrimorial (3) ==> return (30)

// Explanation:

// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
// Mathematically written as , P3# = 30 .

// 2- numPrimorial (5) ==> return (2310)

// Explanation:

// Since the passed number is (5) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 = 2310 .
// Mathematically written as , P5# = 2310 .

// 3- numPrimorial (6) ==> return (30030)

// Explanation:

// Since the passed number is (6) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 * 13 = 30030 .
// Mathematically written as , P6# = 30030 .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function numPrimorial(n) {
        const primeNums = [];
        function isPrime(num) {
                for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
                        if (num % i === 0) return false;
                }
                return num > 1;
        }
        for (let i = 0; i < Infinity; i += 1) {
                if (isPrime(i)) {
                        primeNums.push(i);
                }
                if (primeNums.length === n) {
                        break;
                }
        }
        return primeNums.reduce((cum, val) => cum * val);
}
