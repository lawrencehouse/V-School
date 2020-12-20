// Let and Const

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// Task 1: Map arrow function

const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }))

console.log(mapVegetables(carrots))

// Task 2: filter arrow function

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

filterForFriendly = arr => arr.filter(person => person.friendly)

console.log(filterForFriendly(people))

// Task 3: More arrow functions

doMathSum = (a, b) => a + b

console.log(doMathSum(1,2))

produceProduct = (a, b) => a * b

console.log(produceProduct(2,2))

// Task 4: Printstring arrow function

printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log(printString('Kat','Stark',40))

// Task 5: 