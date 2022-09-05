function findSum( ...num:number[])
{ 
    var sum = 0;
    num.forEach(function(number)
    {
        sum += number;  
        console.log(sum);   
    });
    return sum;
    
}
findSum(1,2,3,4,5,6,7,8,9,10)
