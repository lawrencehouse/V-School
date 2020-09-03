const readline = require("readline-sync")

console.log(`Today was supposed to be a regular day, going to the store to pick up some Double Fudge Brownie ice cream and next thing you know you're seeing black. Now you see before you a room. The door is locked and we need to find the key. You see a hole in the wall, Do you . . . `)


choices = ['Put hand in hole', 'Find the key', 'Open the door']

key_found = false
door_locked = true
while (door_locked == true) {
    index = readline.keyInSelect(choices, 'What do you do?')
    if (index == '0') {
        console.log('You prick your finger on a needle and disintegrate! The End!')
        return
    } else if (index == '2') {
        if (key_found == true) {
            console.log(`You try the key on the door and to your surprise, it opens! The End!`)
            door_locked = false
        } else if (key_found == false) {
            console.log(`The door is locked, didn't we check this already?`)
        }
    } else if (index == '1') {
        if (key_found == true) {
            console.log(`You already searched the room!`)
        } else if (key_found == false) {
            console.log(`You ignore the hole and search every inch of the room, finding a key!`)
            key_found = true
        }
    }
}