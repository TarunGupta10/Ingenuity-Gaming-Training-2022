// In js functions are first class citizens
// 1 = function can be assigned to a variable
// 2 = function can be use as an argument
// 3 = function can also used as return statement

// script = functions


// callback:
// 1 = function can be use as an arguments
// 2 = 

var students = [
    {name:"Tarun",subject:"Java"},
    {name:"Astha",subject:"Python"},
    {name:"Ritu",subject:"web Dev"}
]


// callback se synchronous ho jata hai 1 tarah se like pehle admit students ho rhe fir display students chal rha then admitstudents ka clg chal rha fir call back lagaya to ab student admit hoge fir displaystudent chalega
function admitStudents(student, callback){
    setTimeout(() => {
        students.push(student)
        console.log("student have been admitted");
        callback()
    }, 3000);
}

function displayStudent() {
    setTimeout(() => {
        var str=""
        students.forEach((student) => {
            str += student.name + " "
        })
        console.log(str);
        console.log("student have been fetched");
    }, 1000);
}

var newStudent = {name:"Shruti",subject:"ReactJS"}
admitStudents(newStudent, displayStudent)
// displayStudent()