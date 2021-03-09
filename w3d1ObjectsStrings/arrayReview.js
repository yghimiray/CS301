"use strict";

/**
 * check the minimum among the elements of array.
 * @param {Array} arr an array of numbers 
 * @returns {number} a mimnimum number.
 */

function findMin(arr){
let min = arr[0];
for(const item of arr){
    if(item < min){
        min = item;
    }
}
return min;
}

let array = [11,12,3,5,4,6,12];
let array1 = [1,0,9,7,8,6,0]
// console.log(findMin(array));

/**
 * 
 * @param {Array} arr an array of number
 * @returns {number} sum of odd indexed elements
 */

function sumOddIndicesValues(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !==0){
            sum = sum + arr[i];
        }
    }
    return sum;
}

// console.log(sumOddIndicesValues(array));


/**
 * 
 * @param {Array} arr1 first array of numbers 
 * @param {Array} arr2 second array of numbers
 * @returns {Array} third array with sum of two arrays.
 */
function sumArrays(arr1, arr2){
    let arr3 = [];
    for(let i = 0 ; i < arr1.length; i++){
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
}

console.log(sumArrays(array,array1));