"use strict";
let nam = prompt("Enter Your name");
const nm = document.getElementById("p1");
if (nm && nam) {
    nm.innerHTML = "Your Name is : " + nam;
}
