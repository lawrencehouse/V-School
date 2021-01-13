const axios = require('axios')

axios.get('https://api.vschool.io/scrimbalessons/todo/5ee3e1ec398e4004c7772cc1')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))