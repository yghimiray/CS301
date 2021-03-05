const prompt = require("prompt-sync")();

let user_input = prompt("Please enter a command: ");

while (user_input !== 'stop') {
  console.log("Your command was: " + user_input);
  // user_input = prompt("Please enter a command: ");
}
console.log("exiting...");
