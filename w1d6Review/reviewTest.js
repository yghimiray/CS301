"use strict";
const prompt = require('prompt-sync')();
const number = +prompt("Enter a number : ");

/*Write a program with functions that reverse the given number and checkPrime
*/

/* Defining Table
Input : a number ;
Output : a reversed number for given number and check whether it is prime or not
Process: 
--Start with reversedNumber = 0 globally
--make a function to reverse the given number. 
--Do while loop (number > 0). 
--multiply reversedNumber by 10, 
--find lastdigit by num%10, 
--update num as quotient of num/10;
-- add last digit to reversedNumber
--make separate function to checkPrime
*/

let revNum = 0;
function reverseNumber(num){
   while(num>0){
revNum = revNum * 10 ;
let lastDigit = num % 10;
 num = parseInt (num / 10);
 revNum = revNum + lastDigit ;

   }
   return revNum;
}

function isReversePrime(revNum) {
    for (let i = 2; i < revNum; i++) {
        if (revNum % i === 0) {
            return false;
        }
    }
return true;
}


console.log (reverseNumber(number));