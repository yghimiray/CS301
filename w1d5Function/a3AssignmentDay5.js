"use strict";
const prompt = require('prompt-sync')();
const width = +prompt("Enter the width of the house : ");
const height = +prompt("Enter the height of the house : ");
const length = +prompt("Enter the length of the house : ");
const sweep = +prompt("Enter the sweep of the roof : "); // assuming both sweeps are equal

/*Write a program that calculates the total volume of a house, including the volume of the roofspace. 
Your program must allow the user to enter width, depth, height and sweep as shown in figure below. 
Write code to call and test your function. 
Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*depth
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write separate functions for each of the named formulas
*/

function houseVolume(){
    return livingVolume() + roofVolume();
}

function livingVolume(){
    return width * height * length ;
}

function roofVolume(){
return triangleArea() * length ;
}

function triangleArea(){
    let s = semiPerimeter();
    let sA = s - sweep; // (s-a)
    let sB = sA; // (s-b)
    let sC = s - width; // (s-c)
    return Math.sqrt (s * sA * sB * sC ); // √s(s−a)(s−b)(s−c)
}

function semiPerimeter (){
    return (sweep + sweep + width)/2 ;
}

console.log ("Living Volume : ", livingVolume());
console.log("Roof Volume : ", roofVolume());
console.log("Total Volume of House : ", houseVolume());