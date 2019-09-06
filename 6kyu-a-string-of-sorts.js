// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

// sortString("foos", "of")       => "oofs"

// sortString("string", "gnirts") => "gnirts"

// sortString("banana", "abn")    => "aaabnn"

// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

// Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

function sortString(string, ordering) {

    let strArr = string.split("");
    let newArr = [];
    let ordered = [];

    for (let i = 0; i < ordering.length; i += 1) {
        let filtered = strArr.filter(value => value === ordering[i]);
        ordered = ordered.concat(filtered);
        strArr = strArr.filter(value => value !== ordering[i])
    }
    ordered = ordered.concat(strArr);

    return ordered.join("");

}

const a = [1, 2, 3, 4, 5];

a.multiply = function () {
    this = this.concat(this.map(value => value ** 2));
    return this;
}


a.multiply();