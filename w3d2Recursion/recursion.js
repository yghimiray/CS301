"use strict";

exports.power= power;
exports.countDigits = countDigits;
exports.reverse = reverse;

/*Write recursive functions to
• calculate the power of any base
• Write your own recursive logic for above problems. Do not use existing methods like reverse or length
property.
*/

/**
 * 
 * @param {number} base a base number
 * @param {number} pow a power of the base
 * @returns {number} the power product of base and power
 */
function power(base,pow){
    if(pow === 0){
        return 1;
    }else {
        return base * power(base,pow-1);
    }
}

console.log(power(10,4));

/*Write recursive functions to
• count the digits of a given number
*/

/**
 * 
 * @param {number} num a number to count its digits
 * @returns {number} digits count in given number
 */
function countDigits(num){
if(num === 0){
    return 0;
}else {
    return 1 + countDigits(parseInt(num/10));
}
}

console.log(countDigits(823456));


/*Write recursive functions to
• reverse a given string.
*/

/**
 * 
 * @param {string} str any string 
 * @returns {string} the reversed string of the given one
 */
function reverse(str){
    if(str===""){
        return "";
    }else {
       return reverse(str.substr(1)) + str[0];
    }
}

console.log(reverse("abcd"));