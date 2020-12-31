class Player {
    constructor(name, status) {
        this.name = name
        this.totalCoins = 0
        this.status = status
        this.hasStar = false
        this.gameActive = true
    }

    setName(namePicked) {
        name = namePicked
    }

    gotHit() {
        if (this.hasStar == true) {
            console.log('Your star protected you!')
            this.hasStar = false
        } else if (this.status == 'Powered Up') {
            this.status = 'Big'
        } else if (this.status == 'Big') {
            this.status = 'Small'
        } else if (this.status == 'Small') {
            this.status = 'Dead'
            this.gameActive = false
        }
    }
    
    gotPowerup() {
        if (this.status == 'Small') {
            this.status = 'Big'
        } else if (this.status == 'Big') {
            this.status = 'Powered Up'
        } else if (this.status == 'Powered Up') {
            console.log('Congrats! You got a star!')
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        if (this.hasStar == true) {
            console.log('You have a star!')
        }
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`)
        console.log('\n')
    }
}

const Dunkman = new Player('Mario', 'Small')

getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomInt == 0) {
        console.log('*WHAM*\n')
        Dunkman.gotHit()
    } else if (randomInt == 1) {
        Dunkman.gotPowerup()
    } else {
        Dunkman.addCoin()
    }
    Dunkman.print()
}

gameplay = setInterval(() => {
    getRandomInt(0,2)
    if (Dunkman.gameActive === false) {
        console.log('You have died!')
        clearInterval(gameplay)
    }
}, 1000)