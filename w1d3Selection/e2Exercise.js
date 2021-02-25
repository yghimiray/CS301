"use strict";

const prompt = require ('prompt-sync')();
const age = prompt ("Enter your age : ");
if(age<=0){
    console.log("Please enter valid age.")
}else if(age<=14){
    console.log("You can't drive yet. ")
}else if (age<=18){
    console.log("You can drive under supervision.")
}else{
    console.log("You can drive.")
}