//Ques - 1
var today = new Date();
var date1 = "Today Date : " + today.getDate() + "-" + (today.getMonth()+1) +"-"+today.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date2 = "Today Day : " + weekday[today.getDay()];
document.write(date1 );
document.write(  "<br>" + date2);

var name = window.prompt("Enter your name: ");
document.write("<br>" + "Your name is " + name);

var first = parseInt(window.prompt("Enter first num"));
var second = parseInt(window.prompt("Enter second num"));
var Addition = first + second;
var Subtraction = first - second;
var Multiplication = first * second;
var Division = first / second;

document.write("<br>" + "<i> Addition is -> </i>" + Addition);
document.write("<br>" + "<i>  Subtraction is -> </i>" + Subtraction);
document.write("<br>" + "<i> Multiplication is -> </i>" + Multiplication);
document.write("<br>" + "<i> Division is -> </i>" + Division);