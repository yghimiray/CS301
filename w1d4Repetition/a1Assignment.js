"use strict";
const prompt = require('prompt-sync')();
const num = +prompt("Enter a number : ");
/*
Your logic should be based on factor count. i.e., prime number will have 0 factors (not
counting 1 and itself), while composite will have 1 or more factors.
*/

// let isPrime;
// let factor = 0;
// for (let i =2; i < num; i++){
//     if(num%i === 0){
// factor++;
//     }
// }
// console.log( isPrime = factor === 0 , "FactorCount : ",factor);

/* This time think of a logic to use break statement so that you can break early from the
loop, right when you know number is not prime. For example, you know number 8 is not
prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
testing is not required. If the number is prime loop will proceed until the end.
*/
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);
