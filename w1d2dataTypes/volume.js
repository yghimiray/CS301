"use strict";

const prompt = require ("prompt-sync")();
/*const radius = prompt("Enter radius :");
const height = prompt ("Enter height");

const volume = Math.PI*Math.pow(radius,2)*height;
console.log(volume);
*/
const x1 = prompt ("Enter x1 coordinate: ");
const x2 = prompt ("Enter x2 coordinate: ");
const y1 = prompt ("Enter y1 coordinate: ");
const y2 = prompt ("Enter y2 coordinate: ");

const distance = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
console.log (distance);
