// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.


function well(x){
    let oneD = x.reduce((acc, cur) => acc.concat(cur)).filter(value => typeof value === "string").map(value => value.toLowerCase());
    if(oneD.indexOf("good") === -1) return "Fail!";
    let good = 0;
    for(let i of oneD) {
      if (i === "good") good += 1;
    }
    if(good <= 2) return "Publish!";
    return "I smell a series!";
}