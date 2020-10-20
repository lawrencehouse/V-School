function enemyCreation(){
    var spawn = Math.random()
    if (spawn < .33) {
        console.log('')
    } else if (spawn < .66) {
        console.log('test1')
    } else {
        console.log('test2')
    }
}

enemyCreation()