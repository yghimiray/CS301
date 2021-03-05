let strings = ["Cat", "Ball", "Apple"];
strings.sort();
console.log(strings) // Apple, Ball, Cat

let numbers = [1, 2, 11, 21, 3, 32];
numbers.sort();
console.log(numbers); // 1, 11, 2, 21, 3, 32

numbers.sort(comparator);
console.log(numbers);

function comparator(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
}