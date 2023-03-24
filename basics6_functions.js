//Function is block of code which will perform some activity

//Normal Way To create function
function add(a,b)
{
    return a+b
}
console.log(add(1,2))


//Way to create anonymous function 
//anonymous function don't have name

let sum=function(a,b)
{
    return a+b
}
console.log(sum(1,2))


// We can write anonymous function in in single line as bloew
let sumofnum=(a,b) => a+b  //Everything is single line using => Fat Pipe Operator

console.log(sumofnum(1,2))