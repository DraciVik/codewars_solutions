// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""

function formatWords(words) {
  var cleanedArr = words.map(function(word) {
    if (word === [] || null) {
      return "";
    }
    if (word === "") {
      words.splice(words.indexOf(word), 1);
    }
    return word;
  });
  cleanedArr[0] = cleanedArr[0] + ",";
  cleanedArr.splice(cleanedArr.length - 1, 0, "and");
  return cleanedArr.join(" ");
}
// TODO
// Fix semicolon to insert if array is longer than 2 items.
//Codewars shows an error because of map. Rewrite in ES5 with a for loop
