"use strict";
const prompt = require('prompt-sync')();
let num = +prompt("Enter a number : ");
/*
Write a JavaScript program to compute sum of all the digits in a given integer number.
*/
/* start with sum=0. lastDigit of that number will be num%10. Add lastDigit to sum in a while loop. 
Convert the given number to integer to avoid decimals and update the num as num/10 which removes the 
last digit. keep looping unless the num becomes zero.
*/

let sum = 0;
let digit;
while(num !== 0 ){
digit = num % 10;
num = parseInt( num / 10);
sum = sum + digit;
}
console.log (sum);
