const readline = require('readline-sync')

console.log(`\nWelcome to 'The Violent Road to Death'! Be sure to follow the instructions and pray for luck, because you only get one life. . .\n`)

playerName = readline.question('What is your name?\n\n')

player = {
    name: playerName,
    health: 100,
    damage: 10 + getRandomIntInclusive(1, 5),
    inventory: []
}

itemDrops = [
    {
        name: 'Fiend Phylactery',
        description: 'The heart of the fiend',
        amount: 1
    },
    {
        name: 'Fiend spirit',
        description: 'The continuously strong spirit of the Fiend',
        amount: 1
    }
]

function enemyCreation(){
    var spawn = Math.random()
    if (spawn < .60) {
        console.log('You stumble upon a Fiend')
        return {
            name: 'Fiend',
            health: 100,
            damage: 5 + getRandomIntInclusive(1, 5)
        }
    } else if (spawn < .80) {
        console.log('You stumble upon a Dire Fiend')
        return {
            name: 'Dire Fiend',
            health: 100,
            damage: 7 + getRandomIntInclusive(1, 5)
        }
    } else if (spawn < .95) {
        console.log('You stumble upon a Vile Fiend')
        return {
            name: 'Vile Fiend',
            health: 100,
            damage: 9 + getRandomIntInclusive(1, 5)
        }
    } else {
        console.log('You stumble upon a DIRE VILE FIEND MURDERGOD')
        return {
            name: 'DIRE VILE FIEND MURDERGOD',
            health: 100,
            damage: 100
        }
    }
}

while (player.health > 0) {
    walk();
} 

die()

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
        console.log('\n      *STATUS*\n')
        console.log(`Name: ${player.name}\nHealth: ${player.health}\n\n      *INVENTORY*\n`)
        itemList()
    }
}

// player.inventory[0].name

function itemList() {
    if (player.inventory == 0) {
        console.log(`Your backpack is empty!\n`)
    } else {
        for (i=0; i < player.inventory.length; i++) {
            console.log(`${player.inventory[i].name}: ${player.inventory[i].description}`)
        }
    }
    
}

function fight() {
    const currentEnemy = enemyCreation()
    while (currentEnemy.health >= 0 && player.health > 0) {
        const response = readline.question("\nwould you like to run or fight? ")
        if (response == "run"){
            run(currentEnemy)
            if (success > .5){
                break
            }
        } else {
            attackEnemy(currentEnemy)
            console.log(`\n ${currentEnemy.name}s' Health: ${currentEnemy.health}`)
            if (currentEnemy.health <= 0) {
                enemyDie()
                break
            }
            enemyAttack(currentEnemy)
            console.log(`\n ${player.name}s' Health: ${player.health}`)
        }
    }
}

function run(enemy){
    success = Math.floor(Math.random() > .5)
    if(success > .5){
        console.log(`\nYou succeed in escaping the ${enemy.name}! `)
        return success
    } else {
        console.log(`\nYou fail to escape and get hit by the ${enemy.name}! `)
        enemyAttack()
    }
}

function enemyAttack(nastyFiend){
    let enemyDamage = nastyFiend.damage
    player.health -= enemyDamage
    if (enemyDamage > 13) {
        console.log(`${nastyFiend.name} hits you with a Critical Hit for ${enemyDamage} points!`)
    } else {
        console.log(`${nastyFiend.name} hits you for ${enemyDamage} points!`)
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
        console.log(`You gain some health!`)
        player.health += 15 + Math.floor(Math.random()*25)
        player.inventory.push(itemDrops[getRandomIntInclusive(0, 1)])
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}