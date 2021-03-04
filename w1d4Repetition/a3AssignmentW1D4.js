"use strict";
const prompt = require('prompt-sync')();
let num = +prompt("Enter your PIN : ");
/*
Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.”
*/

const pin = 1234;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        console.log("Sorry but you have been locked out.");
        break;
    }
    if (num === pin) {
        console.log("Correct, Welcome back.");
        break;
    } else {
        console.log("Incorrect, try again. ")
            + prompt("Enter your PIN : ");
    }
    
}