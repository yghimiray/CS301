"use strict";
/*•Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false
*/

/**
 * prime number is divisible by either 1 or by itself only.
 * @param {int} num number to be checked.
 * @returns {boolean} whether prime or not.
  */


function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


/*Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not.
*/
const prompt = require("prompt-sync")();
let num = +prompt("Enter a number : ");
console.log(checkPrime(num));