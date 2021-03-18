"use strict";
/*eslint-disable*/

exports.findPorcupineNumber = findPorcupineNumber;
exports.addToTarget = addToTarget;
exports.mostFrequent = mostFrequent;
exports.closestToZero = closestToZero;
exports.addTwoNumbers = addTwoNumbers;
exports.addTwoNumbers = addTwoNumbers;
exports.addBinary = addBinary;
exports.columnTitle = columnTitle;
exports.columnNumber = columnNumber;
// exports.strobogrammaticNumber = strobogrammaticNumber;
exports.missingNumber = missingNumber;
exports.searchInsertPosition = searchInsertPosition;
exports.maxSubarray = maxSubarray;
exports.containsDuplicates = containsDuplicates;
exports.shortestWordDistance = shortestWordDistance;
exports.moveZeros = moveZeros;
exports.reverseVowels = reverseVowels;
// exports.summaryRanges = summaryRanges;
// exports.gcfStrings = gcfStrings;

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
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function findNextPrime(start, end) {
    let nextPrime;
    for (let i = start + 1; i <= end; i++) {
        if (isPrime(i)) {
            nextPrime = i;
            break;
        }
    }
    return nextPrime;
}

// console.log(findNextPrime(9,19));

function findPorcupineNumber(num) {
    let porcupine;
    let first = Math.floor((num+1) / 10) * 10 + 9; // 1 is added to num to make purcupine greater than num.
    let second = first + 10;
    let nextPrime = findNextPrime(first, second);
    while (!(isPrime(first) && nextPrime % 10 === 9)) {
        first = first + 10;
        second = first + 10;
        nextPrime = findNextPrime(first, second);
    }
    porcupine = first;
    return porcupine;
}

// console.log(findPorcupineNumber(409));



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

function addToTarget(arr, target) {
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
// console.log(addToTarget(nums, target));

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

function closestToZero(arr) {
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

const sumZero = [4, 2, -1, 3, -2, -3];
console.log(closestToZero(sumZero));

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


function addTwoNumbers(arr1, arr2) {
    let str1 = arrayToString(arr1);
    let str2 = arrayToString(arr2);
    let sum = Number(str1) + Number(str2);
    let arr = ArrayOfDigits(sum);
    return arr;
}

function ArrayOfDigits(num) {
    let arr = [];
    let lastDigit;
    while (num > 0) {
        lastDigit = num % 10;
        num = Math.floor(num / 10);
        arr.unshift(lastDigit);
    }
    return arr;
}


function arrayToString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    return str;
}

const arr1 = [3, 1, 4, 2];
const arr2 = [4, 6, 5];
// console.log(addTwoNumbers(arr1,arr2));

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


function addBinary(binary1, binary2) {
    let num1 = binaryToNum(binary1);
    let num2 = binaryToNum(binary2);
    let sum = num1 + num2;
    let sumBinary = numToBinary(sum);
    return sumBinary;
}

function numToBinary(num) {
    let binary = "", digit;
    while (num > 0) {
        digit = num % 2;
        num = Math.floor(num / 2);
        binary = digit + binary;
    }
    return binary;
}

function binaryToNum(binary) {
    let num = 0, digit;
    let len = binary.length - 1;
    for (let i = 0; i <= len; i++) {
        digit = Number(binary[i]) * Math.pow(2, len - i);
        num = num + digit;
    }
    return num;
}

// console.log(binaryToNum("1011"));
// console.log(addBinary("1011", "1011"));

/* Q7. Given a positive integer, return its corresponding column title as appear in an Excel Sheet.
For example:
1 →A, 2→B, 3→C,…,26→z,27→AB, →28->AB, \
#excel_sheet_column_title
Input        Output
1              A
28            AB
701           ZY
*/
function findChar(index) {
    let capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char;
    for (let i = 0; i < capString.length; i++) {
        if (index - 1 === i) {
            char = capString[i];
        }
    }
    return char;
}

function columnTitle(index) {
    let charExcel = "";
    let charIndex;
    while (index > 26) {
        charIndex = index % 26;
        charExcel = findChar(charIndex)+charExcel; 
        index = Math.floor(index / 26);
    }
    charExcel = findChar(index)+charExcel; 
    return charExcel;
}

// console.log(findChar(26));
// console.log(columnTitle(701));


/* Q8. Given a column title as appear in an excel sheet, return its corresponding column number
#excel_sheet_column_number
Input           Output
A                1
AB               28
ZY               701
*/

function findIndexChar(char) {
    let capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index;
    for (let i = 0; i < capString.length; i++) {
        if (char === capString[i]) {
            index = i + 1;
        }
    }
    return index;
}

function columnNumber(str) {
    let indexExcel = 0;
    let indexChar;
    let len = str.length - 1;
    for (let i = 0; i <= len; i++) {
        indexChar = findIndexChar(str[i]) * Math.pow(26, len - i);
        indexExcel = indexExcel + indexChar;
    }

    return indexExcel;
}

// console.log(findIndexChar("A"));
// console.log(columnNumber("A"));
// console.log(columnNumber("AB"));
// console.log(columnNumber("ZY"));
// console.log(columnNumber("AAA"));



/* Q9. A strobogrammatic number is a number that looks the same when rotated 180 degree (looked
upside down)
Write a function to determine if a number is strobogrammatic. The number is represented as
string.
#strobogrammatic_number
Input       Output
69          true
101           true
88          true
868         false
*/




/* Q10. Given an array containing n distinct numbers taken from 0,1,2,…,n, find the one that is missing
from the array.
#missing_number
Input                           Output
[3,0,1]                             2
[9,6,4,2,3,5,7,0,1]                 8
*/

function missingNumber(arr) {
    arr.sort();
    let missing;
    let arr1 = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            missing = arr[i] - 1;
            arr1.push(missing);
        }
    }
    return arr1;
}

