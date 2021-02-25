"use strict";

const prompt = require('prompt-sync')();
const name = prompt("Enter name of the student: ");
const credit = prompt("Enter the completed credits: ");

if (credit <= 0) {
    console.log("Enter valid credits.");
} else if (credit < 30) {
    console.log(name, "-Freshman")
} else if (credit < 60) {
    console.log(name, "-Sophomore")
} else if (credit < 90){
    console.log(name, "-Junior")
}else{
    console.log(name, "-Senior")
}