const form = document['addItem']
const list = document.querySelector('#list')
const item = document.querySelector('#title')

form.addEventListener('submit', e => {
    e.preventDefault()
    const new_title = document.createElement('div')
    const editbtn = document.createElement('button')
    const xbtn = document.createElement('button')
    new_title.innerText = form.title.value
    editbtn.innerText = 'edit'
    xbtn.innerText = 'X'
    const new_li = document.createElement('li')
    list.append(new_li)
    list.lastChild.append(new_title)
    list.lastChild.append(editbtn)
    list.lastChild.append(' ')
    list.lastChild.append(xbtn)
})

itemlist = list.children.length

xbtn.addEventListener('click', () => {
    for (i=0; i < itemlist; i++) {
        
    }

})