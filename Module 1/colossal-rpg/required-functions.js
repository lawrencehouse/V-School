const readline = require('readline-sync')

console.log(`Welcome to 'The Violent Road to Death'! Be sure to follow the instructions and pray for luck, because you only get one life. . .`)

playername = readline.question('What is your name?\n\n')

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
    player.health -= currentEnemy.damage
}

while(player.health > 0){
    walk();
}

function walk(w){
    w = readline.keyIn(`\nPush 'w' to walk or 'p' for your inventory `, {limit: '$<w,p>'})
    if (w == 'w') {
        if(Math.random() > .75){
            console.log('\n')
            fight()
        } else {
            console.log("\none foot in front of the other . . . luckily we didn't run into anything")
        }
    } else {
        console.log('STATUS: \n')
        console.log(player.name + '\n' + player.health + '\n' + player.inventory)
    }
}

function fight() {
    enemyCreation()
    while (currentEnemy.health >= 0) {
        if (currentEnemy.health <= 0) {
            enemyDie()
            return
        }
        const response = readline.question("\nwould you like to run or fight? ")
        if (response == "run"){
            run()
        } else {
            attackEnemy()
            console.log(`\n ${currentEnemy.health}`)
        }
    }
}

function run(){
    if(Math.random() > .5){
        currentEnemy.health = 0
        console.log(`You succeed in escaping the ${currentEnemy.name}! `)
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    } else {
        console.log(`You fail to escape and get hit by the ${currentEnemy.name}! `)
        enemyAttack()
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    }
}


function attackEnemy(){
    currentEnemy.health -= player.damage
    if (player.damage == 15) {
        console.log('Critical Hit!')
    }
}

// function die(){

// }

function enemyDie(){
    if (currentEnemy.health <= 0) {
        console.log(`You knocked ${currentEnemy.name}s' block off!!!`)

    }
}

