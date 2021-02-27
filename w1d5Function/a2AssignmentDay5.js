"use strict";
const prompt = require('prompt-sync')();
const radius = +prompt("Enter the radius of the circle : ");
/*Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
*/
function areaOfCircle(rad){
    let area = Math.PI * rad *rad ;
    return area;
}



/*Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function
*/
const height = +prompt("Enter the height of the circle : ");

function volumeOfCylinder(hgt){
    let volume = areaOfCircle(radius) * height ;
    return volume;
}

console.log ("The area of Circle is : ", areaOfCircle (7))
console.log("The volume of cylinder is : ", volumeOfCylinder(height));