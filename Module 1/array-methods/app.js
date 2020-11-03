var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop('lettuce')
fruit.shift('banana')
fruit.push(fruit.indexOf('orange'))
vegetables.push(vegetables.length)
food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()

// console.log(vegetables)
// console.log(fruit)

console.log(food.toString())