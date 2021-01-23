const form = document.form;
const button = document.getElementById('button');


//Grab the todos

function getData(){
  axios.get('https://api.vschool.io/lawrencehouse/todo/')
    .then(response => renderTodo(response.data))
    .catch(err => console.log(err))
}


// form submit event to post a todo

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newToDo = {
  title: document.form.title.value,
  price : document.form.price.value,
  description : document.form.description.value,
  imgUrl : document.form.image.value
  }

 axios.post('https://api.vschool.io/lawrencehouse/todo/', newToDo)
  .then(response => getData())
  .catch(error => console.log(error))
})

// posts the data 


function renderTodo(data){
  document.getElementById('display-box').innerHTML = ""

  for(let i = 0; i < data.length; i++){
    const htitle = document.createElement('h1')
    const hprice = document.createElement('h2');
    const hdescription = document.createElement('h2');
    const image = document.createElement('img');
    const divider = document.createElement('hr');
    const deleteBtn= document.createElement('button');
    const check = document.createElement('INPUT');
    const checkQuestion = document.createElement('h2');
    
    //title
    htitle.textContent = `Title: ${data[i].title}`;
    htitle.className = 'title'

    //check 
    check.className="check";
    check.name = 'check'
    check.setAttribute('type', 'checkbox');

    // checkbox 
    checkQuestion.textContent = `Completed :  ` ;
    checkQuestion.className = "check-question"
  
    //price
    hprice.textContent = `Price: ${data[i].price}`;
    hprice.className = 'h2';
    
    // description
    hdescription.textContent = `Description: ${data[i].description}`
    hdescription.className = 'h2';
    
    // image 
    image.src = data[i].imgUrl;
    image.className= "image";
    
   // delete button 
    deleteBtn.className="edit";
    deleteBtn.textContent="DELETE";
    deleteBtn.value = 'delete';

    // appending to the DOM 
    const displayBox = document.getElementById('display-box');
    displayBox.appendChild(htitle) 
    displayBox.appendChild(checkQuestion)
    displayBox.appendChild(check);
    displayBox.appendChild(deleteBtn);
    displayBox.appendChild(hprice);
    displayBox.appendChild(hdescription);
    displayBox.appendChild(image);
    displayBox.appendChild(divider);
   

    //PUT REQUEST with checkboxes 
    check.addEventListener('change', ()=>{
      htitle.style.textDecoration = "line-through";
      const id = data[i]._id;
      const update = {
        completed: true
      }
      const url = `https://api.vschool.io/lawrencehouse/todo/${id}`
      axios.put(url, update).then(response => response.data)
        .catch(error => console.log(error));
    })
    
    // makes sure the item stays crossed out after refresh. 
    if(data[i].completed === true){
      htitle.style.textDecoration = "line-through";
    }
    
    // Event for deleting a todo
    deleteBtn.addEventListener('click', function(){
        console.log('delete button was clicked');
        const id = data[i]._id;
        const url = `https://api.vschool.io/lawrencehouse/todo/${id}`
        axios.delete(url)
          .then(response => console.log(response.data))
          .then(error => console.log(error));

        location.reload();
    })
  
  }
}

getData();