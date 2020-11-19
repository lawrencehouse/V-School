body = document

clickCounter = document.getElementById('clicks')

clicks = Math.floor(sessionStorage.getItem('yourClicks'))

body.addEventListener('click', e => {
    clicks += 1 
    clickCounter.innerText = clicks
    sessionStorage.setItem('yourClicks', clicks)
})

clickCounter.innerText = clicks
