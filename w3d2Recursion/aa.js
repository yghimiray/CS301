"use strict";
const assert = require("assert");
//const rec = require("./reviewRecursion.js");

/*
Write a recursive function to compute the power of a negative exponent
e.g., power(5, -3) = power(1/5, 3); 
Assume that both arguments to power are integers.
Write your power function in this same file and you can test it by running mocha reviewRecursion.js 
*/


describe("power of negative exponent", function () {

    it("power(5, -3)", function () {
        assert.ok(pow(5, -3) - 1 / 125 < .000001);
    });
    it("power(5, 3)", function () {
        assert.strictEqual(pow(5, 3), 125);
    });

});

// /**
//  * 
//  * @param {number} number is an integer
//  * @param {*} power is an integer maybe negative
//  * @returns {number} floating point
//  */
// function pow(number, power) {
//     if (power < 0) {
//         power = power * -1;
//         number = 1 / number;
//     }
//     if (power === 0) {
//         return 1;
//     } else {
//         const result = number * pow(number, power - 1);
//         return result;
//     }
// }


/**
 * 
 * @param {number} base a base number
 * @param {number} exp an exponential to the base
 * @returns {number} a power product
 */
 function pow(base,exp){
    if(exp === 0){
        return 1;
    }else if(exp < 0){
        return 1/base * pow(base,exp+1);
    }else{
        return base * pow(base,exp-1);
    }
   }

console.log(pow(5,-3));