let todoList = [{
              item : 'Buy Milk' , 
             dueDate : '25/06/2025'
                   } , 
             {
               item : 'Go to college',
              dueDate : '25/06/2025'
             }
                   ];
displayItems(); 

function addTodo(){
  let inputElement = document.querySelector("#todo_input")
   let dateElement = document.querySelector("#todo_date")
  let todoItem = inputElement.value;
  let todoDate = dateElement.value ;
  if(todoItem !='' && todoDate != '')
    todoList.push({item : todoItem , dueDate : todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}
function displayItems(){
  let containerElement = document.querySelector(".todo_container");


    let newHtml = '';
       
  
  for (let i = 0 ; i<todoList.length ; i++){
   
    let {item , dueDate} = todoList[i];
    newHtml +=  `
       <span>${item}</span>
       <span>${dueDate}</span>
        <button class = "btn_delete" onclick = "todoList.splice(${i},1);  displayItems();">Delete</button>`;
  }
      containerElement.innerHTML = newHtml;
}