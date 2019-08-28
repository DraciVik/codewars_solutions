// Pair of gloves

// Winter is comming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// A pair of gloves is constituted of two gloves of the same color.

// You are given an array containing the color of each glove.

// You must return the number of pair you can constitute.

// You must not change the input array.

// Example :

// let myGloves = ['red','green','red','blue','blue'];
// numberOfPairs(myGloves) == 2;// red and blue

// let redGloves = ['red','red','red','red','red','red'];
// numberOfPairs(redGloves) == 3; // 3 red pairs

function numberOfPairs(gloves) {
        const cache = {};
        let count = 0;
        for (let i = 0; i < gloves.length; i += 1) {
                if (cache[gloves[i]] === 1) {
                        count += 1;
                        cache[gloves[i]] = 0;
                } else if (cache[gloves[i]] === 0) {
                        cache[gloves[i]] += 1;
                } else {
                        cache[gloves[i]] = 1;
                }
        }
        return count;
}
