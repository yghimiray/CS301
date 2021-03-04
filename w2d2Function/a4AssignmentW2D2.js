"use strict";

const compute = function(computeFunc,m,n) {
       return computeFunc(m , n);
};

const add = function(m , n){
    return m + n;
}

console.log (compute(add, 2 , 3));