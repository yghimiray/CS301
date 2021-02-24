"use strict";

const prompt = require ("prompt-sync")();
const radius = prompt("Enter radius :");
const height = prompt ("Enter height");

const volume = Math.PI*Math.pow(radius,2)*height;
console.log(volume);

const x1 = prompt ("Enter x1 coordinate: ");
const x2 = prompt ("Enter x2 coordinate: ");
const y1 = prompt ("Enter y1 coordinate: ");
const y2 = prompt ("Enter y2 coordinate: ");
/*const xDiff =(x2-x1);
const yDiff = (y2-y1);
const xDiffSqr= Math.pow(xDiff,2);
const yDiffSqr = Math.pow(yDiff,2);
const sumSqr = xDiffSqr + yDiffSqr;
const dist = Math.sqrt(sumSqr);
console.log(dist);
*/
 const distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow( (y2-y1),2));
console.log (distance);
