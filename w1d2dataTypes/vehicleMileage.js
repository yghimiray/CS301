"use strict";

const prompt = require ('prompt-sync')();
const beginOdometer = prompt ("Enter beginning Odometer : ");
const endOdometer = prompt ("Enter ending Odometer : ");
const gasGallon = prompt ("Enter gallons of gas used : ");

const diffOdometer = endOdometer-beginOdometer;
const milesPerGal = diffOdometer/gasGallon;
console.log ( milesPerGal);