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

// Task 5 Green

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

// Task 6 Blue

combineAnimals = (...array) => array

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

arr1 = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]

console.log(combineAnimals(arr1)) 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Task 7 Black diamond

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  