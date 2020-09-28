// Part 1: computer loop

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let itemcount = 0

for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] == 'computer') {
        itemcount += 1
    }
}

console.log(itemcount)

// Part 2: old enough

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
] 

var madmaxpeeps = peopleWhoWantToSeeMadMaxFuryRoad

for (i = 0; i < madmaxpeeps.length; i++) {
    if (madmaxpeeps[i].age > 18) {
        console.log(madmaxpeeps[i].name + ' is old enough to see Mad Max')
    } else {
        console.log(madmaxpeeps[i].name + ' is not old enough to see Mad Max')
    }
}