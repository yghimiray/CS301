"use strict";

const greatestCommonDivisor = function (m,n) {
    while ( m !== n) {
        if(m > n ){
            m = m - n;
        }else {
            n = n - m ;
        }
   
    }
    return m;
};

const leastCommonMultiple = function (a,b) {
    let g = greatestCommonDivisor(a,b);
   let LCM = ( a * b ) / g ; // GCD * LCM = product of two numbers.
    return LCM ;
};

console.log (leastCommonMultiple (20,28));