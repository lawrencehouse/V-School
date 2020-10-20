function enemyCreation(){
    var spawn = Math.random()
    if (spawn < .40) {
        console.log('You stumble upon a Fiend')
    } else if (spawn < .73) {
        console.log('You stumble upon a Dire Fiend')
    } else if (spawn < .95) {
        console.log('You stumble upon a Vile Fiend')
    } else {
        console.log('You stumble upon a DIRE VILE FIEND MURDERGOD')
    }
}

enemyCreation()