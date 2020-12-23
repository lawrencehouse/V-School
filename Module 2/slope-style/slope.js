// Task 1 Green

collectAnimals = (...animals) => animals

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Task 2 Green

combineFruit = (fruit, sweets, vegetables) => 
    ({
        fruit: fruit,
        sweets: sweets,
        vegetables: vegetables
    })


console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/

// Task 3 Green

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

const {location,duration} = vacation
  
  function parseSentence(_________){
    return `We're going to have a good time in ${location} for ${duration}`
  }

  console.log(parseSentence(vacation))

// Task 4 Green

function returnFirst(items){
    const [firstItem] = items /*change this line to be es6*/
    return firstItem
}


// Task 5 Blue

combineAnimals = (...arrays) => arrays

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 

// ["dog", "cat", "mouse", "jackolope", "platypus"]