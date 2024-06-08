console.log("Welcome to my Todo App");

let todoDataSection = document.getElementById("todo-data");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");

todoInputBar.addEventListener("keyup", function toggleSaveButton() {
  let todotext = todoInputBar.value;
  console.log(todotext)
  if (todotext.length == 0) {
    if (saveButton.classList.contains("disabled")) return;
    console.log("Adding a desabled class");
    saveButton.classList.add("disabled");
    console.log("disabled")
  }
    else if (saveButton.classList.contains("disabled")) {
    saveButton.classList.remove("disabled");
  }
});

saveButton.addEventListener("click", function getTextAndAddTodo() {

  let todotext = todoInputBar.value;
  if (todotext.length == 0) return;
  todos.push(todtext);
  addTodo(todotext,todos.length);

  todoInputBar.value='';
});

function addTodo(todoData,todoCount) {
  console.log("Called add todo");

  let rowDiv = document.createElement("div");
  let todoItem = document.createElement("div");
  let todoNumber = document.createElement("div");
  let todoDetail = document.createElement("div");
  let todoStatus = document.createElement("div");
  let todoActions = document.createElement("div");
  let deleteButton = document.createElement("button");
  let finishedButton = document.createElement("button");
  let hr = document.createElement("hr");

  //Adding classes
  rowDiv.classList.add("row");
  todoItem.classList.add(
    "todo-item",
    "d-flex",
    "flex-row",
    "justify-content-between",
    "align-items-center"
  );

  todoNumber.classList.add("todo-no");
  todoDetail.classList.add("todo-details", "text-muted");
  todoStatus.classList.add("todo-status", "text-muted");
  todoActions.classList.add(
    "todo-actions",
    "d-flex",
    "justify-content-center",
    "gap-2"
  );

  deleteButton.classList.add("btn", "btn-danger");
  finishedButton.classList.add("btn", "btn-success");

  todoNumber.textContent = `${todoCount}.`;
  todoDetail.textContent = todoData; //Sets the todo text sent from the input element
  todoStatus.textContent = "In Progress";
  deleteButton.textContent = "Delete";
  finishedButton.textContent = "Finished";

  todoActions.appendChild(deleteButton);
  todoActions.appendChild(finishedButton);

  todoItem.appendChild(todoNumber);
  todoItem.appendChild(todoDetail);
  todoItem.appendChild(todoStatus);
  todoItem.appendChild(todoActions);

  rowDiv.appendChild(todoItem);
  rowDiv.appendChild(hr);
  todoDataSection.appendChild(rowDiv);
}

//Reference..............
/* console.log("Welcome to my Todo App");


// let getTOdoButton=document.getElementById('get-todos');
// getTOdoButton.addEventListener("click",()=>{
//     console.log("Clicked")
// });

let getTodoButton=document.getElementById('get-todos');
//registration of event listener

getTodoButton.addEventListener("click",()=>{
    console.log("clicked");
});


getTodoButton.addEventListener("mouseout",handler)
// getTodoButton.addEventListener("mouseover",handler)
// getTodoButton.addEventListener("click",handler)
 function handler(){
    console.log("Wow It's mouseover");
 }

 //ANOTHER WAY FOR THE ABOVE

 getTodoButton.onclick=()=>{
    console.log("Clicked")
 } */
