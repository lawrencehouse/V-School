// const axios = require('axios')

// const { default: axios } = require("axios")

grabData = () => {
    axios.get('https://api.vschool.io/lawrencehouse/todo')
    .then(res => listOfTodos(res.data))
    .catch(err => console.log(err))
}

listOfTodos = data => {
    todolist = document.getElementById('todolist')

    for (i=0; data.length; i++) {
        const checkbox = document.createElement("INPUT")
        checkbox.type = 'checkbox'
        checkbox.id = `completed_box${i}`
        const li = document.createElement('li')
        li.innerHTML += ``
        const deleteBtn= document.createElement('button') 
        deleteBtn.textContent="DELETE";
        deleteBtn.value = 'delete';
        
        if (data[i].completed) {
            li.innerHTML = `<s>${data[i].title}</s> `
        } else {
            li.textContent = data[i].title
        }
        
        todolist.appendChild(li)
        li.appendChild(checkbox)
        li.appendChild(deleteBtn)

        completed_box = document.getElementById(`completed_box${i}`)
        id = data[i]._id

        completed_box.addEventListener('change', function() {
            if (completed_box.checked) {
                updates = {
                    completed: true
                }
            } else {
                updates = {
                    completed: false
                }
            }


            
            axios.put(`https://api.vschool.io/lawrencehouse/todo/${id}`, updates)
                .then(res => res.data)
                .catch(err => console.log(err))
        })   

        deleteBtn.addEventListener('click', function(){
            console.log('delete button was clicked');
            id = data[i]._id;
            url = `https://api.vschool.io/lawrencehouse/todo/${id}`
            axios.delete(url)
              .then(response => console.log(response.data))
              .then(error => console.log(error));
    
            location.reload();
        })
    }
}

// Submit new todo to API

todoForm.addEventListener("submit", function(e){
    e.preventDefault()  

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }   

    axios.post("https://api.vschool.io/lawrencehouse/todo", newTodo)
        .then(response => grabData())
        .catch(error => console.log(error))  
})

grabData()