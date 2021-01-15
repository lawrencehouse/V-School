// const axios = require('axios')

// axios.post('https://api.vschool.io/lawrencehouse/todo', )

axios.get('https://api.vschool.io/lawrencehouse/todo')
    .then(res => {
        console.log(res)
        for (i=0; res.data.length; i++) {
            const h2 = document.createElement('h2')
            if (res.data[i].completed) {
                h2.innerHTML = `<s>${res.data[i].title}</s>`
            } else {
                h2.textContent = res.data[i].title
            }
            if (res.data[i].imgUrl != undefined) {
                h2.innerHTML += `<img src="${res.data[i].imgUrl}" width="100" height="100">`
            }
            document.body.appendChild(h2)
        }
    })
    // .then(res => res.map(todo => {
    //     const h2 = document.createElement('h2')
    //     h2.textContent = todo.data.title
    //     document.body.appendChild(h2)
    // }))
    .catch(err => console.log(err))