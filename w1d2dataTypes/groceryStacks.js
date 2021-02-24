"use strict";

const prompt = require ('prompt-sync')();
const totalBoxes = prompt("Enter no of boxes : ");
const boxesPerStack = prompt ("Enter boxes per stack : ");

const numFullStack = parseInt(totalBoxes/boxesPerStack);
console.log("Number of Full Stacks" , numFullStack);
const boxesPartialStack = totalBoxes%boxesPerStack;
console.log("Number of boxes in partial stack" , boxesPartialStack);
let numPartialStack;
if(boxesPartialStack===0){
numPartialStack=0;
}else{
    numPartialStack=1;
}
const totalStack = numFullStack + numPartialStack;
console.log("Number of total Stacks" , totalStack);