// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false

// Note :

//     capital X's do not count as an occurrence of "x".
//     if there are no "x"'s then return false

function tripleX(str) {
        let oneX;
        for (let i = 0; i < str.length; i += 1) {
                if (str[i] === 'x') {
                        oneX = i;
                        break;
                }
        }
        return str[oneX + 1] === 'x' && str[oneX + 2] === 'x';
}
