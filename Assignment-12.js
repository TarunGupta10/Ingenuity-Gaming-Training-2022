var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");
var i=1;
// e stands for event


btn.onclick = function createTodo(e) {
  e.preventDefault();

  if (
    todoInput.value == "" ||
    todoInput.value == " " ||
    todoInput.value == "  " ||
    todoInput.value == "   " ||
    todoInput.value == "    " ||
    todoInput.value == "     " ||
    todoInput.value == "      " ||
    todoInput.value == "       " ||
    todoInput.value == "        " ||
    todoInput.value == "         " ||
    todoInput.value == "          " ||
    todoInput.value == "           "
  ) {
    alert("Enter To-Do please");
  }

  // btn.onclick = storeData;
  else {
    var data = todoInput.value;
    window.localStorage.setItem("To-Do"+i, data); 
    i++;
    console.log("To-do list added");
    var output = document.getElementById("output");

    // rceiving data from local storage
    var data = window.localStorage.getItem("Todo");
    if (data == null) {
      output.innerText = "No data Stored";
    } else output.innerText = data;

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var newLi = document.createElement("li");
    newLi.classList.add("todo_item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var cptbtn = document.createElement("button");
    cptbtn.classList.add("cptbtn");
    cptbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cptbtn);

    var dltbtn = document.createElement("button");
    dltbtn.classList.add("dltbtn");
    dltbtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(dltbtn);

    todoList.appendChild(newDiv);
    todoInput.value = "";
  }
};


todoList.onclick = function checkBtn(e) {
  var check = e.target;
  // console.log(check);

  if (check.classList[0] == "dltbtn") {
    console.log("delete button pressed");
    var parentNode = check.parentNode;
    // console.log(parentNode);
    parentNode.remove();
  } else if (check.classList[0] == "cptbtn") {
    console.log("complete button pressed");
    var parentNode = check.parentNode;
    parentNode.classList.add("check");
  }
};
