// 1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    arr2 = []
    arr.map(function(number){
        arr2.push(number * 2)
    })
    return arr2
  }
  
console.log(doubleNumbers([2, 5, 100])) // [4, 10, 200]

// 2. Take an array of numbers and make them strings

function stringItUp(arr){
  arr2 = []
  arr.map(function(number) {
    arr2.push(number.toString())
  })
  return arr2
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3. Capitalize each of an array of names/

function capitalizeNames(arr){
  arr2 = []
  arr.map(function(name) {
    arr2.push()
  })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]