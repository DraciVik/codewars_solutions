// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
        const newArr = [];
        newArr.push(arr[0]);
        for (let i = 2; i < arr.length; i += 2) {
                newArr.push(arr[i]);
        }
        return newArr;
}
