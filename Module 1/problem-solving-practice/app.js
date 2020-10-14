// Function 1

/*  
    0. Make variable for max number
    1. Go over array of numbers.
    2. compare if each number is higher than max.
    3. if higher than max, assign number to max.
*/

// largest = numbers => {
//     max = 0
//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i]
//         }
//     }
//     console.log(max)
// } 

// largest([3, 5, 2, 8, 1])

// Function 2

/*  
    0. Make array for words with the character.
    1. Go over array of words.
    2. Go over the characters in word.
    3. if character in word = the character given, push the word to the empty array. Repeat for each
*/

// lettersWithStrings = (words, c) => {
//     wordpick = []
//     for (i = 0; i < words.length; i++) {
//         for (j = 0; j < words[i].length; j++) {
//             if (words[i][j] == c) {
//                 wordpick.push(words[i])
//             }
//         }
//     }
//     console.log(wordpick)
// }

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")

// Function 3

/*
    0. Check if number 1 is divisible by num 2, if it is, then return true, if not, return false.
*/

// isDivisible = (num1, num2) => {
//     if (num1 % num2 == 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// isDivisible(4, 2)
// isDivisible(9, 3)
// isDivisible(15, 4)