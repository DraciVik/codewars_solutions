// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
        const xRegex = /x/gi;
        const oRegex = /o/gi;
        const xCount = str.match(xRegex);
        const oCount = str.match(oRegex);
        return (xCount && xCount.length) === (oCount && oCount.length);
}
