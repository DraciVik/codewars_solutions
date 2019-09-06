// Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

// Example:

// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// highestRank(arr) //=> returns 12

// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
// highestRank(arr) //=> returns 12

// arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
// highestRank(arr) //=> returns 3

function highestRank(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = 0;
    let length = 0;
    for (let i = 0; i < sorted.length; i += 1) {
        if (sorted.lastIndexOf(sorted[i]) - sorted.indexOf(sorted[i]) > length) {
            result = sorted[i];
            length = sorted.lastIndexOf(sorted[i]) - sorted.indexOf(sorted[i])
            i = sorted.lastIndexOf(sorted[i]);
        } else if (sorted.lastIndexOf(sorted[i]) - sorted.indexOf(sorted[i]) === length) {
            result > sorted[i] ? result = result : result = sorted[i];
            i = sorted.lastIndexOf(sorted[i]);
        }
    }
    return result;
}