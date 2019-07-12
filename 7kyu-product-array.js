// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task

// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
// Notes

//     Array/list size is at least 2 .

//     Array/list's numbers Will be only Postives

//     Repeatition of numbers in the array/list could occur.

// Input >> Output Examples

// 1- productArray ({12,20}) ==>  return {20,12}

// Explanation:

//     The first element in prod [] array 12 is the product of all array's elements except the first element

//     The second element 20 is the product of all array's elements except the second element .

// 2- productArray ({1,5,2}) ==> return {10,2,5}

// Explanation:

//     The first element 10 is the product of all array's elements except the first element *1***

//     The second element 2 is the product of all array's elements except the second element 5

//     The Third element 5 is the product of all array's elements except the Third element 2.

// 3- productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

// Explanation:

//     The first element 180 is the product of all array's elements except the first element 10

//     The second element 600 is the product of all array's elements except the second element 3

//     The Third element 360 is the product of all array's elements except the third element 5

//     The Fourth element 300 is the product of all array's elements except the fourth element 6

//     Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

// A more challenging version of this kata by Firefly2002
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function productArray(numbers) {
        const newNumbersArray = Array.from(numbers);
        const array2D = [];
        const arrayReduced = [];
        for (let i = 0; i < newNumbersArray.length; i += 1) {
                array2D.push(newNumbersArray.filter((value, index) => index !== i));
        }
        for (let i = 0; i < array2D.length; i += 1) {
                arrayReduced.push(array2D[i].reduce((acc, cur) => (acc *= cur), 1));
        }
        return arrayReduced;
}
