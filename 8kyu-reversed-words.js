// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"

function reverseWords(str) {
        return str
                .split(' ')
                .reverse()
                .join(' '); // reverse those words
}
