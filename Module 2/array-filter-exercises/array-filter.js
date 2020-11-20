// 1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    result = arr.filter(number => number >= 5)
    return result
  }

  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]