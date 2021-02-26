"use strict";
const prompt = require('prompt-sync')();
const num = +prompt("Enter a number : ");
/*
Write a Java program to calculate the factorial value of a given number. E.g., factorial 4 =
4*3*2*1 = 24
*/
let factorial = 1;
for ( let i = 1; i <= num; i++){
    factorial = factorial * i ;
}
console.log (factorial);