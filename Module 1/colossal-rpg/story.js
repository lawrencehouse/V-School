function enemyCreation(){
    var spawn = Math.random()
    if (spawn < .40) {
        console.log('You stumble upon a Fiend')
        fiend = {
            name: 'Fiend',
            health: 100,
            damage: 5 + Math.random()*5
        }
    } else if (spawn < .75) {
        console.log('You stumble upon a Dire Fiend')
        direFiend = {
            name: 'Dire Fiend',
            health: 100,
            damage: 10 + Math.random()*5
        }
    } else if (spawn < .95) {
        console.log('You stumble upon a Vile Fiend')
        vileFiend = {
            name: 'Vile Fiend',
            health: 100,
            damage: 15
        }
    } else {
        console.log('You stumble upon a DIRE VILE FIEND MURDERGOD')
        murdergod = {
            name: 'DIRE VILE FIEND MURDERGOD',
            health: 100,
            damage: 100
        }
    }
}

enemyCreation()