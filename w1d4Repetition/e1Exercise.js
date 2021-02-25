"use strict";

/*Write a loop that prints all even number between 1 to 20 (inclusive)
• Write both while and for versions
*/

// let i = 2;
// while(i <= 20){
//     console.log(i);
//     i+=2;
// }


// for (let i =2; i <=20; i+=2){
//     console.log(i);
// }

/*• Write a loop that keeps on prompting for age until you enter age
older than 18
• Write both while and do while versions.
*/

const prompt = require ('prompt-sync')();
// let age = +prompt ("Enter your age : ");
// while(age <= 18){
//  age = +prompt ("Enter the year : ");
// }

let age;
do{
    age = +prompt ("Enter the year : ");
}while(age <= 18);

/*Make a defining table and program to print out the balance of a
savings account that compounds interest monthly. Prompt the user
for the
• initial amount
• annual interest rate
• number of years to compound
*/
const initialAmt = +prompt ("Enter the initial amount : ");
const annualrate = +prompt ("Enter the annual interest rate : ");
const years = +prompt ("Enter the number of years of loan: ");
const monthRate = annualrate/12;
const totalMonths = years*12;
let principal = initialAmt;

for(let i =1; i <= totalMonths; i++){
let interestAmt = principal * monthRate/100;
principal = principal + interestAmt ;
    
}
console.log (principal);