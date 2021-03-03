"use strict";
const prompt = require('prompt-sync')();
const number = +prompt("Enter a number : ");

/*Write a program with functions that reverse the given number and checkPrime
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

console.log (reverseNumber(number));