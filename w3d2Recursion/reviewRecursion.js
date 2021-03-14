"use strict";

/* Q1. Write a recursive function to compute the power of a negative exponent
e.g., power(5, -3) = power(1/5, 3);
Assume that both arguments to power are integers
*/

exports.pow = pow;
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



