header1 = document.querySelector('#header')
h1head = document.createElement('h1')
h3head = document.createElement('h3')
span1 = document.createElement('span')

header1.classList.add('header')
h1head.innerHTML = '<b>JavaScript Made This!!</b>'
h3head.innerHTML = `<span class='name'>Lawrence</span>`
span1.innerText = ' wrote the JavaScript'
header1.appendChild(h1head)
header1.appendChild(h3head)
h3head.appendChild(span1)

clear = document.querySelector('#clear-button')
messages = document.querySelector('.messages')

