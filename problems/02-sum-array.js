/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

// [1,2]
// [1]
// [] => length=0 return 0
***********************************************************************/

// your code here
// function sumArray(arr){
//   if (arr.length===0){return 0}
//   let var1 = arr.pop()
//   return var1 + sumArray(arr)
// }

function sumArray(arr){
  if (arr.length===0){return 0}
  let firstEl = arr.shift()
  return firstEl + sumArray(arr)
}

console.log(sumArray([1, 2, 3])); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
