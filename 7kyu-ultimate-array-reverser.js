// Task

// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
// Example:

// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

// Good luck!

const ultimateReverse = s => {
        const resultArray = [];
        let str = s
                .join('')
                .split('')
                .reverse()
                .join('');
        for (let i = 0; i < s.length; i += 1) {
                resultArray.push(str.slice(0, s[i].length));
                str = str.slice(s[i].length);
        }
        return resultArray;
};
