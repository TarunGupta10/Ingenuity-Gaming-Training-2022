
//Ques - 1
var today = new Date();
var date1 = "Today Date : " + today.getDate() + "-" + (today.getMonth()+1) +"-"+today.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date2 = "Today Day : " + weekday[today.getDay()];
document.write(date1 );
document.write(  "<br>" + date2);


// Ques = 2

document.body.style.border="3px soild black";
document.body.style.backgroundColor="burlywood";
document.body.style.margin="220px 0px 0px 580px";
document.body.style.fontSize="28px";
document.body.style.fontWeight ="bold";
document.body.style.color="darkgreen";


var name = window.prompt("Enter your name");
document.write("<br>" + "Your name is : " + name.fontcolor("red"));



// Ques = 3

var first = parseInt(window.prompt("Enter first num"));
var second = parseInt(window.prompt("Enter second num"));
var Addition = first + second;
var Subtraction = first - second;
var Multiplication = first * second;
var Division = first / second;

document.write("<br>" + "<i> Addition is = </i>" + Addition);
document.write("<br>" + "<i>  Subtraction is = </i>" + Subtraction);
document.write("<br>" + "<i> Multiplication is = </i>" + Multiplication);
document.write("<br>" + "<i> Division is = </i>" + Division);

// Ques = 4
// node Assignment-6.js

document.write(  "<br>" + "Execution Command : node Assignment-6.js ");