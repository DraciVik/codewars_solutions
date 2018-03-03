/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
*/

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;
  let catI = 0;
  let dogI = 0;
  if (humanYears === 1) {
    catYears = 1 * 15;
    dogYears = 1 * 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else if ( humanYears > 2) {
        catYears = 24;
        for(catI = 3; catI <= humanYears; catI++) {
           catYears += 4;
        };
        dogYears = 24
        for(dogI = 3; dogI <= humanYears; dogI++) {
          dogYears += 5;
        };
  };
  return [humanYears,catYears,dogYears];
}
