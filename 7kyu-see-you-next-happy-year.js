// Scenario

// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018
// Task

// Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt
// Notes

//     Year Of Course always Positive .
//     Have no fear , It is guaranteed that the answer exists .
//     It's not necessary that the year passed to the function is Happy one .
//     Input Year with in range (1000  ≤  y  ≤  9000)

// Input >> Output Examples:

// nextHappyYear (7712) ==> return (7801)

// Explanation:

// As the Next closest year with only distinct digits is 7801 .

// nextHappyYear (8989) ==> return (9012)

// Explanation:

// As the Next closest year with only distinct digits is 9012 .

// nextHappyYear (1001) ==> return (1023)

// Explanation:

// As the Next closest year with only distinct digits is 1023 .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function nextHappyYear(year) {
        const yearArray = String(year).split('');
        const numYearArray = yearArray.map(value => Number(value));
        for (let i = yearArray.length; i >= 0; i -= 1) {
                while (numYearArray.indexOf(numYearArray[i]) !== numYearArray.lastIndexOf(numYearArray[i])) {
                        numYearArray[i] += 1;
                }
        }
}
