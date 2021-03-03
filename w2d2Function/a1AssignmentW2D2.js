"use strict";

let greatestCommonDivisor = function (m,n) {
    while ( m !== n) {
        if(m > n ){
            m = m - n;
        }else {
            n = n - m ;
        }
   
    }
    return m;
}
console.log(greatestCommonDivisor(98,56));