const prompt = require('prompt-sync')()

// ask the user to enter a number
// keep asking until the number is larger than 0
let x = Number(prompt("Please enter a positive number: "));
// we want to keep asking the user until x is a positive number
// so keep asking if the number is 0 or less

// no idea how many times it's going to repeat
while (x <= 0) {
    console.log("Sorry, the number is not positive");
    x = Number(prompt("Please enter a positive number: "));
}
console.log("Your number is", x);
