"use strict";

let sam1 = {
    name: "Sam",
    age: 10,
};

let sam2 = {
    name: "Sam",
    age: 10,
};

let john = {
    name: "John",
    age: 10,
};


/**
 * 
 * @param {Object} obj1 first object 
 * @param {Object} obj2 second object
 * @returns {Boolean} whether two objects are equal or not.
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}

console.log(isPersonEqual(sam1,john));



/*Write a program that keeps on asking for user input and prints it, until
user types the word "stop" (without quotes). "Stop" word can be in
any case (small, capital or mixed)
*/

const prompt = require ("prompt-sync")();
let input ;
do{
    input = prompt("Say something :")
    input= input.toLowerCase();
}while(input !== "stop");


/*Write a function that takes a comma separated string of words and
converts it into an array of words and prints in reverse order
*/






/*• Write a function to replace the first occurrence of "for" in an input
string with 4.
input  : Thanks for joining us. 
output : Thanks 4 joining us.
*/