"use strict";
const prompt = require('prompt-sync')();

/*Write a program that asks user to enter weather for today and print
"Get an umbrella" if weather is rainy.
*/
const weather = prompt("How is the weather today ? ");
if (weather === "rainy") {
    console.log("Get an Umbrella.");
}

/*Write a program that asks user to enter a number between 1 to 10,
and print "Bingo!" if user enters 7 otherwise prints "Try again.".
*/
const numberGuess = +prompt("Enter your guess number between 1 and 10 :");
if (numberGuess === 7) {
    console.log("Bingo");
} else {
    console.log("Try again. ");
}
