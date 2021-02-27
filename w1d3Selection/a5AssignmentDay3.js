"use strict";

const prompt = require('prompt-sync')();
const age = +prompt("Enter the age: ");
const season = prompt("Enter the season : ");

if (age <= 5) {
    if (season === "summer" || season === "fall") {
        console.log("You should ge to bed at 8:30 PM. ");
     } else {
        console.log("You should ge to bed at 8:00 PM. ")
    }
} else if (age <= 12) {
    if (season === "summer" ) {
        console.log("You should ge to bed at 9:30 PM. ");
     } else {
        console.log("You should ge to bed at 8:30 PM. ")
    }
}else {
    if (season === "summer") {
        console.log("You should ge to bed at 10:30 PM. ");
     } else {
        console.log("You should ge to bed at 9:30 PM. ")
    }
}