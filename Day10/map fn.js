var myArr = [1,2,3,4,5]
var newArr = myArr.map((i)=>(i*10));
console.log(newArr);

let users = [
    {firstName:"Tarun", lastName:"Gupta"},
    {firstName:"Astha", lastName:"Chauhan"},
];
var fullName = users.map((u)=>{
    return u.firstName + " " + u.lastName;
});
console.log(fullName);
