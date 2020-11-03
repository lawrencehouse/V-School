const form = document.addItem
list = document.querySelector('ul')
const item = document.querySelector('#title')


form.addEventListener('submit', e => {
    e.preventDefault()
    const new_title = document.createElement('div')
    const editbtn = document.createElement('button')
    const xbtn = document.createElement('button')
    new_title.innerText = form.title.value
    editbtn.innerText = 'edit'
    xbtn.className = 'erase'
    xbtn.innerText = 'X'
    const new_li = document.createElement('li')
    list.append(new_li)
    list.lastChild.append(new_title)
    list.lastChild.append(editbtn)
    list.lastChild.append(' ')
    list.lastChild.append(xbtn)

    // const erase = document.getElementsByClassName('erase')
    // itemlist = list.children.length
    // for (i = 0; i < erase.length; i++) {
    //     erase[i].addEventListener('click', e => {
    //         e.target.parentNode.remove()
    //     })
    // }
    xbtn.addEventListener('click', e => {
        new_li.remove()
    })
    
})
