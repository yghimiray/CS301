"use strict";

const prompt = require('prompt-sync')();
const weather = prompt("How is the weather outside? hot,rain,snow,other?");
switch (weather) {
    case "hot": console.log("You need to wear sandals."); break;
    case "rain": console.log("You need to wear galoshes."); break;
    case "snow": console.log("You need to wear boots."); break;
    default: console.log("You need to wear sneakers.");
}