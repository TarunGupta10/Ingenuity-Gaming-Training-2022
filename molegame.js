// alert('connected')
// DOM selector

var counter = 0


var h1 = document.querySelector('h1')
var startmole = document.querySelector('#mole')
var startdirt = document.querySelector('#mud')
var startbtn = document.querySelector('#start')
var points = document.querySelectorAll(".points")
var dirt = document.querySelectorAll(".dirt")
var moles = document.querySelectorAll(".mole")


function start(){
    h1.style.visibility="visible"
    startmole.style.visibility="hidden"
    startdirt.style.visibility="hidden"
    startbtn.style.visibility="hidden"
    


    for(var i=0;i<2;i++)
    points[i].style.visibility = "visible"
    for(var i=0;i<6;i++)
    dirt[i].style.visibility = "visible"
    // for(var i=0;i<6;i++)
    // moles[i].style.visibility = "visible"
    setInterval(() => {
        var r = Math.floor(Math.random()*6)
            moles[r].style.visibility = "visible"
        setTimeout(() => {
            moles[r].style.visibility = "hidden"
        }, 900); 
    }, 1000);
}
function incr(){
    counter++;
    document.getElementById("currentPoint").innerHTML = (counter);
}





