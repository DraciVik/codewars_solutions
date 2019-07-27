// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5)

// should return

// [5, 10, 15]

function multiples(m, n) {
        let i = 1;
        const myArr = [];

        while (i <= m) {
                myArr.push(n * i);
                i += 1;
        }
        return myArr;
}
