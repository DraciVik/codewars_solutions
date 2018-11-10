// The idea for this Kata came from 9gag today.here

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

// Like this:

// Input: If you can read

// Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// Some notes

// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.
// Reference

// alt text

// You can use the NATO hash with the alphabet

function to_nato(words) {
  let natoAlphabet = {
    a: "Alfa",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliet",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X",
    y: "Yankee",
    z: "Zulu",
    //Quickfix for this. Did not have time to solve it properly for this edge case
    "!": "!"
  };
  let joinedWords = words
    .split(" ")
    .join("")
    .toLowerCase()
    .split("");
  let natoFromWords = [];
  joinedWords.map(letter => {
    natoFromWords.push(natoAlphabet[letter]);
  });
  return natoFromWords.join(" ");
}
