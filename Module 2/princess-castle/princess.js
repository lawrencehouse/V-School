class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked) {
        name = namePicked
    }

    gotHit() {
        if (status == 'Powered Up') {
            status = 'Big'
        } else if (status == 'Big') {
            status = 'Small'
        } else if (status == 'Small') {
            status = 'Dead'
        } else {
            console.log('You are dead')
            this.gameActive = false
        }
    }
    
    gotPowerup() {
        if ()
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`)
        if (this.hasStar == true) {
            console.log('You have a star!')
        }
    }
}

const Dunkman = new Player('Mario', 0, 'small', false, true)

getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomInt == 0) {
        Dunkman.gotHit
    } else if (randomInt == 1) {
        Dunkman.gotPowerup
    } else {
        Dunkman.addCoin
    }
}

gameplay = setInterval(console.log(getRandomInt(0,2)), 2000)

stopFunction = () => {
    if (gameActive === false) {
        console.log('You have died!')
        clearInterval(gameReplay)
    }
}