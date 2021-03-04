"use strict";

/* Q1. Write a function addend(arr) that accepts an array of numbers as parameters and returns the
sum of firs and last elements of the array.
*/

/**
 * adds first and last digit of an array
 * @param {Array} arr any array of numbers
 * @returns {number} sum of first and last digit.
 */

function addends(arr) {
     const sum = arr[0] + arr[arr.length - 1];
    return sum;
}

 const array = [10,15,20,25,30,35];
console.log("The sum is :",addends(array));

/* Q2. Write a function named getMiddle that returns the value of the middle element in an array. If
the array has an even number of elements, then this function must return the average of the
two middle elements.
Process : Check the length of array. If it is odd, find the length/2 index of the array. If it is odd 
find the sum of length/2 index and index one before that. divide the sum by 2.
*/

/**
 * finds the middle of the array.
 * @param {Array} arr 
 * @returns {number} the middle value
 */

function getMiddle(arr) {
    const len = arr.length;
    const midLen = parseInt(len / 2);
    let middle = 0;
    if (len % 2 !== 0) {
        middle = arr[midLen];
    } else {
        const midSum = arr[midLen] + arr[midLen - 1];
        middle = midSum / 2;
    }
    return middle;
}

console.log ("The middle element is :",getMiddle(array));

/* Q3. Write a function to rotate the elements in an array to the left by 1.
*/

/**
 * Removes the first element of an array and add at last.
 * @param {Array} arr an array of any type
 * @returns {Array} with one left turn 
 */
function rotateLeft(arr){
    const first = arr.shift();
    arr.push(first);
    return arr;
}

console.log(rotateLeft(array));

/* Q4. Write a function to rotate the elements in an array to the right by 1.
*/

/**
 * Removes the last element of an array and add at first.
 * @param {Array} arr an array of any type.
 * @returns {Array} with one right turn 
 */
function rotateRight(arr){

}