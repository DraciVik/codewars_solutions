// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// In C: do not dynamically allocate memory,
//       instead return a string leteral

function well(x){
    if(x.indexOf("good") === -1) return "Fail!";
    let good = 0;
    for(let i of x) {
      if (i === "good") good += 1;
    }
    if(good <= 2) return "Publish!";
    return "I smell a series!";
}