// ES6
class Training{
    // constructor
//     constructor(a,b,c = "online"){
//     this.trainingName = a
//     this.trainingDuration = b
//     this.trainingStatus = c
// }



    constructor(trainingName,trainingDuration,trainingStatus) {//formal arguments
    this.trainingName = trainingName
    this.trainingDuration = trainingDuration
    this.trainingStatus = trainingStatus
    }

    // member function
    displayDetails(){
        return ` Training Name : ${this.trainingName}\n Training Duration : ${this.trainingDuration} \n Training Status : ${this.trainingStatus} \n`
    }
}

// object Creation
let IG = new Training("Frontend",120,"Offline")
let Google = new Training("ReactJS",120,"Online")

IG.trainingName = "HTML, CSS, JS, TS"   // you can change it afterwards 

console.log(IG.displayDetails());
console.log(Google.displayDetails());