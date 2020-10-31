const readline = require('readline-sync')


console.log(`\nWelcome to 'The Violent Road to Death'! Be sure to follow the instructions and pray for luck, because you only get one life. . .\n`)

playername = readline.question('What is your name?\n\n')

player = {
    name: playername,
    health: 100,
    damage: 10 + Math.floor(Math.random()*5),
    inventory: []
}

itemDrops = [
    {
        name: 'Testitem',
        description: 'A test for something neat, just looks neat.',
        amount: 1
    },
    {
        name: 'Testitem2',
        description: 'A second test',
        amount: 1
    }
]

function enemyCreation(){
    var spawn = Math.random()
    if (spawn < .60) {
        console.log('You stumble upon a Fiend')
        currentEnemy = {
            name: 'Fiend',
            health: 100,
            damage: 5 + Math.floor(Math.random()*5)
        }
    } else if (spawn < .80) {
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

while (player.health <= 0) {
    die()
    break
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
        console.log('\nSTATUS: \n')
        console.log(`Name: ${player.name}\n` + `Health: ${player.health}\n` + `Inventory: ${itemList()}`)
    }
}

// player.inventory[0].name

function itemList() {
    if (player.inventory == 0) {
        console.log(`Your backpack is empty!\n`)
    } else {
        for (i=0; i < player.inventory.length; i++) {
            console.log(player.inventory[i].name)
        }
    }
    
}

function fight() {
    enemyCreation()
    while (currentEnemy.health >= 0 && player.health > 0) {
        const response = readline.question("\nwould you like to run or fight? ")
        if (response == "run"){
            run()
            if (success > .5){
                break
            }
        } else {
            attackEnemy()
            console.log(`\n ${currentEnemy.name}s' Health: ${currentEnemy.health}`)
            if (currentEnemy.health <= 0) {
                enemyDie()
                break
            }
            enemyAttack()
            console.log(`\n ${player.name}s' Health: ${player.health}`)
        }
    }
}

function run(){
    success = Math.floor(Math.random() > .5)
    if(success > .5){
        console.log(`\nYou succeed in escaping the ${currentEnemy.name}! `)
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
        return success
    } else {
        console.log(`\nYou fail to escape and get hit by the ${currentEnemy.name}! `)
        enemyAttack()
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    }
}

function enemyAttack(){
    let enemyDamage = currentEnemy.damage
    player.health -= enemyDamage
    if (enemyDamage > 13) {
        console.log(`${currentEnemy.name} hits you with a Critical Hit for ${enemyDamage} points!`)
    } else {
        console.log(`${currentEnemy.name} hits you for ${enemyDamage} points!`)
    }
}

function attackEnemy(){
    let damage = player.damage
    currentEnemy.health -= damage
    if (damage > 13) {
        console.log(`\nYou hit ${currentEnemy.name} with a Critical Hit for ${damage} points!`)
    } else {
        console.log(`\nYou hit ${currentEnemy.name} for ${damage} points!`)
    }
}

function die(){
    console.log(`\nWith the last of your strength gone, you depart from this world! Game over. .`)
}

function enemyDie(){
    if (currentEnemy.health <= 0) {
        console.log(`\nYou knocked ${currentEnemy.name}s' block off and continue on your way!\n`)
        player.health += Math.floor(Math.random()*25)
        player.inventory.push(itemDrops[getRandomIntInclusive(0, 1)])
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}