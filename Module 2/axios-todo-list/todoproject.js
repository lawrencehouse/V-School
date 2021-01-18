// const axios = require('axios')

// const { default: axios } = require("axios")

// axios.post('https://api.vschool.io/lawrencehouse/todo', )

axios.get('https://api.vschool.io/lawrencehouse/todo')

    .then(res => {
        console.log(res)
        todolist = document.getElementById('todolist')
        for (i=0; res.data.length; i++) {
            var checkbox = document.createElement("INPUT")
            checkbox.type = 'checkbox'
            checkbox.name = 'completed_box'
            const li = document.createElement('li')
            if (res.data[i].completed) {
                li.innerHTML = `<s>${res.data[i].title}</s>`
            } else {
                li.textContent = res.data[i].title
            }
            
            if (res.data[i].imgUrl != "") {
                li.innerHTML += `<img src="${res.data[i].imgUrl}" width="100" height="100">`
            }
            todolist.appendChild(li)
        }
    })
    // .then(res => res.map(todo => {
    //     const h2 = document.createElement('h2')
    //     h2.textContent = todo.data.title
    //     document.body.appendChild(h2)
    // }))
    .catch(err => console.log(err))

todoForm.addEventListener("submit", function(event){
    event.preventDefault()  
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }   
    axios.post("https://api.vschool.io/lawrencehouse/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))  
})

// axios.put('https://api.vschool.io/lawrencehouse/todo/<id>', {})
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))