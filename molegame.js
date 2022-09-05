// alert('connected')
// DOM selector
// document.getElementById('song1').play() = true;

// $(document).ready(function(){
//     document.querySelector('#song1').setAttribute('src', './images/Song.mp3' + Math.random());
// })

// window.onload = function() {
//     document.getElementById("song1").play();
// }

// setTimeout(function() {
//     document.getElementById("song1").play();
//     console.log("Audio");
// }, 1000);

var counter = 0;

var h1 = document.querySelector("h1");
var startmole = document.querySelector("#mole");
var startdirt = document.querySelector("#mud");
var startbtn = document.querySelector("#start");
var points = document.querySelectorAll(".points");
var timer = document.querySelectorAll(".timerr");
var dirt = document.querySelectorAll(".dirt");
var moles = document.querySelectorAll(".mole");

function start() {
  h1.style.visibility = "visible";
  startmole.style.visibility = "hidden";
  startdirt.style.visibility = "hidden";
  startbtn.style.visibility = "hidden";

  for (var i = 0; i < 2; i++) points[i].style.visibility = "visible";

  for (var i = 0; i < 6; i++) dirt[i].style.visibility = "visible";

  // for(var i=0;i<6;i++)
  // moles[i].style.visibility = "visible"
  var si = setInterval(() => {
    var r = Math.floor(Math.random() * 6);
    moles[r].style.visibility = "visible";
    setTimeout(() => {
      moles[r].style.visibility = "hidden";
    }, 900);
  }, 1000);

//   for (var i = 0; i < 2; i++) timer[i].style.visibility = "visible";

}



function incr() {
  counter++;
  document.getElementById("currentPoint").innerHTML = counter;
}
