/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false

// [4,5]
// [5]
// 4<5
***********************************************************************/

// your code here
function isSorted(arr){
  if (arr.length===1) return true
  // if (arr.length > 0){return false}
  let firstEle = arr.shift()
  let nextEle = arr[0]
  let rightOrder = firstEle < nextEle
  if (rightOrder){
    return isSorted(arr)
  }
  else {return false}
}

// arr1= [1,2,3,4]
// firstEle = arr1.shift()
// rightOrder = firstEle < arr1[0]
// console.log(rightOrder)

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
