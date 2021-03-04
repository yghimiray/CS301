"use strict";
/*• Write a function named testPrime that returns true when
argument to the function is a prime number, otherwise returns false.
• Now call the function to test if user input is prime or not
*/

function testPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
return true;
}
console.log (testPrime(7));