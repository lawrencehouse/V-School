const readline = require("readline-sync")

let num1 = Math.floor(readline.question('Please enter your first number: '))
let num2 = Math.floor(readline.question('Please enter your second number: '))
let operation = readline.question('Please enter the operation to perform (add, sub, mul, div): ')

if (operation == 'add') {
    result = num1 + num2
} else if (operation == 'sub') {
    result = num1 - num2
} else if (operation == 'mul') {
    result = num1 * num2
} else if (operation == 'div') {
    result = num1 / num2
}

console.log('The result is: ' + result)