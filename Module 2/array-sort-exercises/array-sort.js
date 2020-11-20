// 1. Sort an array from smallest number to largest

function leastToGreatest(arr) {
    result = arr.sort((a,b) => a - b)
    return result
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// 2. Sort an array from largest number to smallest

function greatestToLeast(arr) {
    result = arr.sort((a,b) => b - a)
    return result
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 