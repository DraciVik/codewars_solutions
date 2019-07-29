// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function(text) {
        // Implement me!
        const myArr = [];
        const arrFromText = Array.from(text);
        const noDuplicates = arrFromText.filter((value, index, self) => self.indexOf(value) === index);
        for (const value of noDuplicates) {
                const regex = new RegExp(value, 'g');

                myArr.push([value, text.match(regex).length]);
        }
        return myArr;
};
