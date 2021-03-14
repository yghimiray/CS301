"use strict";
/*eslint-disable*/

/* Q1. A porcupine number is a prime number whose last digit is 9 and the next prime number that
follows it also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. it ends in a 9
c. The next prime number after it is 149 which also ends in 9.
Write a method named findPorcupineNumber which takes an integer argument n and
returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
would return 139 (because 139 happens to be the first porcupine number) and so would
findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which
is the second porcupine number.
*/



/* Q2. Given an array of integers nums and an integer target, return indices of the two numbers such
that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice. You can return the answer in any order
*/

/* Defining Table:
Input: an array of numbers and a target number.
Output: an array of indices of two numbers whose sum is equal to target, else empty array.
Process: 
--Start with an empty array, two loops each number adds to all the other numbers in the array.
--To avoid using same element twice, we skip the step if inner index and outer index are same.
--compare sum of two numbers with target. If they are equal, add the index in the new array.
*/

function twoSumTarget(arr, target) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (arr[i] + arr[j] === target) {
                    arr1.push(i);
                    arr1.push(j);
                }
            }
        }
    }
    return arr1;
}

// const nums = [3, 2, 3, 7, 3, 1, 15, 1, 3];
// const target = 22;
// console.log(twoSumTarget(nums, target));

/* Q3. . Write a function named mostFrequent() that given an array, finds the most frequent element
in it. If there are multiple elements that appear maximum number of times, returns any one of
them.
*/

/* Defining Table:
Input: an array of any type.
Output: most frequent element in the array.
Process: 
--Start with max = 0 and frequent element = first element of the array.
--compare each element with others, count them and update max. Also update frequent element.
-- return frequent element.
*/

function mostFrequent(arr) {
    let max = 0;
    let freqElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                if (count > max) {
                    max = count;
                    freqElement = arr[i];
                }
            }
        }
    }
    return freqElement;
}

// const arrFreq = ["a", "b", "c", "b", "b"];
// console.log(mostFrequent(arrFreq));

/* Q4. . Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
If there are more than one pair, return any pair.
For e.g., [4,2, -1,3,-2,-3] → [2,-2]
*/

/* Defining Table:
Input: an array of numbers.
Output: an array of indices of two numbers whose sum is equal to 0, else empty array.
Process: 
--Start with an empty array, two loops each number adds to all the other numbers in the array.
--To avoid using same element twice, we skip the step if inner index and outer index are same.
--compare sum of two numbers with 0. If the sum is zero, add the index in the new array.
*/

function sumNearZero(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if ((arr[i] + arr[j]) === 0) {
                    arr1.push(arr[i]);

                }
            }
        }

    }
    return arr1;
}

// const sumZero = [4, 2, -1, 3, -2, -3];
// console.log(sumNearZero(sumZero));

/* Q5. Write a function, that given two arrays representing two non-negative integers with digits, adds
the two numbers, and return it as an array.
*/

/* Defining Table:
Input: Two arrays of numbers.
Output: an array of digits of the sum of two arrays, considering two arrays as two numbers .
Process: 
--convert the entire arrays into string (both).
-- add the two strings after parsing them to number.
--make an array of digits of the sum using % 10 and divide by 10 in a while loop 
unless the number reduces to zero.
*/


function addArray(arr1, arr2) {
    let str1 = arrayToString(arr1); 
    let str2 = arrayToString(arr2);
    let sum = Number(str1) + Number(str2);
    let arr = ArrayOfDigits(sum);
return arr;
}

function ArrayOfDigits(num){
    let arr = [];
    let lastDigit;
    while(num > 0){
        lastDigit = num % 10;
        num = Math.floor (num / 10) ;
        arr.unshift(lastDigit);
    }
    return arr;
}


function arrayToString(arr){
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    return str;
}

// const arr1 = [3,1,4,2];
// const arr2 = [4,6,5];
// console.log(addArray(arr1,arr2));

/* Q6. 6. Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 and 0
Input                           Output
a="11", b="1"                    "100"
a="1010", b ="1011"             "10101"
*/

/* Defining Table:
Input: Two binary numbers as string.
Output: a binary string of sum of two binary numbers .
Process: 
--convert both the binary strings into numbers.
-- add the two numbers
--conver the sum back to binary string by % 2 and adding them to an empty string.
*/


function binarySum(binary1, binary2){
let num1 = binaryToNum(binary1);
let num2 = binaryToNum(binary2);
let sum = num1 + num2;
let sumBinary = numToBinary(sum);
return sumBinary;
}

function numToBinary(num){
    let binary = "", digit;
    while(num > 0) {
digit = num % 2 ;
num = Math.floor(num / 2);
binary =  digit + binary;
    }
    return binary;
}

function binaryToNum(binary){
    let num = 0, digit;
    let len = binary.length-1;
    for(let i = 0; i <= len; i++){
digit = Number(binary[i]) * Math.pow(2, len-i);
num = num + digit;
    }
    return num;
}

console.log(binaryToNum("1011"));
console.log(binarySum("1011", "1011"));
