function sayHi(){
    return new Promise((resolve, reject)=>{
        console.log("let me check my Calender....");
        // const err = false;
        // if(!err){
        //     resolve("ok I will meet you")
        // }
        // else{
        //     reject("sorry I can't meet you")
        // }
        setTimeout(() => {
           
            const err = false;
        if(!err){     //    API Call
            resolve("ok I will meet you")
        }
        else{
            reject("sorry I can't meet you")
        }
        }, 3000);
    })
}

// console.log(sayHi());

// consume the promise
sayHi()
.then((val) => console.log(val))
.catch((err) => console.log(err))