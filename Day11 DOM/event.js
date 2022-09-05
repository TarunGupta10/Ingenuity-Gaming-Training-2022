// <!-- Event Handling Mechanism -->
// <!-- 1 = inline event Handling
// 2 = handle event using its reference
// 3 = using addeventlistener -->

function perform(){
// alert("Button clicked");
console.log("clicked");
console.log("clicked");
console.log("clicked");
console.log("clicked");
console.log("clicked");
console.log("clicked");
}


var btn = document.querySelector("button")
console.log(btn);
// way 2 using reference

btn.onmouseover = function(){
    document.querySelector(".para").style.backgroundColor = "yellow"
}

btn.onmouseleave =()=>
    (document.querySelector(".para").style.backgroundColor = "skyblue")


// way 3 using addeventlistener
btn.removeEventListener



btn.addEventListener("click",task1)
function task1() {
    document.getElementById("Head1").style.display="none";
}



