// ES6
class Training{
    // constructor
    constructor(a,b,c = "online"){
    this.trainingName = a
    this.trainingDuration = b
    this.trainingStatus = c
}

    // member function
    displayDetails(){
        // return ` Training Name : ${this.trainingName}\n Training Duration : ${this.trainingDuration} \n Training Status : ${this.trainingStatus} \n`
        console.log( ` Training Name : ${this.trainingName}\n Training Duration : ${this.trainingDuration} \n Training Status : ${this.trainingStatus} \n`)
    }
}

class InCampus extends Training{
    // calling constructor
    constructor(a,b,c,d){
        super(a,b,c)
        this.rollNo = d
    }
    displayDetails(){
        console.log(" Chlid Class Function");
        super.displayDetails()
        
    }
}

let stu1 = new InCampus("Flutter",40,"Online",47)
stu1.displayDetails()