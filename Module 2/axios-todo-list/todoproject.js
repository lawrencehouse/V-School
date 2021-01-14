// const axios = require('axios')

axios.get('https://api.vschool.io/scrimbalessons/todo')
    .then(res => {
        for (i=0; res.data.length; i++) {
            const h2 = document.createElement('h2')
            h2.textContent = res.data[i].title
            document.body.appendChild(h2)
        }
    })
    // .then(res => res.map(todo => {
    //     const h2 = document.createElement('h2')
    //     h2.textContent = todo.data.title
    //     document.body.appendChild(h2)
    // }))
    .catch(err => console.log(err))