"use strict";

const prompt = require ('prompt-sync')();

const km = prompt ("Enter kilometer : ");
const miles = km * 0.621;

console.log (miles);