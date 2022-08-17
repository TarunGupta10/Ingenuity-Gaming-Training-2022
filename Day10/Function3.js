// var obj = {
//     firstName : "Tarun",
//     lastName : "Gupta",
//     // using function to create method od Object
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     },
// };

// console.log(obj.fullName());

// var person1 = {
//     firstName:"Astha",
//     lastName:"Chauhan",
// };
// console.log(obj.fullName.call(person1));

var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
  },
};

var person1 = {
  firstName: "Astha",
  lastName: "Chauhan",
};
console.log(person.fullName.call(person1, "Uttarakhand", "India"));


// Apply method

var person2 = {
    firstName: "Tarun",
    lastName: "Gupta",
  };

  console.log(person.fullName.apply(person2, ["Agra", "India"]));

