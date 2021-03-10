"use strict";
const assert = require("assert");
const rec = require("./reviewRecursion.js");

/*
Write a recursive function to compute the power of a negative exponent
e.g., power(5, -3) = power(1/5, 3); 
Assume that both arguments to power are integers.
Write your power function in this same file and you can test it by running mocha reviewRecursion.js 
*/


describe("power of negative exponent", function () {

    it("power(5, -3)", function () {
        assert.ok(pow(5, -3) ,- 1/125 < .0001);
    });
    it("power(5, 3)", function () {
        assert.strictEqual(pow(5, 3) , 125);
    });

});

/**
 * 
 * @param {number} number is an integer
 * @param {*} power is an integer
 * @returns {number} floating point
 */
function pow(number, power){
//YOUR CODE HERE

}