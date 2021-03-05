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

const array = [10, 15, 20, 25, 30, 35];
console.log("The sum is :", addends(array));

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

console.log("The middle element is :", getMiddle(array));

/* Q3. Write a function to rotate the elements in an array to the left by 1.
*/

/**
 * Removes the first element of an array and add at last.
 * @param {Array} arr an array of any type
 * @returns {Array} with one left turn 
 */
function rotateLeft(arr) {
    const first = arr.shift();
    arr.push(first);
    return arr;
}

// console.log(rotateLeft(array));

/* Q4. Write a function to rotate the elements in an array to the right by 1.
*/

/**
 * Removes the last element of an array and add at first.
 * @param {Array} arr an array of any type.
 * @returns {Array} with one right turn 
 */
function rotateRight(arr) {
    const last = arr.pop();
    arr.unshift(last);
    return arr;
}
// console.log(rotateRight(array));

/* Q5. Modify rotate functions to rotate array by n times where, n is the second parameter passed in
the function (optional)
*/

/**
 * Removes the last element of an array and add at first n times.
 * @param {Array} arr an array of any types.
 * @param {int} n rotate n times
 * @returns {Array} with n times right turn 
 */
function rotateNRight(arr, n) {
    while (n > 0) {
        const last = arr.pop();
        arr.unshift(last);
        n--;
    }
    return arr;
}
console.log(rotateNRight(array,3));

/*6. Write a JavaScript program that number input from the user at once as comma separated values
and stores it into an array and do following operations
a. Filters out negative values
b. Maps the filtered elements to sum of its digits (optional)
c. Reduce to get sum of all the elements (optional)
*/

const input = "1, 2, 3, 4, 5"; 
const inputArray =  input.split(",");
console.log(inputArray);


/* 7.    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements 
with values higher or equal to a and lower or equal to b and return a result as an array. 

describe("filterRange", function () {
    it("tests [0, 100, 3, 6, -555], 6, 160",  function () {
        assert.strictDeepEqual(arrays.filterRange([0, 100, 3, 6, -555], 6, 160), [100, 6]);
    });
});
*/

/**
 * 
 * @param {Array} arr an array of number.
 * @param {int} a the lower limit
 * @param {int} b the upper limit
 */

function filterRange(arr, a, b){
let arr1 =[];
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= a && arr[i] <= b){
        arr1.push(arr[i]);
    }
}
return arr1;
}

const test = [0, 100, 3, 6, -555]
console.log(filterRange(test,6,160));

/* Q8. Write a function that takes an array of strings and returns array of palindrome strings only.
*/

/**
 * 
 * @param {Array} arr an array of string.
 */

function filterPalindromes(arr){
let palinArr = [];
for(let i = 0; i < arr.length; i++){
    if(isPalindrome(arr[i])){
        palinArr.push(arr[i]);
    }
}
return palinArr;
}

// program to check if the string is palindrome or not

/**
 * 
 * @param {string} str a string
 * @returns {boolean} palindrome or not.
 */

function isPalindrome(str) {
    const len = str.length;
   for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const testPalindrome = ["abc", "madam", "pqr", "radar"];
console.log(filterPalindromes(testPalindrome));


/* Q9. Do matrix addition and print result on matrix format for following:
*/

/**
 * 
 * @param {Array} arr1 first array of numbers
 * @param {Array} arr2 second array of numbers
 */

function matrixAddition(arr1,arr2){
let arr3 =[[],[]];
for(let i = 0; i < arr1.length; i++){
    for (let j = 0; j< arr1[0].length; j++){
        arr3[i][j] = arr1[i][j]+arr2[i][j];
           }
}
return arr3;
}

const arr1 =[[0,1,2],[9,8,7]];
const arr2 =[[6,5,4],[3,4,5]];
console.log(matrixAddition(arr1,arr2));