const arr = [9, 6, 4, 2, 5, 7, 0, 1];
console.log(missingNumber(arr));



/* Q11. Given a sorted array and a target value, return the index if the target is found. If not, return the
index where it would be if it were inserted in order.
You may assume no duplicates in the array.
#search_insert_position

Input               Output
[1,3,5,6], 5            2
[1,3,5,6], 2            1
[1,3,5,6], 7            4
[1,3,5,6], 0            0
*/

function findIndex(arr, num) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
        }
    }
    return index;
}


function doesExist(arr, target) {
    for (let element of arr) {
        if (element === target) {
            return true;
        }
    }
    return false;
}

function searchInsertPosition(arr, target) {
    let index;
    if (doesExist(arr, target)) {
        index = findIndex(arr, target);
    } else {
        arr.push(target);
        arr.sort();
        index = findIndex(arr, target);
    }
    return index;
}

// const arr = [2,3,4,5,7,8]
// console.log(doesExist(arr,5));
// console.log(searchInsertPosition(arr,9));





/* Q12. Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.
#maxinum_subarray
Input                          Output                  Explanation
[-2,1,-3,4,-1,2,1,-5,4]           6                    [4,-1,2,1]
*/
function maxSubarray(arr) {
    let ContiguousArr = [];
    let max = arr[0] + arr[2];
    for (let i = 2; i < arr.length; i++) {
        let sum = arr[i] + arr[i - 2];
        if (sum > max) {
            max = sum;
            ContiguousArr = [arr[i - 2], arr[i - 1], arr[i], arr[i + 1]];
        }
    }
    console.log(ContiguousArr);
    return max;
}

// const arr = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(maxSubarray(arr));

/* Q13. Given an array of integers and an integer k, find out whether there are two distinct indices i and
j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most
k.
#contains_duplicate_ii
Input                               Output
nums=[1,2,3,1], k=3                 true
nums=[1,0,1,1], k=1                 true
nums= [1,2,3,1,2,3], k=2            false
*/

function indexOfDuplicates(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (arr[i] === arr[j]) {
                    arr1.push(i);
                    arr1.push(j);
                }
            }
        }
    }
    return arr1;
}

