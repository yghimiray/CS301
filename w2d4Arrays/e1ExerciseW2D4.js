"use strict";

/* Write code to create an array named scores and fill it with 5 test
scores 10, 20, 30, 40 and 50.
*/

const scores = [10, 20, 30, 40, 50];

/* Now write a function named findAverage, that takes an array as an
argument and return average of the array values.
*/

/**
 * find the sum of elements and find the average
 * @param {number} arr an array 
 * @returns {number} avg ; the average value.
 */
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

/*Call findAverage function passing array you created in step1 and save
the return result in a variable, average.
*/

let average = findAverage(scores);

/*Print the average, it should be 30 for this example. 
*/

console.log(average);

/*Create a second array filled with 10 random values between 0 to 10
and find the average of the array values
*/

let randomNumbers = [];
for (let i = 0; i < 10; i++){
    randomNumbers[i] = Math.random() * 10;
}

console.log("Random Numbers" , randomNumbers);
console.log ("average of random numbers :" , findAverage(randomNumbers));

/*Write a function, invert, that will reverse an array and output the
reversed elements as a string with an optional separator.
*/


/**
 * 
 * @param {Array} arr 
 * @param {string} seperator 
 * @returns {string} a joined string
 */

function invert(arr,seperator = "..."){
let reverseArray = arr.reverse();
let str = reverseArray.join(seperator);
return str;
}

console.log(invert(scores,"<<>>"));