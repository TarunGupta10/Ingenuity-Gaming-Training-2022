// ES5 based fn

var add = function (a, b) {
  return a + b;
};
console.log(add(5, 10));

// ES6 based fn => fat Arrow fn (makes short syntax)
// variation-3
var add = (a, b, c) => a + b + c;
console.log(add(5, 15, 20));

// variation-1
// var sayHello = () => console.log("Hello... Tarun");
var sayHello = () => {
  console.log("Hello... Tarun");
  console.log("Hello... Astha");
  console.log("Hello... Ritu");
  console.log("Hello... Shruti");
};
sayHello();

// variation-2
var sq =(a)=> console.log("Result: " + a*a);
sq(5)


var myArr = [1,2,3,4]
myArr.forEach((a)=>console.log(a*10));



