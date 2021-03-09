"use strict";

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;

/* Q1. Write the code, one line for each action:
a. Create an empty object car
b. Add the property name make with value Toyota
c. Add the property name model with value Camry
d. Print the object
e. Without modifying the code structure of the object, change the value of the model to
RAV4.
f. Print the object
g. Without modifying the code structure of the object, Remove property make from the
object
h. Print the object
*/

let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);

/* Q2.Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age
*/

/**
 * 
 * @param {Object} obj1 first object 
 * @param {Object} obj2 second object
 * @returns {Boolean} whether two objects are equal or not.
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}

/* Q3. Write the function countProperties(obj) which returns number of properties of an object
*/

/**
 * counts the properties in an object.
 * @param {Object} obj any object.
 * @returns {number} the count of properties.
 */
function countProperties(obj) {
    let count = 0;
    for (const key in obj) {
        count = count + 1;
    }
    return count;
}
console.log(countProperties(car));

/* Q4. 4. Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
otherwise return false.
*/

/**
 * 
 * @param {string} str a string
 * @returns {Boolean} true or false
 */
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    }
    return false;
}

let string = "You won a lottery.";
console.log(checkSpam(string));

/* Q5. 5. Write a function named suffix that returns the common suffix of two strings. For example, the
common suffix of “swimming” and “walking” is “ing”. This function takes two parameters and
returns the common suffix.
*/


/**
 * 
 * @param {string} str1 first string
 * @param {string} str2 second string
 * @returns {string} common suffix 
 */
function suffix(str1, str2) {
    let len1 = str1.length - 1;
    let len2 = str2.length - 1;
    let suffixStr = "";
    while (len1 >= 0 || len2 >= 0) {
        if (str1[len1] !== str2[len2]) {
           break;
        }else {
            suffixStr = str1[len1] + suffixStr;
        }
        len1--;
        len2--;
    }

    return suffixStr;
}

let firstStr = "swimming";
let secondStr = "walking";

console.log(suffix(firstStr, secondStr));


/* Q6. 6. Write a function named titleCase with one parameter named s. This function returns a copy of s
but with the first letter of each word capitalized.
*/

/**
 * 
 * @param {string} s a string
 * @returns {string} a string with title case
 */
function titleCase(s) {
    let firstChar = s.toUpperCase()[0];
    let subString = s.substr(1, s.length - 1);
    return firstChar + subString;
}

let str4 = "carrot";
console.log(titleCase(str4));


/* Q7. Write the function getAverageAge(users) that gets an array of objects with two properties
name and age and returns the average age.
Input 
[{name:"abc", age:20},
{name:"xyz", age:10}]
Output
15 (average of 10 and 20)
*/

/**
 * 
 * @param {Object} user1 first user
 * @param {Object} user2 second user
 * @returns {number} average age
 */
function getAverageAge(users) {
    let sumAge = 0;
    for (let person of users) {
        sumAge = sumAge + person.age;
    }
    let avgAge = sumAge / 2;
    return avgAge;
}


let people = [{ name: "Sam", age: 20 }, { name: "Fred", age: 10 }];
console.log(getAverageAge(people));

/* Q8. Write a function to return the sum of the first elements of the inner arrays for arrays with the
following structure. Use a for .. of loop.
arr = [[1, 2], [3, 4], [5, 6]]
console.log(sumFirst(arr)); → 9
*/

/**
 * 
 * @param {Array} arr an array with inner arrays 
 * @returns {number} sum of first elements of inner arrays
 */
function sumFirst(arr) {
    let sum = 0;
    for (let item of arr) {
        sum = sum + item[0];
    }
    return sum;
}

let arr = [[1, 2], [3, 4], [5, 6]]

console.log(sumFirst(arr));