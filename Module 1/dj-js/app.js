square = document.getElementById('dj')

html = document.querySelector('html')

square.addEventListener('mouseover', function() {
    square.style.backgroundColor = 'blue'
})

square.addEventListener('mousedown', function() {
    square.style.backgroundColor = 'red'
})

square.addEventListener('mouseup', function() {
    square.style.backgroundColor = 'yellow'
})

square.addEventListener('dblclick', function() {
    square.style.backgroundColor = 'green'
})

html.addEventListener('wheel', function() {
    square.style.backgroundColor = 'orange'
})

html.addEventListener('keydown', function(event) {
    if (event.keyCode == 66) {
        square.style.backgroundColor = 'blue'
    }
})

html.addEventListener('keydown', function(event) {
    if (event.keyCode == 82) {
        square.style.backgroundColor = 'red'
    }
})

html.addEventListener('keydown', function(event) {
    if (event.keyCode == 89) {
        square.style.backgroundColor = 'yellow'
    }
})

html.addEventListener('keydown', function(event) {
    if (event.keyCode == 71) {
        square.style.backgroundColor = 'green'
    }
})

html.addEventListener('keydown', function(event) {
    if (event.keyCode == 79) {
        square.style.backgroundColor = 'orange'
    }
})