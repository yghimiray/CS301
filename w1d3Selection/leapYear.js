"use strict";

const prompt = require('prompt-sync')();
const year = +prompt("Enter the year: ");


if (year % 4 !== 0) {
    console.log("Not Leap ");
} else if (year % 100 !== 0) {
    console.log("Yes Leap")
} else if (year % 400 === 0) {
    console.log("Yes Leap")
}else {
        console.log("Not Leap")

    }