// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
        const wordsArr = s.split(' ');
        return wordsArr.reduce((cum, cur) => {
                if (cum.length < cur.length) {
                        return cum;
                }
                return cur;
        }).length;
}
