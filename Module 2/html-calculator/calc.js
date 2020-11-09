const formAdd = document['add']
const formSub = document['sub']
const formMulti = document['multi']

formAdd.addEventListener('submit', e => {
    e.preventDefault()
    first = Math.floor(formAdd.first.value)
    second = Math.floor(formAdd.second.value)
    const h1 = document.createElement('h1')
    h1.textContent = 'Answer = ' + first + second
    document.getElementsByTagName('body')[0].append(h1)
})