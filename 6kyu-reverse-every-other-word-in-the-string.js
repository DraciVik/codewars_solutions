// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

function reverse(str) {
        const trimmedStr = str.trim();
        function reversedStr(value) {
                return value
                        .split('')
                        .reverse()
                        .join('');
        }
        const splitStr = trimmedStr.split(' ');
        const secondWordReversed = splitStr.map((value, index) => {
                if (index % 2 !== 0) {
                        return reversedStr(value);
                }
                return value;
        });
        return secondWordReversed.join(' ');
}
