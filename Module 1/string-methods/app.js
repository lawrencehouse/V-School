const readline = require('readline-sync')

// Function 1

let newword = (readline.question('Enter the word to be used: '))

const capitalizeAndLowercase = newword => newword.toUpperCase() + newword.toLowerCase()

// console.log(capitalizeAndLowercase(newword))

// Function 2

const findMiddleIndex = newword => Math.floor(newword.length / 2)

// console.log(findMiddleIndex(newword))

// Function 3

const returnFirstHalf = newword => newword.slice(0, findMiddleIndex(newword))

// console.log(returnFirstHalf(newword))

// Function 4

const returnLastHalf = newword => newword.slice(findMiddleIndex(newword))

const capitalizeAndLowercaseTwo = newword => returnFirstHalf(newword).toUpperCase() + returnLastHalf(newword).toLowerCase()

console.log(capitalizeAndLowercaseTwo(newword))