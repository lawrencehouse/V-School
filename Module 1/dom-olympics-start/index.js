// Assigning selectors for 

clear = document.querySelector('#clear-button')
messages = document.querySelector('.messages')
header1 = document.querySelector('#header')
h1head = document.createElement('h1')
h3head = document.createElement('h3')
span1 = document.createElement('span')
messageleft = document.getElementsByClassName('left')
messageright = document.getElementsByClassName('right')

header1.classList.add('header')
h1head.innerHTML = '<b>JavaScript Made This!!</b>'
h3head.innerHTML = `<span class='name'>Lawrence</span>`
span1.innerText = ' wrote the JavaScript'
header1.appendChild(h1head)
header1.appendChild(h3head)
h3head.appendChild(span1)


// Event listener to blank html within messages DIV

clear.addEventListener('click', function() {
    messages.innerHTML = ''
})

messageleft[0].innerText = 'Are you happy?'
messageright[0].innerText = `Yes I'm happy!`
messageleft[1].innerText = `Good, lets go to the beach!`
messageright[1].innerText = `Sounds like a plan!`
