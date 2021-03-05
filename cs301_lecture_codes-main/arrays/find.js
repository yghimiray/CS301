let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

function callBackPredicate(user){
    return user.id === 2;
}
let user = users.find(callBackPredicate);
// let user = users.find(u => u.id == 2);

console.log(user.name); // John