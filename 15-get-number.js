const prompt = require('prompt-sync')();

// keep asking user until they enter a valid number
let number = Number(prompt("Enter a number: "));
while (number != 0 && !number) {
    console.log("Not a valid number");
    // if the number is not valid, we ask again
    number = Number(prompt("Enter a number: "));
}