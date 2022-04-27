/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
// remove first element from array
// unnest the first element


function flatten(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].constructor === Array) {
      flatten(arr[i]);
      Array.prototype.splice.apply(arr, [i, 1].concat(arr[i]));
    }
  }
  return arr
}

function flatten(arr) {
  let newArr=[]
  if (arr.length===0){return []}
  for (let i = 0 ; i< arr.length; i++){
    let ele = arr[i]
    if (Array.isArray(ele)){
      newArr.push(...flatten(ele))
    }
    else {newArr.push(ele)}
  }
  return newArr
}


const test1 = [[3], [10, 8], [[9,[10]]]]
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten(test1))


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
