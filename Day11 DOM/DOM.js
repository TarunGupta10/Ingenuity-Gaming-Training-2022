// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.title);

// document.title = "DOM"

var x = document.getElementById("Head1")
console.log(x);

var y = document.getElementsByClassName("para")
console.log(y);

var z = document.getElementsByTagName("ul")
console.log(z);

var a = document.querySelector("#h2")
console.log(a);

// it will select first para
var b = document.querySelector(".para")
console.log(b);
var c = document.querySelectorAll(".para")
console.log(c);
// for selecting 2nd para
var d = document.querySelectorAll(".para")
console.log(d[1]);


// DOM Manipulation

x.style.backgroundColor = "skyblue"
x.innerText = "Tarun Gupta 😁"

// b.style.visibility = "hidden"
 
// d[1].style.fontFamily = "arial"
// d[1].style.color = "red"
// d[1].style.border = "5px solid black"

// var newLi  = document.createElement("li")
// var txtcon = newLi.textContent = ""


for(var i=0;i<c.length;i++)
    c[i].style.color="blue"
// c.style.color = "blue"

