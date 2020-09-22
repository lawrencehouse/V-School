form = document.querySelector('#add-todo')
list = document.querySelector('#list')
item = document.querySelector('#title')
new_li = document.createElement('li')

form.addEventListener('click', () => {
    list.appendChild(new_li)
})