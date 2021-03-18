"use strict";
/* eslint-disable*/

exports.computeHeight = computeHeight;
exports.findMinDistance = findMinDistance;

/* Q4. The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each
summer, its height increases by 1 meter.
Now, write a function computeHeight(height, cycles), that returns how tall
the tree will be after n growth cycles given the original height when planted.
*/

// Done by Yogesh 
function computeHeight(height, cycles) {
    let year = cycles / 2;
    for (let i = 0; i < year; i++) {
        height = height * 2;
        height = height + 1;
    }
    return height;
}

// console.log(computeHeight(1,4));


/* Q6. The distance between two array values is the number of indices between them. Write a
function findMinDistance, that given an array finds the minimum distance
between matching pairs of elements in the array. If no such value exists, return -1.
*/

// Done by Yogesh 

function findMinDistance(arr) {
    let min = arr.length;
    let distance;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (arr[i] === arr[j]) {
                distance = makeAbsolute(j - i);
                if (distance < min) {
                    min = distance;
                }
            } 
            }
        }
    }
    if(min === arr.length){
        return -1;
    }
    return min;
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

// const arr = [3, 2, 1, 13, 4, 12, 5 ]
// console.log(findMinDistance(arr));


// /* Q5. Write a function, computeCharges, that will accept an array that contains objects with
// properties for the customer Id and charges. Your function should return an array that contains
// objects with the customer Id, average charge, and maximam charge.
// Hint: write helper functions to getMax and getAverage of an array of charges to keep your code
// organized.
// */

// function getAverage(arr){
//     let sum = 0;
//     let len = arr. length;
//     for (let element of arr){
//         sum = sum + element;
//     }
//     let avg = sum / len;
//     return avg;
// }

// function getMax(arr){
// let max = arr[0];
// for (let element of arr){
//     if(element > max){
//         max = element;
//     }
// }
// return max;
// }

// const arr = [5,7,3]
// console.log(getMax(arr));

// function computeCharges(arr){

// }


/* Q3. There is a large pile of socks that must be paired by color. Write a
function countSocksPairs, that given an array of integers representing the color of each sock,
determines how many pairs of socks with matching colors there are.
Input Output Explanation
[1,2,1,2,1,3,2] 2 There is one pair of color 1 and one of color 2
[10,20,20,10,10,30,50,10,20] 3 Two pairs of color 10 and one pair of color 20
*/
//Done by simon

function countSocksPairs(ar) {

    let socks = {};

    let pairs = 0;

  for (let element of ar) {

    socks[element] = socks[element] + 1 || 1;

      if (socks[element] % 2 === 0) {

        pairs += 1;

      }

    }

  return pairs;

  }

  console.log(countSocksPairs([10,20,20,10,10,30,50,10,20] ))