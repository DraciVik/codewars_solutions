// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
        return (
                arr.filter(function(value) {
                        // If the value is present only once then the first index and the last index of that value will be the same number
                        return arr.indexOf(value) === arr.lastIndexOf(value);
                })[0] || 0
        );
}
