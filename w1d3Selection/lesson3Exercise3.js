"use strict";

const prompt = require ('prompt-sync')();
const num = +prompt ("Enter a number from 1 to 5 : ");
/*
if(num<=0 || num >=6){
    console.log("Please enter valid number.")
}else if(num === 1){
    console.log("One")
}else if (num === 2){
    console.log("Two")
}else if (num === 3){
    console.log("Three")
}else if (num === 4){
    console.log("Four")
}else {
    console.log("Five")
}
*/
switch(num){
    case 1 : console.log ("One"); break;
    case 2 : console.log ("Two"); break;
    case 3 : console.log ("Three"); break;
    case 4 : console.log ("Four"); break;
    case 5 : console.log ("Five"); break;
    default : console.log ("Please enter a valid number");
}