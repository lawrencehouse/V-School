const readline = require("readline-sync")

console.log(`Today was supposed to be a regular day, going to the store to pick up some Double Fudge Brownie ice cream and next thing you know you're seeing black. Now you see before you a room. The door is locked and we need to find the key. You see a hole in the wall, Do you . . . `)


choices = ['Put hand in hole', 'Eind the key', 'Open the door']

index = readline.keyInSelect(choices, 'What do you do?')

if (index == '0') {
    console.log('You prick your finger on a needle and disintegrate!')
} else if (index == '2') {
    console.log(`The door is locked, didn't we check this already?`)
} else if (index == '1') {
    console.log(`You ignore the hole and search every inch of the room, finding a key!`)
    console.log(`You test the key on the door and to your surprise, it opens! You walk outside steadily expecting the worst. Nothing happens. . . the END!`)
}

