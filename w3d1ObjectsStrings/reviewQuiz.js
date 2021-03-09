"use strict";

let person1 ={
    name : "Allen",
    age : 23,
    employed : true,
}

let person2 = person1;
console.log(person1===person2);
person1.salary = 5000;
person1.age = 35;

console.log(person2.salary);
console.log(person2.age);

delete person2.salary;
console.log(person1.salary);
person2.salary = 3000;
console.log(person1.salary);


