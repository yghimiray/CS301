"use strict";
const prompt = require('prompt-sync')();
let num = +prompt("Enter a number : ");
/*
Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input.
*/

/* Defining table
Input : A number to represent the fibonacci terms
Output : a fibonacci series.
Processing : start with firstNumber n1 = 0 and secondNumber n2= 1, 
In a loop, display n1. thirdNumber n3 = n1 + n2. Assign n1 = n2 and n2= n3 and do the process again until 
we reach the term specified above (num).
*/

let n1 = 0, n2 = 1, n3;
for (let i = 1 ; i <= num ; i++){
    console.log (n1);
    n3 = n1 + n2 ;
    n1 = n2 ;
    n2 = n3;
}