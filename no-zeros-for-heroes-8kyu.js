// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
        const nString = n.toString().split('');
        for (let i = 0; i <= nString.length; i += 1) {
                if (nString[nString.length - 1] === '0') {
                        nString.pop();
                }
        }
        return Number(nString.join(''));
}
