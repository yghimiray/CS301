const prompt = require('prompt-sync')();

let weather = prompt("Please enter weather outside");
let temp = prompt("Please enter current temperature");
if (weather === 'sunny') {
    if (temp < 80) {
        console.log("Good day for outdoor running");
    } else {
        console.log("Better use trade mill at home.");
    }
}