// 1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
  result = arr.map(number => number * 2)
  return result
}
  
console.log(doubleNumbers([2, 5, 100])) // [4, 10, 200]

// 2. Take an array of numbers and make them strings

function stringItUp(arr){
  result = arr.map(number => number.toString())
  return result
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // 3. Capitalize each of an array of names/

function capitalizeNames(arr){
  result = arr.map(name => {
    firstletter = name.slice(0, 1)
    lastletters = name.slice(1)
    return firstletter.toUpperCase() + lastletters.toLowerCase()
  })
  return result
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4. Make an array of strings of the names

function namesOnly(arr){
  result = arr.map(person => person.name)
  return result
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5. Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
  result = arr.map(person => {
    if (person.age < 18) {
      return person.name + ' is under age!!'
    } else {
      return person.name + ' can go to The Matrix'
    }
  }) 
  return result
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6. Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
  result = arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`)
  return result
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]