// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:

//     Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
//     No letters should return 'z'

// Examples:

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters) {
        const alphabet = '_abcdefghijklmnopqrstuvwxyz';
        if (letters === []) return 'z';
        if (letters.length === 1) return letters[0];
        let sum = 0;
        for (const letter of letters) {
                sum += alphabet.indexOf(letter);
        }
        while (sum > 26) {
                sum -= 26;
        }
        if (sum === 0) return 'z';
        return alphabet[sum];
}
