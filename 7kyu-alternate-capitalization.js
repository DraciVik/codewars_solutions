// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s) {
        const lower = s.toUpperCase().split('');
        const higher = s.split('');

        for (let i = 0; i < s.length; i += 1) {
                if (i % 2 === 0) {
                        lower[i] = lower[i].toLowerCase();
                        higher[i] = higher[i].toUpperCase();
                }
        }
        return [higher.join(''), lower.join('')];
}
