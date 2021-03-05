let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr ); // "I", "study", "complex", "language", "JavaScript"