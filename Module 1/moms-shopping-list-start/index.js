const form = document['addItem']
const list = document.querySelector('#list')
const item = document.querySelector('#title')
itemlist = list.children.length
erase = document.getElementById('erase')



form.addEventListener('submit', e => {
    e.preventDefault()
    const new_title = document.createElement('div')
    const editbtn = document.createElement('button')
    const xbtn = document.createElement('button')
    new_title.innerText = form.title.value
    editbtn.innerText = 'edit'
    xbtn.id = 'erase'
    xbtn.innerText = 'X'

    xbtn.addEventListener('click', () => {
        for (i=0; i < itemlist; i++) {
            list.removeChild(list.childNodes[i])
        }
    })
    
    const new_li = document.createElement('li')
    list.append(new_li)
    list.lastChild.append(new_title)
    list.lastChild.append(editbtn)
    list.lastChild.append(' ')
    list.lastChild.append(xbtn)
})
