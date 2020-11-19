// 1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    arr2 = []
    arr.map(function(number){
        arr2.push(number * 2)
    })
    return arr2
  }
  
console.log(doubleNumbers([2, 5, 100])) // [4, 10, 200]