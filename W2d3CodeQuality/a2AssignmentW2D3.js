"use strict";
const prompt = require("prompt-sync")();
const radius = +prompt("Enter the radius of the circle : ");
/*Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
*/
/* Defining Table
Input: radius of a circle and height of the cylinder
Outpur: area of circle and volume of cylinder
Process:
make a function of areaOfCircle which takes radius as parameter. The area of circle is PI* square 
of radius, which returns the area 
make a function of volumeOfCylinder which takes height as parameter. Volume of cylinder is 
areaOfCircle * height.
*/

/**
 * calculates the area of a circle. 
 * @param {int} rad radius of a circle. 
 * @returns {int} area of a circle.
 */
function areaOfCircle(rad){
    let area = Math.PI * rad *rad ;
    return area;
}



/*Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function
*/
const height = +prompt("Enter the height of the circle : ");

/**
 * calculates the volume of a cylinder.
 * @param {int} hgt  height of the cylinder.
 * @returns {int} volume of a cylinder.
 */
function volumeOfCylinder(hgt){
    let volume = areaOfCircle(radius) * hgt ;
    return volume;
}

console.log ("The area of Circle is : ", areaOfCircle (7));
console.log("The volume of cylinder is : ", volumeOfCylinder(height));


