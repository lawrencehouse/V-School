const readline = require('readline-sync')

console.log(`Welcome to 'The Violent Road to Death'! Be sure to follow the instructions and pray for luck, because you only get one life. . .`)

playername = readline.question('What is your name?')

player = {
    name: playername,
    health: 100,
    damage: 10 + Math.random()*5,
    inventory: {}
}

function enemyCreation(){
    var spawn = Math.random()
    if (spawn < .40) {
        console.log('You stumble upon a Fiend')
        currentEnemy = {
            name: 'Fiend',
            health: 100,
            damage: 5 + Math.random()*5
        }
    } else if (spawn < .75) {
        console.log('You stumble upon a Dire Fiend')
        currentEnemy = {
            name: 'Dire Fiend',
            health: 100,
            damage: 10 + Math.random()*5
        }
    } else if (spawn < .95) {
        console.log('You stumble upon a Vile Fiend')
        currentEnemy = {
            name: 'Vile Fiend',
            health: 100,
            damage: 15
        }
    } else {
        console.log('You stumble upon a DIRE VILE FIEND MURDERGOD')
        currentEnemy = {
            name: 'DIRE VILE FIEND MURDERGOD',
            health: 100,
            damage: 100
        }
    }
}

function enemyAttack(){
    player.health -+ currentEnemy.damage
}

while(player.health > 0){
    walk();
}

function walk(w){
    w = readline.keyIn(`Push 'w' to walk or 'p' for your inventory`, {limit: '$<w,p>'})
    if (w == 'w') {
        if(Math.random() > .75){
            fight()
        } else {
            console.log("one foot in front of the other")
        }
    } else {
        console.log(player.name + player.health + player.inventory)
    }
}

function fight() {
    enemyCreation()
    if (currentEnemy.health > 0) {
        const response = readline.question("would you like to run or fight?")
        if (response === "run"){
            run()
        } else {
            attackEnemy()
        }
    } else {
        enemyDie()
    }
}

// function walk(){
//     /* ask user to push "w" to walk
//     if (user pushed w){
//         if(1 in 4){
//             fight();
//         } else {
//             //tell user they didn't run into a monster
//             //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//         }
//     } else {
//         tell user what's in their inventory, and their health, and then tell them to push w to walk */
// }

function run(){
    if(Math.random() > .5){
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    } else {
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    }
}

// function fight(){
//     /* ask user to either fight or run
//     enemyCreation()
//     if (user is trying to run){
//         run()
//     } else {
//         attackEnemy()
//     } */
// }

function attackEnemy(){
    currentEnemy.health -+ player.damage
    if (player.damage == 15) {
        console.log('Critical Hit!')
    }
}

// function die(){

// }

function enemyDie(){
    if (currentEnemy.health == 0) {
        console.log(`You knocked ${currentEnemy.name}s' block off!!!`)

    }
}

