// Assigning selectors for 

clear = document.querySelector('#clear-button')
messages = document.querySelector('.messages')
header1 = document.querySelector('#header')
h1head = document.createElement('h1')
h3head = document.createElement('h3')
span1 = document.createElement('span')
messageleft = document.querySelectorAll('.message left')
messageright = document.querySelectorAll('.message right')

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

messageleft.innerText = 'Are you happy?'
messageright.innerText = `Yes I'm happy!`