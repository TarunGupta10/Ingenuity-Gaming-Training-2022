"use strict";
function findSum(...num) {
    var sum = 0;
    num.forEach(function (number) {
        sum += number;
        console.log(sum);
        document.getElementById("p1").innerHTML = "Sum of First 10 number is : " + sum
    });
    return sum;
}
findSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
