// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37

// Expected output:

// 20
// 30
// 40

const closestMultiple10 = num => {
        let rounded = Math.round(num);
        const numString = String(rounded);
        if (numString[numString.length - 1] < 5) {
                rounded -= numString[numString.length - 1];
        } else {
                rounded += 10 - numString[numString.length - 1];
        }

        return rounded;
};
