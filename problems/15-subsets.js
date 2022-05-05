/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr){
  if(arr.length===0){return []}
  // itereate each ele in arr
  // make 2 lists of subsets: 1 list of subsets including the ele and 1 list of subsets excluding ele
  // for (let i =0; i<arr.length; i++){
  //   // make the subsets for including ele
  //   let firstEle = arr.shift()
  //   subsetsIncludingNum = [[firstEle], ...subsets(arr)]

  // to get [1], [1,2], [1,3], [1,2,3],
  // let subsetsIncludingNum = arr.map ( num => {return [[]currentNum, ...subsets(arr.slice(1))] })
  let totalSubsets= []
  let firstEl = arr.shift()
  totalSubsets.push([firstEl])
  totalSubsets.push([arr])
  // for (let i=0; i<arr.length; i++){
  //   totalSubsets.push([firstEl, ...])
  // }
  let currentEl = arr.shift()
  let subsetsIncludingNum = totalSubsets.push([firstEl], )
  // for (let i=0; i<arr.length; i++){
  //   var subsetsIncludingNum = [[firstEle], subsets(arr)]
  // }
  console.log(subsetsIncludingNum)
  return subsetsIncludingNum
}


subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


// arr= [1,2]
//for ele 0: 1
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
