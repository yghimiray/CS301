"use strict";

const prompt = require('prompt-sync')();
const cost = +prompt ("Enter the cost of House: ");

if (cost < 0) {
    console.log("Enter valid amount.");
} else if (cost < 50000) {
    console.log("The down payment is :", cost*.05)
} else if (cost < 100000) {
    console.log("The down payment is :", 1000 + (cost-50000) *.10)
} else if (cost < 200000){
    console.log("The down payment is :", 2000 + (cost-100000) *.15)
}else{
    console.log("The down payment is :", 5000 + (cost-200000) *.10)
}