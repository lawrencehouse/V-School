alert("Hello! Try out these buttons!")
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let reward1 = document.querySelector('#reward1')
let reward2 = document.querySelector('#reward2')

let array1 = ['apples', 'pears']


let object1 = {
    spyro: 'sparx!',
    crash: 'aku aku!',
    isEvil: true
}

button1.addEventListener("click", function () {
    alert('This one works! Your reward is below!')
    reward1.innerText = array1['0']
})

button2.addEventListener('click', function () {
    alert('This two works! Your reward is below!')
    reward2.innerText = object1.crash
})


for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])
}
let x = 1
if (x) {
    console.log('true!')
} else {
    console.log('false!')
}

for (let i = 0; i < 12; i++) {
    console.log(i)
}



let color = 'red'
if (color === 'red') {
    console.log('I am yellow!')
} else if (color === 'yellow') {
    console.log('I am red!')
} else {
    console.log('false!')
}