window.onload=function(){
    setInterval(() => {
      stopLoader()
    }, 3000);
    
  }
  function stopLoader(){
    document.querySelector('.wrapper').style.display="none"
    document.querySelector('.con').style.display="block"
  }


var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");
var out = window.localStorage.getItem("data");
var d = [];
var i = 1;
if (out == "" || out == null) {
  alert("Enter todo please");
} else {
  d = out.split(",");
  while (i < d.length) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var newLi = document.createElement("li");
    newLi.classList.add("todo_item");
    newLi.innerHTML = d[i];
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
    i++;
  }
}

// e stands for event
btn.onclick = function createTodo(e) {
  e.preventDefault();

  if (todoInput.value.length > 0) {
    d.push(todoInput.value);
    window.localStorage.setItem("data", d);
    var newdiv = document.createElement("div");
    newdiv.classList.add("tododiv");

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

  if (check.classList[0] == "dltbtn") {
    console.log("delete button pressed");
    var parentNode = check.parentNode;
    var data = d.indexOf(parentNode.innerText);
    d.splice(data, 1);
    window.localStorage.setItem("data", d);
    // console.log(parentNode);
    parentNode.remove();
  } else if (check.classList[0] == "cptbtn") {
    console.log("complete button pressed");
    var parentNode = check.parentNode;
    parentNode.classList.add("check");
  }
};
