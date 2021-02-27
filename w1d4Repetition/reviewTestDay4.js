"use strict";
const prompt = require('prompt-sync')();
const num = +prompt("Enter a number : ");
/*
Write a defining table and JavaScript program to check whether a number is Perfect number or
not?
Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
For example: 6 is the first perfect number
Proper divisors of 6 are 1, 2, 3
Sum of its proper divisors = 1 + 2 + 3 = 6.
Hence 6 is a perfect number.
*/
/* Defining table
Input: a number.
Output: true or false?
Process: initiate with sum = 1; loop from 2 till less than the number and if the index is a 
factor add it to sum. Finally check if sum = given number.
*/

let sum = 1;
for (let i = 2; i < num; i++){
if(num % i === 0){
    sum = sum + i;
}
}
console.log ("The sum of divisors is : ",sum);
console.log (sum === num);