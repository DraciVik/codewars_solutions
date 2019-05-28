// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
        const xArr = x.split('');
        return xArr.filter(character => character !== ' ').join('');
}
