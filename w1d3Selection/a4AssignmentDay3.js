"use strict";

const prompt = require('prompt-sync')();
const status = prompt("Enter the status of the borrower;student or faculty or other: ");
const overdueBooks = prompt("Enter the number of overdue books : ");

if (status === "student") {
    if (overdueBooks === 0) {
        console.log("You can borrow for 6 weeks. ");
    }
    else if (overdueBooks < 3) {
        console.log("You can borrow for 4 weeks. ")
    } else {
        console.log("You can borrow for 2 weeks. ")
    }
} else if (status === "faculty") {
    if (overdueBooks === 0) {
        console.log("You can borrow for 12 weeks. ");
    }
    else if (overdueBooks < 3) {
        console.log("You can borrow for 10 weeks. ")
    } else {
        console.log("You can borrow for 8 weeks. ")
    }
} else {
    if (overdueBooks === 0) {
        console.log("You can borrow for 4 weeks. ");
    }
    else if (overdueBooks < 3) {
        console.log("You can borrow for 3 weeks. ")
    } else {
        console.log("You can borrow for 2 weeks. ")
    }
}
