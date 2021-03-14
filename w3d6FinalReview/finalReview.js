"use strict";

/* eslint-disable*/

/* Q1. Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
as an argument and returns true if the sum of all the prime elements in the given array is
even otherwise returns false. If the array is empty or if the array does not contain any
prime element it should return false.
*/

function isSumOfPrimesEven(arr) {
    if (sumPrime(arr) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function sumPrime(arr) {
    let sum = 0;
    for (let element of arr) {
        if (isPrime(element)) {
            sum = sum + element;
        }
    }
    return sum;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// function isPrime1(num) {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) 
//       return false;
//     return num > 1;
//   }


const array1 = [1, 2, 2, 3, 9]
console.log(sumPrime(array1));
console.log(isSumOfPrimesEven(array1));

/* Q2. An array is called a perfectly odd array if every element at the odd indices of the array is
also odd. Write a function named isPerfectlyOdd that takes an array of integers as a
parameter and checks whether it is perfectly odd. Return false if the array is an empty array.
*/

function isPerfectlyOdd(arr) {
    for (let i = 1; i < arr.length; i = i + 2) {
        if (isEven(arr[i])) {
            return false;
        }
    }
    return true;
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const array2 = [2, 3, 4,5,7,8]
console.log(isPerfectlyOdd(array2));




/* Q3. Write a function that given an array of integers returns the sum of elements at the prime
indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values
at the prime indices of the array
*/

function sumPrimeIndex(arr){
let sum = 0;
    for(let i = 0; i < arr.length; i++){
if(isPrime(i)){
    sum = sum + arr[i];
}
}
return sum;
}

const array3 = [1,5,6,7,8,3]
console.log(sumPrimeIndex(array3));


/* Q4. Write a function that takes a string parameter and returns the middle character of the
string. If string is of even length then function should return the middle two characters
*/

function middle(str){
    const length = str.length;
    const midPoint = Math.floor(length / 2);

    if(length % 2 ===0){
        return str[midPoint-1] + str[midPoint];

    }else{
        return str[midPoint];
    }
}

console.log(middle("abcd"));



/* Q5. Write a function isSumEqual that takes two array parameters and returns true if the
sum of elements in both arrays are equal.
*/