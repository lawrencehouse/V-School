body = document

clickCounter = document.getElementById('clicks')

clicks = 0

body.addEventListener('click', e => {
    clicks += 1 
    clickCounter.innerText = clicks
})

sessionStorage.setItem('yourClicks', clicks)