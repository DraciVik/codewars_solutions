// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Description:

// What's a reversible prime? That is: A prime, reverse all the digits, get a new number. If the new number is also a prime, then it is a reversible prime .

// We can get a sequence of reversible prime:

//  n(start from 0)  --> 0 1 2 3 4  5  6  7  8  .....
//  reversible prime --> 2 3 5 7 11 13 17 31 37 .....

// Task

// Complete function reversiblePrime. Function accept argument n(a integer, 0 <= n <= 10000). Returns the n-th reversible prime.
// Some examples:

// reversiblePrime(0) === 2

// reversiblePrime(1) === 3

// reversiblePrime(5) === 13

// reversiblePrime(10) === 73

// reversiblePrime(20) === 167

// reversiblePrime(100) === 1669

function reversiblePrime(n) {
        // 1. reverse a number
        function reverseNum(num) {
                return Number(
                        String(num)
                                .split('')
                                .reverse()
                                .join('')
                );
        }
        // 2. check if a num is a prime are primes;
        function isPrime(num) {
                for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
                        if (num % i === 0) return false;
                }
                return num > 1;
        }
        // 3. return the n-th prime;
        let count = -1;

        for (let i = 2; i < Infinity; i += 1) {
                if (isPrime(i)) {
                        const reversed = reverseNum(i);
                        if (isPrime(reversed)) {
                                count += 1;
                        }
                }
                if (count === n) return i;
        }
}
