"use strict";

/*Write both iterative and recursive solutions to calculate factorial of an
integer.
factorial (0) = 1
factorial (n) = n * factorial (n-1) [for n>0]
*/

/**
 * 
 * @param {number} n any number 
 * @returns {number} factorial number
 */
function factorial(num){
    while(num === 0){
        return 1;
    }
    return num * factorial(num-1) ;
}


console.log(factorial(4));


/*• Write recursive solution to find Fibonacci(n) based on following
definition
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) [for n>1]
*/


function fibonacci(num){
    if(num === 0){
    return 0;
}else if(num === 1){
    return 1;
}else {
return fibonacci(num - 1) + fibonacci(num - 2);
}
}

console.log(fibonacci(7));



