"use strict";

const prompt = require('prompt-sync')();
const status = +prompt("Enter the status of the borrower;student or faculty or other: ");
const overdueBooks = prompt("Enter the number of overdue books : ");

if (overdueBooks === 0) {
    console.log("You can borrow for 6 weeks. ");
}
else if (overdueBooks < 3) {
    console.log("You can borrow for 4 weeks. ")
} else {
    console.log("You can borrow for 2 weeks. ")
}

