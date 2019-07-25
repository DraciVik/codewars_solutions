// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
        for (let i = 0; i < A.length; i += 1) {
                const thisNumber = A.filter(value => value === A[i]);
                if (thisNumber.length % 2 !== 0) {
                        return A[i];
                }
        }
}
