function generateRange(min, max, step) {
  let arrOfSteps = [];
  for (let i = min; i <= max; i += step) {
    if (i > max) {
      return;
    }
    arrOfSteps.push(i);
  }
  return arrOfSteps;
}
