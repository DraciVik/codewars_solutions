// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
        const reversedAndSplit = str.split(' ').reverse();
        const mapped = reversedAndSplit.map(entry => {
                const split = entry.split('');
                for (let i = 0; i < split.length; i += 1) {
                        if (split[i] === split[i].toUpperCase()) {
                                split[i] = split[i].toLowerCase();
                        } else {
                                split[i] = split[i].toUpperCase();
                        }
                }
                return split.join('');
        });
        return mapped.join(' ');
}
