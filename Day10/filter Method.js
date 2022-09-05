// var ages = [65,25,38,43,59]
// var res = ages.filter(filterAge)

// function filterAge(age){
//     return age > 18
// }

// console.log(res);

var ages = [65,25,38,43,59]
var res = ages.filter((age)=> age>18)
console.log(res);


// Example 2

let cities = [
    {name:"Agra", population:1264562},
    {name:"Mathura", population:215456},
    {name:"noida", population:565456},
    {name:"Delhi", population:865456},
];

// var bigCities=[];
// for(var i=0;i<cities.length;i++){
//     if(cities[i].population > 30000){
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities);

bigCities=cities.filter((city)=> city.population > 30000).sort((n1,n2)=> n2.name-n1.name).reverse();
console.log(bigCities);