function containsDuplicates(arr, num) {
    let arr1 = indexOfDuplicates(arr);
    let indexDiff = arr1[1] - arr1[0];
    if (indexDiff === num) {
        return true;
    }
    return false;
}

// const arr = [1,2,3,1,2,3];
// console.log(indexOfDuplicates(arr));
// console.log(containsDuplicates(arr,4));


/* Q14. Given a list of words and two words word1 and word2, return the shortest distance between
these two words in the list.
#shortest_word_distance
Assume the words ["practice", "makes", "perfect", "coding", "makes"]
Input                                                    Output
word1 = "coding", word2 = "practice"                      3
word1 = "makes", word2= "coding"                          1
Note: You may assume that word1 does not equal to word2, and word1 and word2 are both in
the list
*/

function indexWordArray(arr, word) {
    let index;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            index = i;
            arr1.push(index);
        }
    }
    return arr1;
}

function shortestWordDistance(arr, word1, word2) {
    let arr1 = indexWordArray(arr, word1);
    let arr2 = indexWordArray(arr, word2);
    let shortest = arr1[0] - arr2[0];
    shortest = makeAbsolute(shortest);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let distance = arr1[i] - arr2[j];
            distance = makeAbsolute(distance);
            if (distance < shortest) {
                shortest = distance;
            }
        }
    }
    return shortest;
}

function makeAbsolute(num) {
    let absolute;
    if (num < 0) {
        absolute = num * -1;
    } else {
        absolute = num;
    }
    return absolute;
}


// const arr = ["practice", "makes", "perfect", "coding", "type", "hero", "makes"];
// console.log(indexWordArray(arr, "makes"));
// console.log(indexWordArray(arr, "coding"));
// console.log(shortestWordDistance(arr, "coding","makes"));




/* Q15. Given an array nums, write a function to move all 0's to the end of it while maintaining the
relative order of the non-zero elements.
#move_zeroes
Example:
Input: [0, 1, 0, 12, 3]
Output: [1,3,12,0,0]
Note: you must do this in-place without making a copy of the array.
*/

function moveZeros(arr) {
    arr.sort(comparator);
    for (let element of arr) {
        if (element === 0) {
            arr.push(arr.shift());
        }
    }
    return arr;
}

function comparator(arg1, arg2) {
    return arg1 - arg2;
}

// const arr = [0, 1, 0, 12,15,2,21, 3];
// console.log (moveZeros(arr));



/* Q16. Write a function that takes a string as input and reverse only the vowels of a string.
# reverse_vowels_of_a_string
Input Output
"hello" "holle"
"leetcode" "leotcede"
*/
function isVowel(str) {
    if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
        return true;
    }
    return false;
}

function vowelsArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            arr.push(str[i]);
        }
    }
    return arr;
}

function reverseVowels(str) {
    let arr = vowelsArray(str);
    arr = arr.reverse();
    console.log(arr);
    let strNew = "";
    let j = 0; // index of array
    for (let i = 0; i < str.length; i++) {
        if (!isVowel(str[i])) {
            strNew = strNew + str[i];
        } else {
            strNew = strNew + arr[j];
            j++;
        }
    }
    return strNew;
}

// console.log(isVowel("e"));
// console.log(vowelsArray("leetcode"));
// console.log("Expect butoniseta :",reverseVowels("batenisotu"));




/* Q17. Write a function summaryRanges, such that given a sorted integer array nums, returns the
smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each
element of nums is covered by exactly one of the ranges, and there is no integer x such that x is
in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b
#summary_ranges
Input                                     Output
[0,1,2,4,5,7]                     ["0->2","4->5","7"]
[0,2,3,4,6,8,9]                  ["0","2->4","6","8->9"]
[]                                 []
[-1]                             ["-1"]
[0]                                ["0"]
*/




/* Q18. For two strings s and t, we say "t divides s" if and only if s = t + ... + t (t concatenated with
    itself 1 or more times)
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
#greatest_common_divisor_of_strings
Input                                      Output
str1= "ABCABC", str2="ABC"                "ABC"
str1="ABABAB", str2="ABAB"                "ABAB"
str1="ABCDEF", str2="ABC"                    ""
*/





