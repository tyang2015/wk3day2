/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
// 0  1  1  2  3
fibonacci(10); // 55
***********************************************************************/

// your code here
// const arr= [0,1]
// function fibonacci(num){
//   // let arr = [0,1]
//   if (arr.length === num +1){return arr[arr.length-1]}
//   let p1 = arr[arr.length-2]
//   let p2 = arr[arr.length-1]
//   let sum = p1 + p2
//   arr.push(sum)
//   fibonacci(num)
//   return arr[arr.length-1]

// }

function fibonacci(num){
  if (num===0){
    return 0
  }
  if (num ===1){
    return 1
  }
  else{
    return fibonacci(num-1) + fibonacci(num-2)
  }


  // if (num===1){
  //   initialArr= [0,1]
  //   return initialArr
  // }
  // let p1 = initialArr[initialArr.length-2]
  // let p2 = initialArr[initialArr.length-1]
  // // [...fibonacci(num-1)]
  // let sum = p1+p2
  // initialArr.push(sum)
  // fibonacci(num-1)
  // return initialArr[initialArr.length-1]
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
// 0  1  1  2  3 5 8
console.log(fibonacci(10)); // 55
// console.log(fibonacci(7))


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
