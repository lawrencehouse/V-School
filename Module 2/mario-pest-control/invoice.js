total = document.getElementById('total')

form = document['baddies']

goomba_caught = document.getElementById('goom')

bobs_caught = document.getElementById('bob')

cheeps_caught = document.getElementById('cheep')

total.innerText = 0 + ' Coins'

form.addEventListener('change', e => {
    goomba_total = Math.floor(goomba_caught.value * 5)
    bob_total = Math.floor(bobs_caught.value * 7)
    cheep_total = Math.floor(cheeps_caught.value * 11)
    baddie_total = goomba_total + bob_total + cheep_total
    total.innerText = baddie_total + ' Coins'
})