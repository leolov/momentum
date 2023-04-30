const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
  const button = document.createElement("button");
  li.appendChild(button);
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
}


function handleToDo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
todoForm.addEventListener("submit", handleToDo);



const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}














