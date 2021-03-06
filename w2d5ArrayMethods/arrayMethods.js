"use strict";

/* Q1. Write a function, isArrayEqual, that returns true if two arrays have === elements, else false;
*/

/**
 *  Check if two arrays are equal
 * @param {Array} arr1 first array of any type;
 * @param {Array} arr2 second array of any type;
 * @returns {boolean} either equal or not
 */

function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    }
    return true;
}

const ar1 = [1, 2, 3];
const ar2 = [1, 2, 1];

console.log(isArrayEqual(ar1, ar2));

/* Q2. Write a function that checks if an array is palindrome by using push and pop array methods to
reverse the array and then isArrayEqual method you wrote for 1.
*/

/**
 * 
 * @param {Array} arr an array
 * @returns {Boolean} true if palindrome
 */

function isPalindrome(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return isArrayEqual(arr, arr1);
}

console.log(isPalindrome(ar1));

/* Q3. Write a function that transforms a given array as following. Use appropriate array methods.
Input (Array)
['Quick', 'Brown', 'Fox']
Output (String)
"Fox_Brown_Quick"
*/

/**
 * 
 * @param {Array} arr 
 * @param {string} seperator 
 * @returns {string} a joined string
 */

function invertArray(arr, seperator = "_") {
    let reverseArray = arr.reverse();
    let str = reverseArray.join(seperator);
    return str;
}

console.log(invertArray(["Quick", "Brown", "Fox"]));

/* Q4. Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a
value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.
*/

// /**
//  * 
//  * @param {Array} arr an array 
//  * @param {string} value a value.
//  * @returns {Boolean} true or false.
//  */
// function searchValue(arr, value) {
//     for (let item of arr) {
//         if (item === value)
//             return true;
//     }
//     return false;
// }


// /**
//  * 
//  * @param {Array} arr an array
//  * @param {string} value a string
//  * @returns {number} an index of given value
//  */
// function firstIndex(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value)
//             return i;
//     }
//     return -1;
// }


// /**
//  * 
//  * @param {Array} arr an array
//  * @param {string} value a string 
//  * @returns {number} a last index of given value
//  */
// function lastIndex(arr, value) {
//     for (let i = arr.length-1; i >= 0; i--) {
//         if (arr[i] === value)
//             return i;
//     }
//     return -1;
// }


function enhancedIncludes(arr, value){
let arr1 = [arr.includes(value), arr.indexOf(value), arr.lastIndexOf(value)];
// let arr1 =[searchValue(arr,value),firstIndex(arr,value),lastIndex(arr,value)];
return arr1;
}

console.log(enhancedIncludes(["Quick", "Fox","Brown", "Fox"], "Fox"));

/* Q5. Write a function that returns reversed copy of a given array (original array should
remain intact). Do this without using reverse method, instead use splice and slice
methods.
*/


function revBySlice(arr){
let arr1 = [];
for(let i = arr.length-1; i >= 0; i--){
    arr1.concat(arr.slice(i,i+1));
}    
return arr1;
}

console.log(revBySlice(ar1));