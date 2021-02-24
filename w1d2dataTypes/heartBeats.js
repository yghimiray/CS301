"use strict";

const prompt = require ('prompt-sync')();
const age = prompt ("Enter your age : ");
const maxBeats = 220 - age ;
const slowBeats = maxBeats * 0.65 ;
const fastBeats = maxBeats * 0.85 ;
console.log ("MaxBeats : ", maxBeats , " SlowBeats : ",  slowBeats ," FastBeats : ", fastBeats) ;

console.log(Number(null));
console.log(Number(undefined));
console.log(Boolean("0"));
console.log(Boolean(" "));
let a = +prompt("A");
console.log(a);
