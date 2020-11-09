const formAdd = document['add']
const formSub = document['sub']
const formMulti = document['multi']

formAdd.addEventListener('submit', e => {
    e.preventDefault()
    first = Math.floor(formAdd.first.value)
    second = Math.floor(formAdd.second.value)
    sum = first + second
    answer = document.getElementById('answer')
    answer.innerText = 'The sum is ' + sum
})

formSub.addEventListener('submit', e => {
    e.preventDefault()
    first = Math.floor(formSub.first.value)
    second = Math.floor(formSub.second.value)
    difference = first - second
    answer = document.getElementById('answer')
    answer.innerText = 'The difference is ' + difference
})

formMulti.addEventListener('submit', e => {
    e.preventDefault()
    first = Math.floor(formMulti.first.value)
    second = Math.floor(formMulti.second.value)
    product = first * second
    answer = document.getElementById('answer')
    answer.innerText = 'The product is ' + product
})