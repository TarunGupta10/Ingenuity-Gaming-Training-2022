// import { message } from "./library.js"
// import { display } from "./library.js"
// import { Emp } from "./library.js"



// import { message,display,Emp } from "./library.js"

import * as Data from "./library.js"

import ImpMsg from "./library.js"


console.log(Data.message);

var name = prompt("Enter Your Name")
var data = Data.display(name)
console.log(data);


let emp1 = new Data.Emp("Tarun", 123564,"Intern")
emp1.dispDetails()

ImpMsg()