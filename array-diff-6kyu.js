// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
        // goes trough all the items in array "a"
        for (let i = 0; i < a.length; i++) {
                // goes trough all the items in array "b"
                for (let j = 0; j < b.length; j++) {
                        // checks if current item in array "a" is the same as item in array "b"
                        if (a[i] === b[j]) {
                                // if true it removes it from array "a"
                                a.splice(i, 1);
                                // because the item is removed the count for "i" needs to be set back one item
                                i--;
                        }
                }
        }
        return a;
}
