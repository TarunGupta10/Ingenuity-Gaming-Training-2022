export default function (){
    console.log("Warningggg.....");
}


// export var message = "This is module Concepts"
var message = "This is module Concepts"

// export let display =(name)=>{
let display =(name)=>{
    return `Hi... ${name} 😁 Welcome to IG!`
}

// export class Emp{
class Emp{
    constructor(name,id,designation){
        this.name = name
        this.id = id
        this.designation = designation
    }
    dispDetails(){
        console.log(`Enployee Name : ${this.name}\nEmployee ID: ${this.id}\nEnployee Designation: ${this.designation}`);
    }
}


export {message, display, Emp}