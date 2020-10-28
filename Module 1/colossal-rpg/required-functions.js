const readline = require('readline-sync')


console.log(`Welcome to 'The Violent Road to Death'! Be sure to follow the instructions and pray for luck, because you only get one life. . .`)

playername = readline.question('What is your name?\n\n')

player = {
    name: playername,
    health: 100,
    damage: 10 + Math.floor(Math.random()*5),
    inventory: {}
}

function enemyCreation(){
    var spawn = Math.floor(Math.random())
    if (spawn < .40) {
        console.log('You stumble upon a Fiend')
        currentEnemy = {
            name: 'Fiend',
            health: 100,
            damage: 5 + Math.floor(Math.random()*5)
        }
    } else if (spawn < .75) {
        console.log('You stumble upon a Dire Fiend')
        currentEnemy = {
            name: 'Dire Fiend',
            health: 100,
            damage: 10 + Math.floor(Math.random()*5)
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

while(player.health > 0){
    walk();
}

function enemyAttack(){
    enemyDamage = player.damage
    player.health -= enemyDamage
    if (enemyDamage > 13) {
        console.log(`${currentEnemy.name} hits you with a Critical Hit for ${enemyDamage} points!`)
    } else {
        console.log(`${currentEnemy.name} hits you for ${enemyDamage} points!`)
    }
}

function walk(w){
    w = readline.keyIn(`\nPush 'w' to walk or 'p' for your inventory `, {limit: '$<w,p>'})
    if (w == 'w') {
        if(Math.floor(Math.random() > .75)){
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
            console.log(`\n ${currentEnemy.name}s' Health: ${currentEnemy.health}`)
            enemyAttack()
            console.log(`\n ${player.name}s' Health: ${player.health}`)
        }
    }
}

function run(){
    if(Math.floor(Math.random() > .5)){
        currentEnemy.health = 0
        console.log(`\nYou succeed in escaping the ${currentEnemy.name}! `)
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    } else {
        console.log(`\nYou fail to escape and get hit by the ${currentEnemy.name}! `)
        enemyAttack()
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    }
}


function attackEnemy(){
    let damage = player.damage
    currentEnemy.health -= damage
    if (damage > 13) {
        console.log(`You hit ${currentEnemy.name} with a Critical Hit for ${damage} points!`)
    } else {
        console.log(`You hit ${currentEnemy.name} for ${damage} points!`)
    }
}

// function die(){

// }

function enemyDie(){
    if (currentEnemy.health <= 0) {
        console.log(`You knocked ${currentEnemy.name}s' block off!!!`)
        
    }
}

